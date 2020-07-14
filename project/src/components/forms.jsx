import React, { Component } from "react";

class forms extends Component{

    
    nameChange = (event) => {
    
      this.setState({
    
    name: event.target.value
    
      })
    
    }
    
    breedName = (event) => {
    
      this.setState({
        breed: event.target.value
      })
    }

    
    
    render(){
      return(
        <div>
        <h1> Name of Dog </h1>
        <form className = "dog-name">
          <label>DogName</label>
          <input
          type = "dogName"
          placeholder="enter name"
          value={this.state.name}
          onChange={this.nameChange}
    
          />
          <label>Breed</label>
          <input
          type = "Breed"
          placeholder="Breed"
          value={this.state.breed}
          onChange={this.breedName}
          />
        </form>
        </div>
      )
    }
    
    }
    
  
    export default forms;