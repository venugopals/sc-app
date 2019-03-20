import React from 'react';
import PaginationComponent from "react-reactstrap-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class ListPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(selectedPage) {
    localStorage.setItem("selectedPage", selectedPage)
    this.setState({ selectedPage: selectedPage });
    this.props.history.push(`/explore/${selectedPage}`);
    window.location.pathname = this.props.history.location.pathname
  }

  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="scPagination">
          <PaginationComponent
            totalItems={50}
            pageSize={3}
            onSelect={this.handleSelected}
            maxPaginationNumbers={9}
            activePage={2}
          />
      </div>
      </div>
      </div>
    );
  }
}