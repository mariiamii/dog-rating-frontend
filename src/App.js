import React from 'react'
// import logo from './logo.svg';
import './App.css'
import DogContainer from './DogContainer'
import DogDropdown from './DogDropdown'
import Home from './Home'
// import NotFound from './NotFound'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    dogs: [],
    dropdownOption: 'All'
  }

  componentDidMount() {
    fetch("http://localhost:3000/dogs")
    .then(resp => resp.json())
    .then(arrayOfDogs => {
      this.shuffle(arrayOfDogs)
      this.setState({
        dogs: arrayOfDogs
      })
    })
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  filteredDogsArray = () => {
    let theArrayToReturn = this.state.dogs

    if (this.state.dropdownOption === 'Top Dogs') {
      theArrayToReturn = this.state.dogs.sort((a, b) => a.avg_rating > b.avg_rating ? -1 : 1)
    } else if (this.state.dropdownOption !== 'All') {
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
        <main>
          <Switch>
            <Route path="/home" exact component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>

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

- √sort by avg_rating
- √create shuffle method to randomize dogs array
- create some way to limit dogs array to 5 dogs
- load a limited amount of DogItem components
- infinite scroll down or btn to add more DogItem components to DOM

*/
