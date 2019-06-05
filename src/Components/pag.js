import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

class Pag extends React.Component {
  
    state = {
      currentPage: this.props.pageNo
    }

  changeCurrentPage = numPage => {
      this.setState({
        currentPage: numPage 
       });

    //fetch a data
    //or update a query to get data
    this.props.pageNumber(numPage);
  };
  render() {    
    return (
      <div>
        <Pagination          
          currentPage={this.props.pageNo}
          totalPages={15}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
      </div>
    );
  }
}
export default Pag;