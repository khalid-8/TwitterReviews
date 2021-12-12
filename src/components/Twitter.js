import React, {useState, useEffect} from 'react'
// import API from './helprs/api'
// import './Styles/Twitter.css'
import { v4 as uuidv4 } from 'uuid';
import '../Styles/testTwitter.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRepost} from 'react-icons/bi';
import { FaRegComment} from 'react-icons/fa';
import { MdVerified} from 'react-icons/md';
import { IoOpenOutline} from 'react-icons/io5';
import {useLanguage, LangOptions } from '../context';




export default function Twitter(props) {
    const [postiveTweets, setPostiveTweets] = useState([])
    const [negativeTweets, setNegativeTweets] = useState([])
    const [isPositiveCliced, setIsPositiveCliced] = useState('true')
    const [isNegativeClicked, setIsNegativeClicked] = useState('false')
    const [tweetsDisplay, setTweetsDisplay] = useState([])
    const [lastScrollPos, setLastScrollPos] = useState(0)
    const [lastScrollUpPos, setLastScrollUpPos] = useState(0)
    const [divHeight, setDivHeight] = useState(0)

    //get the dev of the buttons to minuplate when scrolling up or down
    const buttons = document.getElementById("display_btns");

    //get the value of langugage context
    const currentLang = useLanguage();

    //Values to be used for the scroll event listner function
    const scorllDownThreshold = 180
    const scrollUpThreshold = 40
    const maxBottomVal = 90
    const maxDivHeight = 40
    
    function listenScrollEvent({target}){
        /**ToDO: fix the fast scrolling issue (when scrolling fast the div dosen't behave as expected (doesn't fully disapear or fully apear)
         * /*TODO: add threshold after which the div will apear or dissapear (currently the div appear and dispear as soon as the user scroll up and down)
        */
        /**when scroll event happens inside the tweets dispaly div, this function checks if the scroll value if it's
         * less than 180 to hide the buttons (postive, negative) off screen by adding properties (bottom & heigt)
         *  if the scroll is greater than 180 and it's greater than the previous scroll value (scrolling down) the buttuns will dissapare, and update the previous scroll value
         * if the scroll is greater than 180 but less than the previous scroll (scrolling down) the bottuns will reapear.
        */
        //get the tweets scroll div height
        // const scrollDivHeight = document.getElementById('scrl_twts').scrollHeight
        const currentScrollPos = target.scrollTop
        // console.log(`lastScrollpos: ${lastScrollPos}, lastScrollUppos: ${lastScrollUpPos}, CurrentScroll: ${currentScrollPos}`)
        if (currentScrollPos < scorllDownThreshold ){
            //remove the bottom and height properties so the div have it's original posistion
            buttons.style.removeProperty("bottom")
            return buttons.style.removeProperty("height")
        }
        if (currentScrollPos > lastScrollPos){
            
            // if((target.scrollTop-scorllDownThreshold > maxBottomVal) && (divHeight-(target.scrollTop-scorllDownThreshold) < maxDivHeight)) {console.log("A Finshed******"); return setLastScrollUpPos(target.scrollTop)}
            // if the div have fade in (means the user scroll down (hide the div) then scroll up (show the div) then scrolled down again) change the cacluation 
            if (lastScrollUpPos > lastScrollPos){
                if (currentScrollPos-lastScrollPos < maxBottomVal) buttons.style.setProperty('bottom', `${currentScrollPos-lastScrollPos}px`)
                if (divHeight-(currentScrollPos-lastScrollPos) >= maxDivHeight)  buttons.style.setProperty('height', `${divHeight-(currentScrollPos-lastScrollPos)}px`)
                else {setLastScrollUpPos(currentScrollPos); setLastScrollPos(currentScrollPos)}
                return
            }
            /**update the previous scroll value, then increase the bottom value untill it's 50px 
             * and decrease the div height untill it meets the max div height (40 px)*/
            // console.log("***HERE AGAIN SCROLL DOWN***")
            setLastScrollPos(currentScrollPos)
            setLastScrollUpPos(currentScrollPos)
            if (currentScrollPos-scorllDownThreshold < maxBottomVal) buttons.style.setProperty('bottom', `${currentScrollPos-scorllDownThreshold}px`)
            if (divHeight-(currentScrollPos-scorllDownThreshold) >= maxDivHeight) buttons.style.setProperty('height', `${divHeight-(currentScrollPos-scorllDownThreshold)}px`)
            return 
        }
        else if(currentScrollPos < lastScrollUpPos){
            /**decrease the bottom value untill it's 0px 
             * and increase the div height untill it's = to the original height of the div (divHeight)
             * that was captaured before increasing or decreasing it's size upon scrolling*/
            // reset scroll position
            // console.log("***SHIIIIIIT SCROLL UP***")
            if ((currentScrollPos-lastScrollUpPos)+(scorllDownThreshold-scrollUpThreshold) < 0 && divHeight - ((lastScrollUpPos-currentScrollPos)+ scrollUpThreshold) < 0) return setLastScrollPos(currentScrollPos)
            if ((currentScrollPos-lastScrollUpPos)+(scorllDownThreshold-scrollUpThreshold) >= 0) buttons.style.setProperty('bottom', `${(currentScrollPos-lastScrollUpPos)+(scorllDownThreshold-scrollUpThreshold)}px`)
            if (divHeight - ((lastScrollUpPos-currentScrollPos)+ scrollUpThreshold) >= 0) buttons.style.setProperty('height', `${(lastScrollUpPos-currentScrollPos)+ scrollUpThreshold}px`)
            return 
        }
    }

    //Replace more than 3 digits numbers with . + k (i.e 3400 = 3.4k)
    function formatAnalatics (n){
        if (n < 1e3) return n;
        if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
    }
    //Remove the seonds and extra digits from the date string
    function formatDate(date){
        let newDate = date.replace('+0000 ', '');
        let sec = /:\d{2} /.exec(newDate) 
        newDate = newDate.replace(sec, ' ')
        return newDate; 
    }

    //Compare tweets based on their likes and rewtees
    function compare( a, b ) {
        if ((a.retweet_count + a.favorite_count) > (b.retweet_count + b.favorite_count)){
            return -1;
        }
        if ( (a.retweet_count + a.favorite_count) < (b.retweet_count + b.favorite_count) ){
            return 1;
        }
        return 0;
    }
    //   objs.sort( compare );

    const posiClick = () =>{
        setIsNegativeClicked('false')
        setIsPositiveCliced('true')
    }

    const negClick = () =>{
        setIsPositiveCliced('false')
        setIsNegativeClicked('true')
    }

    //Add tweets to their own classification.
    useEffect(() => {
        /**when thes fucntion loads after each refresh or new search
          empty previous tweets then sort the new tweets based on their (likes + retweets) */
        setPostiveTweets([])
        setNegativeTweets([])

        props.postive.sort(compare)
        props.negative.sort(compare)

        setPostiveTweets(props.postive) 
        setNegativeTweets(props.negative)

        //get the buttons div height to be used in the scrollhandler function
        const buttons = document.getElementById("display_btns");
        setDivHeight(buttons.clientHeight)
    }, [props.postive, props.negative])

    //display tweets based on the button clicked (i.e positive or negative)
    const displayRequestClass = () => {
        let classifiedTweets;
        if (isPositiveCliced === 'true'){
            classifiedTweets = postiveTweets.map((tweet) => {
                return(
                    <span className="tweet_container" key={tweet.id+uuidv4()}>
                        <div className="profile_img">
                            <img src={tweet.profile_image_url} alt="profile_img"></img>
                        </div>
                        <div className="tweet_info">
                            <span className="user_info">
                                <div style={{'display': 'flex', 'align-items':'center'}}>
                                    <b style={{'color':'#F5F8FA', 'fontSize':'1em'}}>{tweet.screen_name}</b>
                                    {tweet.verified ? <MdVerified className="verified_icon"/>: null}
                                    <p style={{'color':'#AAB8C2', 'fontSize':'0.8em', 'marginLeft': '0.5em'}}>{`@${tweet.username}`}</p>
                                    <IoOpenOutline className="open_tweet" onClick={() => {
                                        const url = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id;
                                        window.open(url, '_blank')
                                    }}/>
                                </div>
                            </span>
                            <p className='tweet_text' id="tweet_txt">{tweet.tweet}</p>
                            
                            <p className="tweet_date">{formatDate(tweet.date)}</p>
                        
                            <div className='tweet_analatics'>
                                <span className="tweet_analatics_replies">
                                    <FaRegComment className="analatics_icon"/>
                                    <p> {formatAnalatics(tweet.reply_count)} </p>
                                </span>
                                <span className="tweet_analatics_retweets">
                                    <BiRepost className="analatics_icon analatics_icon_retweet"/>
                                    <p>{formatAnalatics(tweet.retweet_count)} </p>
                                </span>
                                <span className="tweet_analatics_likes">
                                    <AiOutlineHeart className="analatics_icon"/>
                                    <p>{formatAnalatics(tweet.favorite_count)}</p>
                                </span>
                            </div>
                        </div>
                    </span>
                )
            }
        )}
        else{
            classifiedTweets = negativeTweets.map((tweet) => {
                tweet.tweet.replace(props.searchTerm, "<b style={{'color': '#1DA1F2'}}>"+props.searchTerm+"</b>")
                return(
                    <span className="tweet_container" key={tweet.id+uuidv4()}>
                        <div className="profile_img">
                            <img src={tweet.profile_image_url} alt="profile_img"></img>
                        </div>
                        <div className="tweet_info">
                            <span className="user_info">
                                <div style={{'display': 'flex', 'align-items':'center'}}>
                                    <b style={{'color':'#F5F8FA', 'fontSize':'1em'}}>{tweet.screen_name}</b>
                                    {tweet.verified ? <MdVerified className="verified_icon"/>: null}
                                    <p style={{'color':'#AAB8C2', 'fontSize':'0.8em', 'marginLeft': '0.5em'}}>{`@${tweet.username}`}</p>
                                    <IoOpenOutline className="open_tweet" onClick={() => {
                                        const url = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id;
                                        window.open(url, '_blank')
                                    }}/>
                                </div>
                            </span>
                            <p className='tweet_text' id="tweet_txt">{tweet.tweet}</p>
                            
                            <p className="tweet_date">{formatDate(tweet.date)}</p>
                        
                            <div className='tweet_analatics'>
                                <span className="tweet_analatics_replies">
                                    <FaRegComment className="analatics_icon"/>
                                    <p> {formatAnalatics(tweet.reply_count)} </p>
                                </span>
                                <span className="tweet_analatics_retweets">
                                    <BiRepost className="analatics_icon analatics_icon_retweet"/>
                                    <p>{formatAnalatics(tweet.retweet_count)} </p>
                                </span>
                                <span className="tweet_analatics_likes">
                                    <AiOutlineHeart className="analatics_icon"/>
                                    <p>{formatAnalatics(tweet.favorite_count)}</p>
                                </span>
                            </div>
                        </div>
                    </span>
                )
            }
        )}
        return classifiedTweets
    }

    //update tweets to display based on button clicked
    useEffect(() => {
        async function changeDisplayedTweets (){
            setTweetsDisplay([])
            await setTweetsDisplay(displayRequestClass())
        };
        changeDisplayedTweets().then(() => {
            //Highlight Search Term
            const upperCaseFirst = props.searchTerm.charAt(0).toUpperCase() + props.searchTerm.slice(1).toLowerCase();
            const hashtag = props.searchTerm.replace(" ", '_')
            const tweetsElements = document.getElementsByClassName('tweet_text')
            for (let i = 0; i < tweetsElements.length; i++) {
                tweetsElements[i].innerHTML = tweetsElements[i].innerHTML.replaceAll(`${upperCaseFirst}`, "<b>"+upperCaseFirst+"</b>");
                tweetsElements[i].innerHTML = tweetsElements[i].innerHTML.replaceAll(`${hashtag}`, "<b>"+hashtag+"</b>");
            }
            console.log(upperCaseFirst)
            console.log(props.searchTerm)
        });
    }, [postiveTweets, negativeTweets, isPositiveCliced, isNegativeClicked, props.searchTerm])

    return (
        <div className="display_tweets">
            <div className='display_btns' id='display_btns'>
                <button className='positive_btn' clicked={isPositiveCliced} onClick={posiClick}> <b>{LangOptions.Twitter[currentLang].postive}</b> </button>
                <button className='negative_btn' clicked={isNegativeClicked} onClick={negClick}> <b>{LangOptions.Twitter[currentLang].Negative}</b> </button>
            </div>
            <div className="scroll_tweets" onScroll={listenScrollEvent}> 
                {tweetsDisplay}
            </div>
        </div>
    )
}


// <span className="tweet_container">
//     <img src={props.tweets[1].user.profile_image_url} alt="profile image"></img>
//     <div className="user_info">
//         <span style={{'display': 'flex', 'align-items':'center'}}>
//             <b style={{'color':'#F5F8FA', 'font-size':'1em', 'margin-left': '-0.6em'}}>{props.tweets[1].user.name}</b>
//             <p style={{'color':'#AAB8C2', 'font-size':'0.8em', 'margin-left': '0.8em'}}>{`@${props.tweets[1].user.screen_name}`}</p>
//         </span>
//         <p className='tweet_text' >{ props.tweets[1].text}</p>
//     </div>
// </span>


// const FileSaver = require('file-saver');

// // async function search (){
// // }
// async function search(){
//     const query = "dave chappelle"
//     await API.Search(query, 'en').then((res) =>{
//         console.log(res.results);
//         //Write the tweets to json file
//         const json = JSON.stringify(res.results);
//         const blob = new Blob([json], {type: "application/json;charset=utf-8"});
//         FileSaver.saveAs(blob, "mynewTweets2.json");
//     });
// }

