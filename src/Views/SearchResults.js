import React,{useEffect} from 'react'
import '../Styles/SearchResults.css'
import Twitter from '../components/Twitter';
// import TestTwitter from '../testTwitter'
import {useLanguage, LangOptions } from '../context';


export default function SearchPage({data}) {
    //get the value of langugage context
    const currentLang = useLanguage();

    const Totalcount = data.total_count//data.sentimment[0].tweet_count
    const positiveCount = data.postive_count//(data.sentimment[0].postive).length
    const negativeCount = data.negative_count//(data.sentimment[0].negative).length

   /**function formatDate(date){
        /*regular expression to replace a sequence of four digits, 
        followed by a sequence of two digits, followed by a sequence of two digits, 
        with the first, plus a -, plus the second, plus a -, plus the third.
        let newDate = date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
        newDate = newDate.slice(0, -4);
        console.log(date)
        return newDate; 
    }  */ 

    //Convert English number to Arabic
    function changeDigitsToArabic(number){
        const convert = {
            "0": "٠",
            "1": "١",
            "2": "٢",
            "3": "٣",
            "4": "٤",
            "5": "٥",
            "6": "٦",
            "7": "٧",
            "8": "٨",
            "9": "٩",
        }
        const valueArr = Array.from(String(number), Number);
        let result = ''
        valueArr.forEach(num => {
            result+= convert[num]
        });
        return result
    }

    useEffect(() => {
        //Make the Search Results Slide into the view by adding 'SResults_Appear' ClassName
        const SearchResult = document.getElementById("Search_Results");
        SearchResult.classList.add("SResults_Appear");
    }, [])

    return (
        <div id='Search_Results' className='SResults'>
            <div className="text_results">  
                <strong> {LangOptions.SearchResults[currentLang].Found} {currentLang ==='en' ? Totalcount : changeDigitsToArabic(Totalcount)} {LangOptions.SearchResults[currentLang].Tweests}</strong>
                {/** console.log(toString(props.data.content.requestParameters.fromDate))*/}
                {/** <em style={{'fontSize':'0.5em'}}>From {formatDate(props.data.content.requestParameters.fromDate)} To {formatDate(props.data.content.requestParameters.toDate)}</em>*/} 
                <p> {currentLang ==='en' ? positiveCount : changeDigitsToArabic(positiveCount)} 
                    <span style={{color:'#52B8F1'}}> {LangOptions.SearchResults[currentLang].postive}</span>,
                    {` ${currentLang ==='en' ? negativeCount : changeDigitsToArabic(negativeCount)}`}<span style={{color:'#F15265'}}> {LangOptions.SearchResults[currentLang].Negative}</span> {/**10 <span style={{color:'#EBC35C'}}>Neutral</span> */}
                </p>  
            
            </div>

            <span className="graphs_results">
                <div className="Graph_Container ChartsGraphs">
                    <img className="Graph_Img ChartsGraphs_img" src={`data:image/png;base64, ${data.charts_graph/*data.sentimment[1][0]*/}`} alt="Bar Chart" />
                </div>
                <div className='Graph_Container PieGraphs'>
                    <img className="Graph_Img PieGraphs_img" src={`data:image/png;base64, ${data.pie_graph/*data.sentimment[1][1]*/}`} alt="Pie Chart" />
                </div>
            </span>

            <Twitter postive={data.postive_tweets}//{data.sentimment[0].postive}
                    negative={data.negative_tweets}//{data.sentimment[0].negative}
                    searchTerm={data.search_term}/*{data.sentimment[0].search_term}*/ /> 
        
        
        </div>
    )
}

//***text_results
// <strong> Found {props.data.sentimment[0].tweet_count} Tweests</strong>
// {/** console.log(toString(props.data.content.requestParameters.fromDate))*/}
// {/** <em style={{'fontSize':'0.5em'}}>From {formatDate(props.data.content.requestParameters.fromDate)} To {formatDate(props.data.content.requestParameters.toDate)}</em>*/}

// <p> {(props.data.sentimment[0].postive).length} <span style={{color:'#52B8F1'}}>postive</span>,
// {` ${(props.data.sentimment[0].negative).length}`}<span style={{color:'#F15265'}}> Negative</span> {/**10 <span style={{color:'#EBC35C'}}>Neutral</span> */}</p>  



//****Graph_Container ChartsGraphs
//<img className="Graph_Img ChartsGraphs_img" src={`data:image/png;base64, ${props.data.sentimment[1][0]}`} alt="Bar Chart" />



//****Graph_Container PieGraphs
//<img className="Graph_Img ChartsGraphs_img" src={`data:image/png;base64, ${props.data.sentimment[1][0]}`} alt="Bar Chart" />


// Graph_Container PieGraphs
//<img className="Graph_Img PieGraphs_img" src={`data:image/png;base64, ${props.data.sentimment[1][1]}`} alt="Pie Chart" />

// <Twitter postive={props.data.sentimment[0].postive}
// negative={props.data.sentimment[0].negative}
// searchTerm={props.data.sentimment[0].search_term}/>
