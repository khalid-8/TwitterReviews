import '../Styles/Search.css'
import React, {useState} from 'react'
import Loader from "react-loader-spinner";
import SearchResults from './SearchResults';
import API from '../helprs/api'
import LangMenu from '../components/LangMenu'
import {useLanguage, LangOptions } from '../context';
import { notify } from "../components";


export default function Search() {

    const [loading, SetLoading] = useState(false);
    const [hideTitle, setHideTitle] = useState(false)
    const [tweets, setTweets] = useState()
    const currentLang = useLanguage();

    async function IpAddExceedLimit(){
        const ipAdd = await API.GetIpAddress()
        console.log(ipAdd.IPv4)
        return ipAdd.IPv4
        // if (ipAdd.IPv4 === "33.167.66.156") return true
        // return false
    }

    async function search(query){
        //check if the query is not empty 
        if (query.trim() === "") {
            notify(LangOptions.MainPage[currentLang].emptyError)
            return -1;
        }
        const userIp = await IpAddExceedLimit()
        // trigger the loader
        SetLoading(true);
        //check if the query is in arabic
        const ar = new RegExp('[ء-ي]+')
        // const lan = new RegExp("[\u0600-\u06FF]")
        //request body to be sent to the backend
        const req = {
            'query' : query,
            'lan' : ar.test(query)? "ar" : "en",
            'ip_address': userIp
        
        }
        //Send th request to the Backend
        const TweetSearch = await API.Search(req)
        if(TweetSearch === -1) {
            notify(LangOptions.MainPage[currentLang].generalError)
            return -1;
        }
        //check if the user exceeded their daily limit by checking their IP address
        if(TweetSearch === -2) {
            notify(LangOptions.MainPage[currentLang].exceedError)
            return -1;
        }
        return TweetSearch;
    }


    async function SubmitOnEnter(event){
        // console.log(event.key)
        if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        //Close Mobile keyboard
        const SearchBar = document.getElementById("SeachBar");
        SearchBar.blur();
        //Search Twitter API for the input value
        const results = await search(event.target.value)
        console.log(results)
        if (results !== -1){
            setTweets(results);
            //Add class name to the SearchBar and Logo elements to enalbe the animiation
            document.getElementById("main_area")
                .classList.add("mainArea_slide");
            
            document.getElementById("twit_revLogo")
                .classList.add("animate_logo");
            
            SetLoading(false);
            setHideTitle(true);
        }
        else {
            SetLoading(false);
            console.warn("Something Went Wrong!")
        }
        // //Set the Date
        // setCurentDate(new Date());
        }
    }
    return (
        <div className="App">
            <div className="Header"> 
                <img id='twit_revLogo' className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> 
            </div>
            <div className="ChangLang"> 
                <LangMenu/>
            </div>      
            <div id='main_area' className="MainArea"> 
                <h1 style={hideTitle ? { visibility: 'hidden', opacity: 0, transition:' visibility 1s, opacity 0.5s linear'} : {}} className="Title">Twitter Reviews</h1>
                <input id='SeachBar' type="text" placeholder={LangOptions.MainPage[currentLang].placeHolder} onKeyUp={SubmitOnEnter}/*onFocus="blur();"*/ />
            </div>
            {hideTitle ? <SearchResults data={tweets}/> : ""}
            {loading ? 
            <div className="blurBG"> <Loader className="Loader" type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={15000}/> </div> : ""}
        </div>
    )
}


 // const [lang, setLang] = useState(localStorage.getItem("lang"))

    //update the app language based on the value passed from LangMenu.js thru the 'updateLang' props
    // const getUserLang = (newLang) => setLang(newLang)

 // useEffect(() => {
    //   setLang(localStorage.getItem("lang"))
    // }, [localStorage.getItem("lang")])
    
//   useEffect(() => {
//     //Submit if Eneter is clicked on the SearchBar
//     const SearchBar = document
//         .getElementById("SeachBar")
//         .addEventListener("keyup", SubmitOnEnter);
//     //Checking the scroll position for showing the header

//     return() =>{
//       if(SearchBar) SearchBar.removeEventListener("keyup", SubmitOnEnter);
//   }
// }, []);