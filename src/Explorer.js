import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import MovieCard from './movieCard';
import listData from "./apiData/exploreView.json"
import './App.css';
import axios from 'axios';
import ErrorBoundary from "./ErrorMsg";
import DetailView from "./detailView";
import { ButtonToolbar, Modal } from 'react-bootstrap';
import MovieDetails from "./apiData/detailPage.json"






class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: [],
      hasError: false,
      errorMsg: "",
      modalShow: false,
      MovieDetails: {}
    };
    this.handleDetailModal = this.handleDetailModal.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  
  componentDidMount() {
    axios.get(`http://www.omdbapi.com/?s=one&page=1&apikey=f4377d6`)
      .then(res => {
        const listData = res.data;
        this.setState({ Search:  res.data["Search"], errorMsg: " ", hasError: false});
      }).catch((error) => {
        this.setState({Search: listData["Search"], errorMsg: error.response.data.Error+"<br/>But We are showing Catched Data", hasError: true})
      })
  }

   handleDetailModal(imdbID){
    this.getDetailsData(imdbID);
    this.setState((state, props) => {
      return {
        modalShow: true
      };
    });
   }

  getDetailsData(imdbID){
    axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=f4377d68`)
      .then(res => {
        this.setState({ MovieDetails:  res.data});
        this.setDashBoardData(imdbID, res.data);
      }).catch((error) => {
        this.setState({MovieDetails: MovieDetails})
        this.setDashBoardData(imdbID, MovieDetails);
      })
      
   }

   setDashBoardData(imdbID, movieDetails){
     let dashBoardhash = {};
     let data = {}
     data[imdbID] = {Title: movieDetails.Title,
                        Year: movieDetails.Year,
                  imdbID: imdbID,
                  Poster: movieDetails.Year,
                  imdbRating: movieDetails.imdbRating,
                  Ratings: movieDetails.Ratings
                };
    let DbDashBoardData = localStorage.getItem('dashBoardhash')
    if(DbDashBoardData == undefined){
      dashBoardhash[imdbID] = data 
      localStorage.setItem('dashBoardhash', JSON.stringify(dashBoardhash))
    }
    else{
      DbDashBoardData = JSON.parse(DbDashBoardData)
      let imdbKeys = Object.keys(DbDashBoardData)
      if(imdbKeys.indexOf(imdbID) == -1){
        DbDashBoardData[imdbID] = data
        localStorage.setItem('dashBoardhash', JSON.stringify(DbDashBoardData))
      }
    }
   }

   modalClose(){
    this.setState({ modalShow: false })
   }

    render() {
        let rowList, rowLength;
        let exploreData = this.state.Search
      return(
        <React.Fragment>
        <ErrorBoundary hasError = {this.state.hasError} msg = {this.state.errorMsg}/>
        {exploreData.map((movie,index)=>{
             rowList = [exploreData[index], exploreData[index+1], exploreData[index+2], exploreData[index+3]]
             if(index%4 == 0){
                rowLength = 0; 
                return(
                <div className="row listClass"  key={index+1}>
                <CardDeck key={index+1}>
                {rowList.map((movieData,rowindex)=> {
                  rowLength += 1
                   if(movieData){
                       return(<MovieCard movieData={movieData} key={rowindex+1} rowLength={rowLength} 
                        handleDetailModal={this.handleDetailModal} 
                        modalClose={this.modalClose}  modalShow={this.state.modalShow} MovieDetails={this.state.MovieDetails} />)
                   }
                })};
                </CardDeck>
              </div>) 
             }
             else{
               return null
             } 
        })};
        </React.Fragment>
      )
    }
}

export default Explorer;