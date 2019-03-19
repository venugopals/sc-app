import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import './App.css';
import listData from "./apiData/exploreView.json"

console.log(11111)
console.log(listData["Search"])


const  MovieCard = (props) => {
    const cardWidth = {
        width: '18rem' 
    }
    listData["Search"].map((value,index)=>{
      console.log(value)
    })
  return(
    // <React.Fragment>
    //     <div className="row">
    //     <div className="col-md-4">
    //         <div className="thumbnail">
    //         <a href="https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg">
    //             <img src="https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Lights" style={cardWidth}/>
    //             <div className="caption">
    //             <p>.</p>
    //             </div>
    //         </a>
    //         </div>
    //     </div> 
    // </div>
    // <div className="card">
    //     <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Card image cap" style={cardWidth}/>
    //     <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div> 
    // </div>  
    // </React.Fragment>
    
    <div className="row">
    <CardDeck>
    <div className="col-md-3">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    </CardDeck>
    </div>
  ) 
} 

export default MovieCard;



