import React from "react";
import fetch from 'isomorphic-fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Content } from "./Content";

export class Pagination extends React.Component {
      constructor() {
        super();
        this.state = {
             currentPage: 1,
          todosPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      render() {
    	  let allData = this.props.allData;
    	  console.log('hheeelooooo',allData);
    	  let allDataArr= [];
        let { currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        allDataArr = Object.values(allData);
        //const currentTodos = allDataArr.slice(indexOfFirstTodo, indexOfLastTodo);

       /* const renderTodos = currentTodos.map((data, index) => {
          return (
                  <tr key={index} id={data.id}>
                      
                      <td><input type="text" id={data.uname} defaultValue={data.name}  readOnly={true}/></td>
                      <td><input type="text" id={data.password} defaultValue={data.lname} readOnly={true}/></td>
                      <td><input type="text" id={data.gender} defaultValue={data.email} readOnly={true}/></td>
                       </tr>
              );
        });
*/
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allDataArr.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
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

        return (
        		<div className="container">
          <Content allDataArr={allDataArr} indexOfLastTodo={indexOfLastTodo} indexOfFirstTodo={indexOfFirstTodo}/>
		  <nav aria-label="Pagination">
            
            <ul className="pagination justify-content-center">
              {renderPageNumbers}
            </ul>
			</nav>
          </div>
        );
      }
    }