import './App.css';
import {useEffect, useState} from 'react'
import Loader from "react-loader-spinner";

function App() {
  const [loading, SetLoading] = useState(false);
  const [hideTitle, setHideTitle] = useState(false)
  
  useEffect(() => {
    //Submit if Eneter is clicked on the SearchBar
    document
        .getElementById("SeachBar")
        .addEventListener("keyup", function (event) {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                SetLoading(true);
                 //Close Mobile keyboard
                const SearchBar = document.getElementById("SeachBar");
                SearchBar.blur();
                setTimeout(() => {
                  //Add class name to the result element to enalbe the animiation
                  const mainArea =  document.getElementById("main_area");
                  mainArea.classList.add("SearchBar_Appear");
                  const SearchResult = document.getElementById("Search_Results");
                  SearchResult.classList.add("SResults_Appear");
                  setHideTitle(true);
                  SetLoading(false);
                }, 3000);
            }
        });
}, []);

  return (
    <div className="App">
      <div className="Header"> <img id='twit_revLogo' className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> </div>
      <div id='main_area' className="MainArea"> 
        <h1 style={hideTitle ? { visibility: 'hidden', opacity: 0, transition:' visibility 1s, opacity 0.5s linear'} : {}} className="Title">Twitter Reviews</h1>
        <input id='SeachBar' type="text" placeholder="Search For a product or services" /*onFocus="blur();"*/ />
      </div>
      {loading ? <div className="blurBG"> <Loader className="Loader" type="Puff" color="#00BFFF" height={100} width={100} timeout={3000}/> </div> : <br/>}
      <div id='Search_Results' className='SResults'>
        <div className="text_results"> 
          <strong> Found 1000 Tweests</strong>
          <em style={{'fontSize':'0.5em'}}>From 10/09/2021 To 10/10/2021</em>
          <p> 900 <span style={{color:'#52B8F1'}}>postive</span>,
          230 <span style={{color:'#F15265'}}>Negative</span>, 
          10 <span style={{color:'#EBC35C'}}>Neutral</span></p> 
        </div>

        <span className="graphs_results"> 
          <div className="Graph_Container ChartsGraphs">
            <img className="Graph_Img ChartsGraphs_img" src="images/Charts-Graphs.png" alt="Charts" />
          </div>
          <div className='Graph_Container LineGraphs'>
            <img className="Graph_Img LineGraphs_img" src="images/line-graph.png" alt="Line" />
          </div>
          <div className='Graph_Container PieGraphs'>
            <img className="Graph_Img PieGraphs_img" src="https://www.pngitem.com/pimgs/m/598-5986842_infographic-chart-download-png-image-pie-chart-transparent.png" alt="Line" />
          </div>
        </span>

      </div>
    </div>
  );
}

export default App;
