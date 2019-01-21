import React from "react";
//import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");
 
export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
	  let allData = this.props.allData;
	  console.log('hheeelooooo',allData);
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={allData.length}
          pageRangeDisplayed={5}
          onChange={::this.handlePageChange}
        />
      </div>
    );
  }
}