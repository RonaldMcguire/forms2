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
      alert(`Your form has been submitted!`)
    }
    
    
    render(){
      return(
        <div>
        <h1> Pawtastic </h1>
        <h2>we love all our pets we take care of and would love to take care of yours</h2>
        <h2>please fill out the form to make an appointment</h2>
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


<input type="file" name="myImage" accept="image/*" className="btn btn-primary btn-sm m-2"/>
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
<br></br>
<br></br>
<br></br>
                <button
                className="btn btn-primary btn-sm m-2"
                type='submit'
                onClick={this.submitForm}
                >Submit</button>



        </form>
        </div>
        
      )
    }
    
    }
    
  
    export default forms;