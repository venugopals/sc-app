import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import './App.css';
import listData from "./apiData/exploreView.json"
import DetailView from "./detailView";
import { ButtonToolbar, Modal } from 'react-bootstrap';

const  MovieCard = (props) => {
    const cardWidth = {
      width: '18rem',
      marginLeft:  "40px",
      marginTop: "21px",
      height: "95%"
    }
    let movieList;
  return(
        <div className="">
          <Card>
            <CardImg top width="100%" src={props.movieData.Poster} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.movieData.Title}</CardTitle>
              <CardSubtitle>Year: {props.movieData.Year}</CardSubtitle>
              <CardText>Type: {props.movieData.Type}</CardText>
              <ButtonToolbar>
                <Button onClick={() => props.handleDetailModal(props.movieData.imdbID)}>Detail View</Button>
              <DetailView
                show={props.modalShow}
                onHide={props.modalClose}
                moviedetails={props.MovieDetails}
              />
            </ButtonToolbar>
              </CardBody>
          </Card>
        </div>
  )
} 

export default MovieCard;



