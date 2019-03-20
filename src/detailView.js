import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import MovieCard from './movieCard';
import MovieDetails from "./apiData/detailPage.json"
import './App.css';
import axios from 'axios';
import ErrorBoundary from "./ErrorMsg";
//import Modal from "./Modal";
import { ButtonToolbar, Modal } from 'react-bootstrap';


//import './Modal.css'


class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieDetails: [],
      hasError: false,
      errorMsg: "",
      show: false
    };
  }
  
  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?i=tt0073486&apikey=f4377d6`)
      .then(res => {
        const listData = res.data;
        this.setState({ MovieDetails:  res.data, errorMsg: " ", hasError: false});
      }).catch((error) => {
        this.setState({MovieDetails: MovieDetails, errorMsg: error.response.data.Error+"<br/>But We are showing Catched Data", hasError: true})
    })
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    let movieDetailData;
      if(this.props.moviedetails){
        movieDetailData = this.props.moviedetails
      }
      else{
        movieDetailData = this.state.MovieDetails
      }
      
    return (
     <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Movie List Detail View
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{movieDetailData.Title}</h5>
           <img src={movieDetailData.Poster} alt = "Test Image" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item"></li>
            <li className="list-group-item">
              <span className="font-weight-bold">Year:</span>{movieDetailData.Year}, 
              <span className="font-weight-bold">Released:</span>{movieDetailData.Released}, 
              <span className="font-weight-bold">Director:</span>{movieDetailData.Director}
            </li>
            <li className="list-group-item"><span className="font-weight-bold">BoxOffice:</span>{movieDetailData.BoxOffice}</li>
            <li className="list-group-item"><span className="font-weight-bold">Director:</span>{movieDetailData.Director}</li>
            <li className="list-group-item"><span className="font-weight-bold">Production:</span>{movieDetailData.Production}</li>
            <li className="list-group-item"><span className="font-weight-bold">Website:</span><a href={movieDetailData.Website}> {movieDetailData.Website}</a></li>
            <li className="list-group-item"><span className="font-weight-bold">Actors:</span>{movieDetailData.Actors}</li>
            <li className="list-group-item"><span className="font-weight-bold">Language:</span>{movieDetailData.Language}</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DetailPage;