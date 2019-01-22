import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Filter extends React.Component{
	 constructor() {
	        super();
	        this.state={
	        		title : 'Select'
	        }
	      }
	
	 handleClick(event) {
	        this.setState({
	        	title: event.target.id.split('-')[1]
	        });
	      }
	render() {
		let props = this.props;
		let allDataArr = props.allDataArr;
		let filterData = props.filterData;
		let {title} = this.state;
		return(
			<div className='container'>
			<form className="table p-3 mb-2 bg-light text-dark">
			<div className="form-group">
			<label id="filter" className="text-primary">Filter By : &nbsp;</label>
			<div className="btn-group">
			  <button type="button" id={'btn'+title} className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    {title}
			  </button>
			  <div className="dropdown-menu">
			    <label className="dropdown-item" id="drop-Genres" onClick={this.handleClick.bind(this)}>Generes</label>
			    <label className="dropdown-item" id="drop-Language" onClick={this.handleClick.bind(this)}>Language</label>
			    <label className="dropdown-item" id="drop-Country" onClick={this.handleClick.bind(this)}>Country</label>
			    <label className="dropdown-item" id="drop-Budget" onClick={this.handleClick.bind(this)}>Budget</label>
			    <label className="dropdown-item" id="drop-Title_Year" onClick={this.handleClick.bind(this)}>Title-Year</label>
			    </div>
			</div>
			<input type="text" className="form-control" onChange={(event)=>filterData(event,title,allDataArr)} id={title} autoFocus placeholder={'Search for '+title} required/>
			</div>
			</form>
			</div>
		
		);
	} 
}