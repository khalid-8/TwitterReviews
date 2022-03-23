import Search from './Views/Search';
import { LangProvider} from './context/langContext';
import { Notification } from "./components";
// import {AppState} from 'react';

//import Dotenv Lib
require('dotenv').config()


function App() {
  
  return (
      <LangProvider>
        <Search/>
        <Notification vertical={'top'} horizontal={'right'}/>
      </LangProvider>
  );
}

export default App;



//Write the tweets to json file
// const json = JSON.stringify(res.results);
// const blob = new Blob([json], {type: "application/json;charset=utf-8"});
// FileSaver.saveAs(blob, "mynewTweets2.json");
// return res.results;


/*onScroll={listenScrollEvent}*/

// function listenScrollEvent({target}){
//   console.log(window.screen.width)
//   const SearchBar = document.getElementById("main_area");
//   //Show the Header
//   if ((target.scrollTop > 170) && (window.screen.width > 900)) {
//     SearchBar.classList.add("mainArea_Header")
//   } else if (window.screen.width > 900){
//     SearchBar.classList.remove("mainArea_Header")
//   } 
// }