import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Filter} from './Filter';

export class Content extends React.Component {
      constructor() {
        super();
        this.state={
        		allDataArray : [],
        		 fields: {},
        		 toggle:true
        }
      }
      
      render() {
		  let props = this.props;
		  let error = props.error;
		  let sortData = props.sortData;
		  let filterData = props.filterData;
		  let allData = props.allData;
		 // console.log('sortData:::::::::::::',sortData);
		  let indexOfFirstTodo = props.indexOfFirstTodo;
		  let indexOfLastTodo = props.indexOfLastTodo;
		  let allDataArr = props.allDataArr;
		  console.log('data : ',allDataArr);
		 // this.setState({allDataArray : allDataArr});
		  
		   const currentTodos = allDataArr.slice(indexOfFirstTodo, indexOfLastTodo);
		   console.log('currentTodos arr : ',currentTodos);
		   const renderTodos = currentTodos.map((data, index) => {
		  // console.log('data : ',data);
			return (
                  <tr key={index}>
                      {/*<td>{allData._id}</td>*/}
						  <td><label id={data.genres} className="text-primary">{data.genres}</label></td>
							<td><label id={data.language} className="text-primary">{data.language}</label></td>
							<td><label id={data.country} className="text-primary">{data.country}</label></td>
							<td><label id={data.budget} className="text-primary">{data.budget}</label></td>
							<td><label id={data.title_year} className="text-primary">{data.title_year}</label></td>
                      </tr>
              );
        });

        return (
        		  <div className="container">
        		  <Filter allDataArr={allData} filterData={filterData} error={error}/>
		   <table className="table p-3 mb-2 table-striped">
            <thead>
                <tr>
                    {/*<th>ID</th>*/}
                    <th className="text-primary btn-lg btn-light" id="genres" onClick={()=>sortData('genres',allDataArr)}>Genres</th>
                    <th className="text-primary btn-lg btn-light" id="language" onClick={()=>sortData('language',allDataArr)}>Language</th>
                    <th className="text-primary btn-lg btn-light" id="country" onClick={()=>sortData('country',allDataArr)}>Country</th>
                    <th className="text-primary btn-lg btn-light" id="budget" onClick={()=>sortData('budget',allDataArr)}>Budget</th>
                    <th className="text-primary btn-lg btn-light" id="title_year" onClick={()=>sortData('title_year',allDataArr)}>Title-Year</th>
                    </tr>
            </thead>
            <tbody>
            {renderTodos}
            </tbody>
        </table>
          </div>
        );
      }
    }