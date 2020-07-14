import React, { Component } from "react";

class forms extends Component{




    nameChange = (event) => {

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
        <div>
        <h1> Puppy Palace</h1>
        <form className = "dog-name">
          <label>dogName</label>
          <input
          type = "dogName"
          placeholder="Name of Dog"
          value={this.state.name}
          onChange={this.nameChange}
    
          />
          </form>
          </div>
      )
    }

  
    
    export default forms;