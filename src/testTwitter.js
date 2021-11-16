import React, {useState, useEffect} from 'react'
// import API from './helprs/api'
import './Styles/testTwitter.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiRepost} from 'react-icons/bi';
import { FaRegComment} from 'react-icons/fa';
import { MdVerified} from 'react-icons/md';
import { IoOpenOutline} from 'react-icons/io5';


export default function TestTwitter() {
    const [postiveTweets, setPostiveTweets] = useState([])
    const [negativeTweets, setNegativeTweets] = useState([])
    const [isPositiveCliced, setIsPositiveCliced] = useState('true')
    const [isNegativeClicked, setIsNegativeClicked] = useState()
    const [tweetsDisplay, setTweetsDisplay] = useState([])
    const [lastScrollPos, setLastScrollPos] = useState(0)
    const [divHeight, setDivHeight] = useState(0)


    const SearchTerm = "Ronaldo"

    const postives = [
        {
            "id" : "94304",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 5,
            "retweet_count" : 304,
            "favorite_count" : 800, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
            "user_id" : "e325234524452",
            "verified": true
        },
        {
            "id" : "943324",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 30,
            "retweet_count" : 34,
            "favorite_count" : 100, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
            "user_id" : "e32523442524452",
            "verified": true
        },
        {
            "id" : "9431104",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 1000,
            "retweet_count" : 3404,
            "favorite_count" : 6800, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://allthings.how/wp-content/uploads/2020/10/allthings.how-how-to-change-your-profile-picture-on-google-meet-profile-photo.png",
            "user_id" : "e3252344153524452",
            "verified": true
        }
    ]

    const negatives = [
        {
            "id" : "9430304",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 0,
            "retweet_count" : 20004,
            "favorite_count" : 50800, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg",
            "user_id" : "e32523004524452",
            "verified": true
        },
        {
            "id" : "94809304",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 90,
            "retweet_count" : 3304,
            "favorite_count" : 8400, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
            "user_id" : "e325234908524452",
            "verified": true
        },
        {
            "id" : "943005004",
            "date" : "nov 29 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            "reply_count": 0,
            "retweet_count" : 1304,
            "favorite_count" : 2300, 
            "screen_name": "khalid wew",
            "username" : "Ouroe",
            "profile_image_url": "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
            "user_id" : "e32523454050924452",
            "verified": true
        },
        {
            "id" : "9430304",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 0,
            "retweet_count" : 20004,
            "favorite_count" : 50800, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg",
            "user_id" : "e32523004524452",
            "verified": true
        },
        {
            "id" : "94809304",
            "date" : "nov 25 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
            "reply_count": 0,
            "retweet_count" : 3304,
            "favorite_count" : 8400, 
            "screen_name": "sudiew wew",
            "username" : "Sudiew43",
            "profile_image_url": "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
            "user_id" : "e325234908524452",
            "verified": true
        },
        {
            "id" : "943005004",
            "date" : "nov 29 39:32 2021",
            "tweet" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            "reply_count": 0,
            "retweet_count" : 1304,
            "favorite_count" : 2300, 
            "screen_name": "khalid wew",
            "username" : "Ouroe",
            "profile_image_url": "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
            "user_id" : "e32523454050924452",
            "verified": true
        }
    ]
    //get the dev of the buttons to minuplate when scrolling up or down
    const buttons = document.getElementById("display_btns");

    function listenScrollEvent({target}){
        /**TODO make the function reset whenever the div reapear again, currently the div only dispaear again if the scroll value is larger than the previous point at which it reapeared
        /*ToDO: fix the fast scrolling issue (when scrolling fast div dosen't full disapear or fully apear)*/
        
        /**when scroll event happens inside the tweets dispaly div, this function checks if the scroll value if it's
         * less than 180 to hide the buttons (postive, negative) off screen by adding properties (bottom & heigt)
         *  if the scroll is greater than 180 and it's greater than the previous scroll value (scrolling down) the buttuns will dissapare, and update the previous scroll value
         * if the scroll is greater than 180 but less than the previous scroll (scrolling down) the bottuns will reapear.
        */
        //get the tweets scroll div height
        // const scrollDivHeight = document.getElementById('scrl_twts').scrollHeight

        if (target.scrollTop < 180 ){
            //remove the bottom and height properties so the div have it's original posistion
            buttons.style.removeProperty("bottom")
            return buttons.style.removeProperty("height")
        }
        if (target.scrollTop > lastScrollPos){
            /**update the previous scroll value, then increase the bottom value untill it's 50px 
             * and decrese the div height untill it's 40
            */
            setLastScrollPos(target.scrollTop)
            if (target.scrollTop-180 < 50) buttons.style.setProperty('bottom', `${target.scrollTop-180}px`)
            if (divHeight-(target.scrollTop-180) >= 40) buttons.style.setProperty('height', `${divHeight-(target.scrollTop-180)}px`)
            return 
        }
        else if(target.scrollTop < (lastScrollPos +40)){
            /**decrease the bottom value untill it's 0px 
             * and increase the div height untill it's == to the original height of the div (divHeight)
             * that was captaured increasing or decreasing it's size upon scrolling
            */
            // reset scroll position
            // if ((target.scrollTop-lastScrollPos)+140 < 0 && divHeight - ((lastScrollPos-target.scrollTop)+ 40) <= 0) return
            if ((target.scrollTop-lastScrollPos)+140 > 0) buttons.style.setProperty('bottom', `${(target.scrollTop-lastScrollPos)+140}px`)
            if (divHeight - ((lastScrollPos-target.scrollTop)+ 40) >= 0) buttons.style.setProperty('height', `${(lastScrollPos-target.scrollTop)+ 40}px`)
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

    //Handle positive button click
    const posiClick = () =>{
        setIsNegativeClicked('false')
        setIsPositiveCliced('true')
    }

    //Handle negative button click
    const negClick = () =>{
        setIsPositiveCliced('false')
        setIsNegativeClicked('true')
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

    //Add tweets to their own classification, after sorting them.
    useEffect(() => {
        /**when thes fucntion loads after each refresh or new search,
          empty previous tweets then sort the new tweets based on their (likes + retweets) */
        setPostiveTweets([])
        setNegativeTweets([])

        postives.sort(compare)
        negatives.sort(compare)

        setPostiveTweets(postives) 
        setNegativeTweets(negatives)

        //get the buttons div height to be used in the scrollhandler function
        const buttons = document.getElementById("display_btns");
        setDivHeight(buttons.clientHeight)
    }, [])


    //display tweets based on the button clicked (i.e positive or negative)
    const displayRequestClass = () => {
        let classifiedTweets;
        if (isPositiveCliced === 'true'){
            classifiedTweets = postiveTweets.map((tweet) => {
                return(
                    <span className="tweet_container" key={tweet.id}>
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
                tweet.tweet.replace(SearchTerm, "<b style={{'color': '#1DA1F2'}}>"+SearchTerm+"</b>")
                return(
                    <span className="tweet_container" key={tweet.id}>
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
            await setTweetsDisplay(displayRequestClass())
            //Highlight Search Term
            const upperCaseFirst = SearchTerm.charAt(0).toUpperCase() + SearchTerm.slice(1).toLowerCase();
            const tweetsElements = [... document.getElementsByClassName('tweet_text')]
            for (let i = 0; i < tweetsElements.length; i++) {
                document.getElementsByClassName('tweet_text')[i].innerHTML = document.getElementsByClassName('tweet_text')[i].innerHTML.replaceAll(`${upperCaseFirst}|Trump|${SearchTerm.toLowerCase()}|${SearchTerm.toUpperCase()}`, "<b>"+upperCaseFirst+"</b>");
            }
            console.log(upperCaseFirst)
            // console.log(props.searchTerm)
        };
        changeDisplayedTweets();
    }, [postiveTweets, negativeTweets, isPositiveCliced, isNegativeClicked])

    return (
        <div className="display_tweets">
            <div className='display_btns' id='display_btns' scroll-pos={`-${lastScrollPos}%`}>
                <button className='positive_btn' clicked={isPositiveCliced} onClick={posiClick}> <b>Positive</b> </button>
                <button className='negative_btn' clicked={isNegativeClicked} onClick={negClick}> <b>Negative</b> </button>
            </div>
            <div className="scroll_tweets" id="scrl_twts" onScroll={listenScrollEvent}> 
                {tweetsDisplay}
            </div>
        </div>
    )
}
