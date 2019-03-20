import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import './App.css';
import listData from "./apiData/exploreView.json"

const  MovieCard = (props) => {
    const cardWidth = {
        width: '18rem' 
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
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
  )
} 

export default MovieCard;



