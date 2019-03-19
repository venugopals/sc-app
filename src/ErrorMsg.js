import React, {Component} from 'react';

const  ErrorBoundary = (props) => {
    let errorMsg;
    if (props.hasError) {
        errorMsg =  <div class="alert alert-danger" role="alert">
                      {props.msg}
                   </div>
    } else {
        errorMsg = undefined;
    }
    return( 
    <div>
      <br/>
      {errorMsg}
    </div>  
    )
} 

export default ErrorBoundary;

