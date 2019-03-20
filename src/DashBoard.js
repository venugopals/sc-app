import React, { Component } from "react";
import MenuBar from "./MenuBar";
import DashCard from "./DashCard";





class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
         dashBoardData: {},
         errorMsg: ""
        };
    }

    componentWillMount(){
        let dashBoardhash = localStorage.getItem('dashBoardhash');
        let dashBoardData = (dashBoardhash == undefined) ? {}: JSON.parse(dashBoardhash)
        this.setState({dashBoardData: dashBoardData})
    }

  getdashData(dashBoardData){
    let dashData = [];
    if(Object.keys(dashBoardData).length != 0){
       let key, rowLength=0, rowIndex=0, rowData=[], rowClass, rowList = {};
       Object.values(dashBoardData).map((movie,index)=>{
        if(index%4 == 0){
          rowIndex += 1
          rowData = [];
         }
         rowData.push(movie)
         rowList[rowIndex] = rowData
         
       })
       return(<div className="row">
            {Object.values(dashBoardData).map((movieData,index)=> {
                 if(movieData){
                    return(<DashCard movie={movieData} key = {index} />)
                 }
              })
            };
            </div>)
    }
    else{
        return(<div>Here is the DashBoard</div>)
    }
  }   

    render() {
        let dashBoardData = this.state.dashBoardData
        return (
      <React.Fragment>
          {this.getdashData(dashBoardData)}
        </React.Fragment>
        )
    }
}

export default DashBoard;