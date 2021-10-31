import './Styles/App.css'
import {useState} from 'react'
import Loader from "react-loader-spinner";
import SearchResults from './SearchResults';
import API from './helprs/api'
//import Dotenv Lib
require('dotenv').config()

function App() {
  const [loading, SetLoading] = useState(false);
  const [hideTitle, setHideTitle] = useState(false)
  const [tweets, setTweets] = useState()
  
  function listenScrollEvent({target}){
    console.log(target.scrollTop)
    // const Header = document.getElementsByClassName("Header");
    const SearchBar = document.getElementById("main_area");
    //Show the Header
    if (target.scrollTop > 170) {
      //Change the Header background and the SearchBar position
      // Header[0].style.background = "red"; 
      // SearchBar.style.top = 0;
      SearchBar.classList.add("mainArea_Header")

    } else{
      SearchBar.classList.remove("mainArea_Header")
      // Header[0].style.background = null; 
      // SearchBar.style.top = null;
    } 
  }

  async function search(query){
    return await API.Search(query).then((res) =>{
        console.log(res);
        //Write the tweets to json file
        // const json = JSON.stringify(res.results);
        // const blob = new Blob([json], {type: "application/json;charset=utf-8"});
        // FileSaver.saveAs(blob, "mynewTweets2.json");
        // return res.results;
        return res;
    });
  }


  function SubmitOnEnter(event){
    console.log(event.key)
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      SetLoading(true);
      //Close Mobile keyboard
      const SearchBar = document.getElementById("SeachBar");
      SearchBar.blur();
      console.log(process.env.REACT_APP_BASE_URL)
      //Search Twitter API for the input value
      search(event.target.value).then( (res) => {
        setTweets(res);
        //Add class name to the SearchBar and Logo elements to enalbe the animiation
        document.getElementById("main_area")
            .classList.add("mainArea_slide");
        
        document.getElementById("twit_revLogo")
            .classList.add("animate_logo");
        
        SetLoading(false);
        setHideTitle(true);
      })
      // //Set the Date
      // setCurentDate(new Date());
    }
  }
  
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

  return (
    <div className="App" onScroll={listenScrollEvent}>
      <div className="Header"> <img id='twit_revLogo' className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> </div>
      <div id='main_area' className="MainArea"> 
        <h1 style={hideTitle ? { visibility: 'hidden', opacity: 0, transition:' visibility 1s, opacity 0.5s linear'} : {}} className="Title">Twitter Reviews</h1>
        <input id='SeachBar' type="text" placeholder="Search For a product or services" onKeyUp={SubmitOnEnter}/*onFocus="blur();"*/ />
      </div>
      {hideTitle ? <SearchResults data={tweets}/> : ""}
      {loading ? 
        <div className="blurBG"> <Loader className="Loader" type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000}/> </div> : ""}
    </div>
  );
}

export default App;
