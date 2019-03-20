import React, { Component } from "react"


const  DashCard = (props) => {
    const cardWidth = {
        width: '18rem',
        marginLeft:  "40px",
        marginTop: "21px",
        height: "95%"
    }
return(
<div className="">
    <div className="card" style={cardWidth}>
    <img className="card-img-top" src={props.movie.Poster} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Title: {props.movie.Title}</h5>
        <p className="card-text">Year: {props.movie.Year}</p>
        <p className="card-text">imdbRating: {props.movie.imdbRating}</p>
         {props.movie.Ratings.map((rating,index)=>{
            return(<p className="card-text">UserCategory: {rating.Source}, UserRating: {rating.Value} key={index}</p>)
         })}
    </div>
    </div>
</div>
    )
}
export default DashCard;