import React, {useState, useEffect} from 'react'
// import API from './helprs/api'
// import './Styles/Twitter.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRepost} from 'react-icons/bi';
import { FaRegComment} from 'react-icons/fa';
import { MdVerified} from 'react-icons/md';
import { IoOpenOutline} from 'react-icons/io5';



export default function Twitter(props) {
    const [postiveTweets, setPostiveTweets] = useState([])
    const [negativeTweets, setNegativeTweets] = useState([])
    const [isPositiveCliced, setIsPositiveCliced] = useState('true')
    const [isNegativeClicked, setIsNegativeClicked] = useState()
    const [tweetsDisplay, setTweetsDisplay] = useState([])
    const [lastScrollPos, setLastScrollPos] = useState(0)

    //get the dev of the buttons to minuplate when scrolling up or down
    const buttons = document.getElementById("display_btns");

    function listenScrollEvent({target}){
        /**when scroll even happens, this function checks if the scroll value if it's less than 170 then 
         * it returns after removing the classes to animate, otherwise it will add classes to the buttons div
         * in order to animate it, Fade out: when the user scrolls down, Fade in: when the user scrolls up
        */
        console.log(`last: ${lastScrollPos}\t new: ${target.scrollTop}`)
        if (target.scrollTop < 170){
            buttons.classList.remove("hide_buttons")
            return  buttons.classList.remove("fadein_buttons")
        }
        if (target.scrollTop > lastScrollPos) {
            buttons.classList.remove("fadein_buttons")
            setLastScrollPos(target.scrollTop - 2)
            return buttons.classList.add("hide_buttons")
        }
        else {
            setLastScrollPos(target.scrollTop)
            buttons.classList.remove("hide_buttons")
            return buttons.classList.add("fadein_buttons")
        }
    }

    function formatDate(date){
        //Remove the seonds and extra digits from the date string
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
        // status["retweeted_status"]["full_text"].
        // props.tweets.filter((tweet) =>{
        //     if ((props.postive).indexOf(tweet.id) > -1)
        //         setPostiveTweets((prev) => [...prev, tweet])
        //     else if ((props.negative).indexOf(tweet.id) > -1)
        //         setNegativeTweets((prev) => [...prev, tweet])
        // })
    }, [props.postive, props.negative])

    const displayRequestClass = () => {
        let classifiedTweets;
        if (isPositiveCliced === 'true'){
            classifiedTweets = postiveTweets.map((tweet) => {
                return(
                    <span className="tweet_container" key={tweet.id}>
                        <img src={tweet.profile_image_url} alt="profile_image"></img>
                            <div className="user_info">
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <b style={{'color':'#F5F8FA', 'font-size':'1em', "marginLeft": '-0.6em'}}>{tweet.screen_name}</b>
                                    {tweet.verified ? <MdVerified className="verified_icon"/>: null}
                                    <p style={{'color':'#AAB8C2', 'font-size':'0.8em', 'marginLeft': '0.5em'}}>{`@${tweet.username}`}</p>
                                    <IoOpenOutline className="open_tweet" onClick={() => {
                                        const url = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id;
                                        window.open(url, '_blank')
                                    }}/>
                                </span>
                                
                            <p className='tweet_text' id="tweet_txt">{tweet.tweet}</p>
                            <div className='tweet_date'> 
                                <p>{formatDate(tweet.date)}</p>
                            </div>
                            <div className='tweet_analatics'>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <FaRegComment className="analatics_icon"/>
                                    <p> {tweet.reply_count} </p>
                                </span>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <BiRepost className="analatics_icon analatics_icon_retweet"/>
                                    <p>{tweet.retweet_count} </p>
                                </span>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <AiOutlineHeart className="analatics_icon"/>
                                    <p>{tweet.favorite_count}</p>
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
                    <span className="tweet_container" key={tweet.id}>
                        <img src={tweet.profile_image_url} alt="profile_img"></img>
                        <div className="user_info">
                            <span style={{'display': 'flex', 'align-items':'center'}}>
                                <b style={{'color':'#F5F8FA', 'fontSize':'1em', 'marginLeft': '-0.6em'}}>{tweet.screen_name}</b>
                                {tweet.verified ? <MdVerified className="verified_icon"/>: null}
                                <p style={{'color':'#AAB8C2', 'fontSize':'0.8em', 'marginLeft': '0.5em'}}>{`@${tweet.username}`}</p>
                                <IoOpenOutline className="open_tweet" onClick={() => {
                                    const url = 'https://twitter.com/' + tweet.username + '/status/' + tweet.id;
                                    window.open(url, '_blank')
                                }}/>
                            </span>
                            <p className='tweet_text' id="tweet_txt">{tweet.tweet}</p>
                            <div className='tweet_date'> 
                                <p>{formatDate(tweet.date)}</p>
                            </div>
                            <div className='tweet_analatics'>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <FaRegComment className="analatics_icon" />
                                    <p> {tweet.reply_count} </p>
                                </span>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <BiRepost className="analatics_icon analatics_icon_retweet"/>
                                    <p>{tweet.retweet_count} </p>
                                </span>
                                <span style={{'display': 'flex', 'align-items':'center'}}>
                                    <AiOutlineHeart className="analatics_icon"/>
                                    <p>{tweet.favorite_count}</p>
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
            await setTweetsDisplay(displayRequestClass())
            //Highlight Search Term
            const upperCaseFirst = props.searchTerm.charAt(0).toUpperCase() + props.searchTerm.slice(1).toLowerCase();
            const tweetsElements = [... document.getElementsByClassName('tweet_text')]
            for (let i = 0; i < tweetsElements.length; i++) {
                document.getElementsByClassName('tweet_text')[i].innerHTML = document.getElementsByClassName('tweet_text')[i].innerHTML.replaceAll(`${upperCaseFirst}|Trump|${props.searchTerm.toLowerCase()}|${props.searchTerm.toUpperCase()}`, "<b>"+upperCaseFirst+"</b>");
            }
            console.log(upperCaseFirst)
            // console.log(props.searchTerm)
        };
        changeDisplayedTweets();
    }, [postiveTweets, negativeTweets, isPositiveCliced, isNegativeClicked])

    return (
        <div className="display_tweets">
            <div className='display_btns' id='display_btns'>
                <button className='positive_btn' clicked={isPositiveCliced} onClick={posiClick}> <b>Positive</b> </button>
                <button className='negative_btn' clicked={isNegativeClicked} onClick={negClick}> <b>Negative</b> </button>
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

