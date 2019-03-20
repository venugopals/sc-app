import React, { Component } from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import MovieCard from './movieCard';
import listData from "./apiData/exploreView.json"
import './App.css';



class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
   
    render() {
        let rowList, rowLength;
      return(
        <React.Fragment>
        {listData["Search"].map((movie,index)=>{
             rowList = [listData["Search"][index], listData["Search"][index+1], listData["Search"][index+2], listData["Search"][index+3]]
             if(index%4 == 0){
                rowLength = 0; 
                return(
                <div className="row listClass"  key={index+1}>
                <CardDeck key={index+1}>
                {rowList.map((movieData,rowindex)=> {
                  rowLength += 1
                   if(movieData){
                       return(<MovieCard movieData={movieData} key={rowindex+1} rowLength={rowLength}/>)
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