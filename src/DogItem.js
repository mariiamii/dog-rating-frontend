import React from 'react'

class DogItem extends React.Component {
    state = {
        avgRating: 0,
        rating: 0
    }

    componentDidMount = () => {
        let ratingsArr = this.props.dog.dog_ratings
        let newArr = ratingsArr.map((rating) => {
            return rating.rating
        })
        this.setState({
            avgRating: (newArr.reduce((a, b) => a + b) / newArr.length).toFixed(1)
        })
    }
    
    handleClick = (event) => {
        console.log(event.target.value)
        console.log(this.props.dog.id, "dog id")
        
        fetch("http://localhost:3000/dog_ratings", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                dog_id: this.props.dog.id,
                rating: event.target.value
            })
        })
    
    }

    render() {
        let { image_url } = this.props.dog

        return (
            <li>
                <p>{this.state.avgRating}</p>
                <img src={image_url} alt={this.props.dog.breed.name} />
                <button value="1" onClick={this.handleClick}>1</button>
                <button value="2" onClick={this.handleClick}>2</button>
                <button value="3" onClick={this.handleClick}>3</button>
                <button value="4" onClick={this.handleClick}>4</button>
                <button value="5" onClick={this.handleClick}>5</button>
            </li>
        )
    }
}

export default DogItem

/* STEPS:
- √make 5 btn's to equal values 1-5
- √onClick event listener on the btn element
- √clickHandler w/ POST request (/dog_ratings)
- trigger a re-render once the fetch is done
- remove btn's after POST
*/