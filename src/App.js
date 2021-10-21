import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [hideTitle, setHideTitle] = useState(false)

  useEffect(() => {
    //Submit if Eneter is clicked on the SearchBar
    document
        .getElementById("SeachBar")
        .addEventListener("keyup", function (event) {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                const SearchBar =  document.getElementById("SeachBar");
                SearchBar.classList.add("SearchBar_Appear");
                const SearchResult = document.getElementById("Search_Results");
                SearchResult.classList.add("SResults_Appear");
                //Close Mobile keyboard
                SearchBar.blur();
                setHideTitle(true);
            }
        });
}, []);

  return (
    <div className="App">
      <div className="Header"> <img id='twit_revLogo' className="Logo" src="images/Logo.png" alt="Twitter Reviews's Logo"/> </div>
      <div className="Entry">
        <h1 style={hideTitle ? { visibility: 'hidden', opacity: 0, transition:' visibility 1s, opacity 0.5s linear'} : {}} className="Title">Twitter Reviews</h1>
        <input id='SeachBar' className="SearchBar" type="text" placeholder="Search For a product or services" onfocus="blur();"/>
        </div>
        <div id='Search_Results' className='SResults'>
          <div className="text_results"> 
            <strong> Found 1000 Tweests</strong>
            <em style={{'fontSize':'0.5em'}}>From 10/09/2021 To 10/10/2021</em>
            <p> 900 <span style={{color:'#52B8F1'}}> postive</span>, 
            230 <span style={{color:'#F15265'}}>Negative </span>, 
            10 <span style={{color:'#EBC35C'}}>Neutral</span></p> 
          </div>

          <span className="graphs_results"> 
            <div className="ChartsGraphs">
              <img className="ChartsGraphs_img" src="images/Charts-Graphs.png" alt="Charts" />
            </div>
            <div className='LineGraphs'>
              <img className="LineGraphs_img" src="images/line-graph.png" alt="Line" />
            </div>
            <div className='PieGraphs'>
              <img className="PieGraphs_img" src="images/Pie-Graphs.png" alt="Line" />
            </div>
          </span>

        </div>
    </div>
  );
}

export default App;
