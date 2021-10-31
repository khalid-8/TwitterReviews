import React,{useEffect} from 'react'
import './Styles/SearchResults.css'

export default function SearchPage(props) {
    console.log("Another REquest")

    function formatDate(date){
        /*regular expression to replace a sequence of four digits, 
        followed by a sequence of two digits, followed by a sequence of two digits, 
        with the first, plus a -, plus the second, plus a -, plus the third.*/
        let newDate = date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
        newDate = newDate.slice(0, -4);
        console.log(date)
        return newDate; 
    }

    useEffect(() => {
        //Make the Search Results Slide into the view by adding 'SResults_Appear' ClassName
        const SearchResult = document.getElementById("Search_Results");
        SearchResult.classList.add("SResults_Appear");
    }, [])
    return (
        <div id='Search_Results' className='SResults'>
            <div className="text_results"> 
                <strong> Found {(props.data.results).length} Tweests</strong>
                {console.log(toString(props.data.requestParameters.fromDate))}
                <em style={{'fontSize':'0.5em'}}>From {formatDate(props.data.requestParameters.fromDate)} To {formatDate(props.data.requestParameters.toDate)}</em>

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
    )
}
