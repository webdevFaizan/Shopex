
// This file was created to run some test. To get an understanding about what and how the setState method affect the DOM.

import React, {Component} from 'react';

export default class First extends Component{
  constructor(){
    super();
    this.state={
      value : 1,
      sum : 0
    }
  }

  componentDidMount(){      //I could not understand this method here, how the prevState is going to affect the next value.
    console.log("Mounted")    
    this.setState((prevState)=>{
        return {value:prevState.value+1}
    });
    this.setState((prevState)=>{
      return {value:prevState.value+2}
    });
    this.setState((prevState)=>{
      return {value:prevState.value+3}
    });
    

  }

  render(){
    console.log("Rendered")
    return (
       <div>
        {this.state.sum}
        <br/>
        {this.state.value}
       </div>
    )
  }
}