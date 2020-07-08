import React from 'react'
// import logo from './logo.svg';
import './App.css'
import DogContainer from './DogContainer'

class App extends React.Component {
  state = {
    dogs: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
    .then(resp => resp.json())
    .then(arrayOfDogs => {
      this.setState({
        dogs: arrayOfDogs
      })
    })
  }

  filteredDogsArray = () => {
    let theArrayToReturn = this.state.dogs

    return theArrayToReturn
  }

  render() {
    return (
      <div className="App">
        <DogContainer 
          dogs={this.filteredDogsArray()}
        />
      </div>
    )
  }
}

export default App
