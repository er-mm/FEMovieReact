import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Content } from "./Content";

export class Pagination extends React.Component {
      constructor() {
        super();
        this.state = {
             currentPage: 1,
          todosPerPage: 10,
          start:0,
          limit:5,
          error:'',
          allDataArr:[],
          fields : {
        	  'genres' : 'asc',
        	  'language' : 'asc',
        	  'country' : 'asc',
        	  'budget' : 'asc',
        	  'title_year' : 'asc'
          }
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      
     
      
      handleClickNextPrev(event) {
    	 
          this.setState({
            start: Number(event.target.id),
            currentPage :  Number(event.target.id) + 1
          });
        }
      filterData(e,title,allDataArra){
    	  var allDataArra = Object.values(allDataArra);
    	  var title = title.toLowerCase();
    	  var filteredData = [];
    	  if(title != 'select'){
    	  filteredData = allDataArra.filter((data)=>{
    		  console.log('title',title);
    		  //console.log('dta',data);
    		  console.log('dta.titleeeeeeeee',data[title]);
    		  console.log('e.target.value',e.target.value);
    		 if(data[title].includes(e.target.value)){
    			 console.log('data[title].includes(e.target.value) : ',data[title].includes(e.target.value));
    			 return data;
    		 } 
    	  });
    	  }else{
    		  this.setState({allDataArr : filteredData, error:'Please select a value from DropDown'});
    	  }
    	  if(filteredData == ''){
    		  this.setState({allDataArr : filteredData, error:'No Filtered Data Found : Showing All Data'});
    	  }else{
    	  this.setState({allDataArr : filteredData,error:''});
    	  }
      }
      sortData(field,allDataArrr){
    	  var sortedData = [];
    	  console.log('this.state.fields.field',this.state.fields[field],field);
    	  if(this.state.fields[field] == 'asc'){
    		  let fields = {...this.state.fields};
    		  fields[field] = 'dec';                        //updating value
    		  this.setState({fields});
    		  console.log('in if this.state.fields :::::::',this.state.fields);
    		//this.setState({fields.field : 'dec'});
    		  sortedData =  allDataArrr.sort(function(a, b) {
       		  //console.log('field value : ',a[field]);
           	  var nameA = a[field].toUpperCase(); // ignore upper and lowercase
           	  var nameB = b[field].toUpperCase(); // ignore upper and lowercase
           	  if (nameA < nameB) {
           	    return -1;
           	  }
           	  if (nameA > nameB) {
           	    return 1;
           	  }

           	  // names must be equal
           	  return 0;
           	});
    	  }else{
    		  let fields = {...this.state.fields};
    		  fields[field] = 'asc';                        //updating value
    		  this.setState({fields});
    		  console.log('in else this.state.fields :::::::',this.state.fields);
    		 // this.setState({fields.field : 'asc'});
    		   sortedData =  allDataArrr.sort(function(a, b) {
        		  //console.log('fieldcxvdsvsv value : ',a[field]);
            	  var nameA = a[field].toUpperCase(); // ignore upper and lowercase
            	  var nameB = b[field].toUpperCase(); // ignore upper and lowercase
            	  if (nameA < nameB) {
            	    return 1;
            	  }
            	  if (nameA > nameB) {
            	    return -1;
            	  }

            	  // names must be equal
            	  return 0;
            	});
    	  }
    	 
    	  //console.log('sortedData',sortedData);
    	  this.setState({allDataArr : sortedData});
    	  //return hello;
    	  
      }
      
      render() {
    	  let allData = this.props.allData;
    	  
    	  let {allDataArr} = this.state;
    	  //console.log('this.stateeeeeeeeeeeeeeeeeeeeeeeeeeee',this.state.start);
    	  //let allDataArr= [];
    	  if(allDataArr == ''){
    		  allDataArr = Object.values(allData);
    	  }else{
    		  allDataArr = allDataArr;
    	  }
        let { currentPage, todosPerPage,start,limit,error } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
       // allDataArr = Object.values(allData);
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allDataArr.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
//console.log('*******************************************',start,pageNumbers);
        const renderPageNumbers = pageNumbers.slice(start,start+limit).map(number => {
          return (
            <li
			className="btn btn-link"
              key={number}
              id={number}
              onClick={this.handleClick}
            >
             {number}
            </li>
          );
        });
        
       // var arr = [1,2,3,4,5,6,7,8]; 
      /*  var start = 0;
        var end = 8;

        var renderPageNumbers = pageNumbers.slice(start,start+2).map(number => {return(<li>{number}</li>);});
*/
        return (
        		<div className="container">
          <Content allData={allData} error={error} allDataArr={allDataArr} indexOfLastTodo={indexOfLastTodo} indexOfFirstTodo={indexOfFirstTodo} sortData={this.sortData.bind(this)} filterData={this.filterData.bind(this)}/>
		  <nav aria-label="Pagination">
            
            <ul id="pagee" className="pagination justify-content-center">
            {start<=0 ? '' : 
            <li className="btn btn-link"
                  id={start-limit}
                  onClick={this.handleClickNextPrev.bind(this)}
                >Prev</li>
            }
              {renderPageNumbers}
              {start>=pageNumbers.length - limit ? '' : 
              <li className="btn btn-link"
                      id={start+limit}
                      onClick={this.handleClickNextPrev.bind(this)}
                    >Next</li>
              }
            </ul>
			</nav>
          </div>
        );
      }
    }
