import React, { Component } from "react";

class forms extends Component{




    NameChange = (event) => {

        this.setState({
      
      name: event.target.value
      
        })
      
      }
    }
    
    BreedChange = (event) => {
    
      this.setState({
        breed: event.target.value
      })
    }

    render(){
      return(

  
    
    export default forms;