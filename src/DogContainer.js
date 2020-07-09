import React from 'react'
import DogItem from './DogItem'

let DogContainer = (props) => {
    let arrayOfComponents = props.dogs.map((dogPOJO) => {
      return <DogItem key={dogPOJO.id} dog={dogPOJO} />
    })
  
    return (
      <main>
        { 
          <ul className="container-ul">
              {arrayOfComponents}
          </ul>
        }
      </main>
    )
  }
  
export default DogContainer


/* STEPS:
- load a limited amount of DogItem components
- infinite scroll down or btn to add more DogItem components to DOM
*/