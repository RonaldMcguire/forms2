import React, { Component } from "react";

class forms extends Component{

    
    nameChange = (event) => {
    
      this.setState({
    
    name: event.target.value
    
      })
    
    }
    GenderChange = (event) => {

      this.setState({

        gender: event.target.value

      })

    }
    
    breedName = (event) => {
    
      this.setState({

        breed: event.target.value

      })
    }
    birthday = (event) => {
    
      this.setState({

        birthday: event.target.value

      })
    }

    surg = (event) => {
    
      this.setState({

        surg: event.target.value

      })
    }
    submitForm = (event) => {
      event.preventDefault()
      this.setState({
        formComplete: true
      })
      alert(`Your form has been submitted! We will contact you shortly to schedule a consultation for ${this.state.name}!`)
    }
    
    
    render(){
      return(
        <div>
        <h1> Pawtastic </h1>
        <form className = "dog-name">
          <label>DogName</label>
          <input
          type = "dogName"
          placeholder="enter name"
          
          onChange={this.nameChange}
    
          />
          <label>Breed</label>
          <input
          type = "Breed"
          placeholder="Breed"
          
          onChange={this.breedName}
          />


<input type="file" name="myImage" accept="image/*" />
<br></br>
<br></br>

              <label>Gender</label>
              <input 
                type='text'
                placeholder='Female or male'
              
                onChange={this.GenderChange} />

              <label>Birthday</label>
              <input 
                type='number'
                placeholder="DD/MM/YY"
                onChange={this.birthday}
              />

<label>Spayed or Neutered</label>
              <input 
                type='text'
                placeholder="Spayed or Neutered"
                onChange={this.surg}
                
              />



        </form>
        </div>
        
      )
    }
    
    }
    
  
    export default forms;