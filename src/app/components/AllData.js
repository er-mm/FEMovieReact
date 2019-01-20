import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Pagination } from "./Pagination";


export class AllData extends React.Component{
    
    constructor(props) {
        super();
        this.state = {
            allData: [],
            isLoading: false
        };
       // this.fetchData();
      }
    componentDidMount(){
    	//this.setState({ isLoading: true });
        this.fetchData();
    }
 
    fetchData(){
    	
    	fetch('http://starlord.hackerearth.com/movies')
  	  .then(data => data.json())
  	  .then(function(data) {
  		  console.log('888888888888888888',data);
  	    //console.log('55555555555555',JSON.stringify(myJson));
  	    this.setState({ allData: data});
  	  });
    	/*fetch('http://starlord.hackerearth.com/movies', {
    	method: 'GET',
    	mode: 'no-cors',
    	 headers: {
             Accept: 'application/json',
            // 'Content-Type': 'application/json',
          //   'access-control-allow-origin': '*',
            // "access-control-allow-credentials": "true",
            'Content-Type': 'application/x-www-form-urlencoded',
          }   
        })
      .then(data => console.log('mmmmaannaass, ',data))
      .then((data) => { 
        console.log("all data",data);  
        this.setState({ allData: data });
      });*/
    	/*fetch('http://starlord.hackerearth.com/movies',{
    		mode: 'no-cors'
    	})
    	.then((data) => { 
          console.log("all data",data);  
          this.setState({ allData: data });
        });*/
    }
   
    render(){
    	let {allData, isLoading} = this.state;
    	console.log('ggggggggggggggggggggggg',allData);
        return(
              
               <div className="container">
               {isLoading ?
               
               <div>Loading...</div>
               :
            	   <Pagination allData={allData}/>  
               }
               </div> 
        );
    }
}