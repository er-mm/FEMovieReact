import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Content extends React.Component {
      constructor() {
        super();
        
      }
      render() {
		  let props = this.props;
		  let indexOfFirstTodo = props.indexOfFirstTodo;
		  let indexOfLastTodo = props.indexOfLastTodo;
		  let allDataArr = props.allDataArr;
		  
		   const currentTodos = allDataArr.slice(indexOfFirstTodo, indexOfLastTodo);
		   console.log('currentTodos arr : ',currentTodos);
		   const renderTodos = currentTodos.map((data, index) => {
		   console.log('data : ',data);
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
		   <table className="table p-3 mb-2 bg-light text-dark">
            <thead>
                <tr>
                    {/*<th>ID</th>*/}
                    <th className="text-primary">Genres</th>
                    <th className="text-primary">Language</th>
                    <th className="text-primary">Country</th>
                    <th className="text-primary">Budget</th>
                    <th className="text-primary">Title-Year</th>
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