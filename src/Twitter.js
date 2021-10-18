import React from 'react'
import API from './helprs/api'

export default function Twitter() {

    const FileSaver = require('file-saver');

    // async function search (){
    // }
    async function search(){
        const query = "dave chappelle"
        await API.Search(query, 'en').then((res) =>{
            console.log(res.results);
            //Write the tweets to json file
            const json = JSON.stringify(res.results);
            const blob = new Blob([json], {type: "application/json;charset=utf-8"});
            FileSaver.saveAs(blob, "mynewTweets2.json");
        });
    }

    return (
        <div>
            <button onClick={search}></button>
        </div>
    )
}




