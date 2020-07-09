import React from 'react'
// import logo from './logo.svg';
import './App.css'
import DogContainer from './DogContainer'
import DogDropdown from './DogDropdown'

class App extends React.Component {
  state = {
    dogs: [],
    dropdownOption: 'All'
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

    if (this.state.dropdownOption !== 'All') {
      theArrayToReturn = this.state.dogs.filter(dog => {
        return dog.breed.name === this.state.dropdownOption
      })
    }
    return theArrayToReturn
  }

  changeDropdownOption = (valueFromChild) => {
    this.setState({ dropdownOption: valueFromChild })
  }

  render() {
    return (
      <div className="App">
        <DogDropdown 
          dropdownOption={this.state.dropdownOption} 
          changeDropdownOption={this.changeDropdownOption}
        />
        <DogContainer 
          dogs={this.filteredDogsArray()}
        />
      </div>
    )
  }
}

export default App


/* STEPS:
- √dog dropdown, which will iterate through all the breeds
- √create filter by breed name
- use NavLink for routing
*/