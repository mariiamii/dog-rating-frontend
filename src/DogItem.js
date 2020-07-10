import React from 'react'

class DogItem extends React.Component {
    state = {
        avgRating: 0,
        rating: 0,
        clicked: false
    }

    componentDidMount = () => {
        let ratingsObjsArr = this.props.dog.dog_ratings
        // console.log(ratingsObjsArr, "before map")
        let newArr = ratingsObjsArr.map((rating) => {
            return rating.rating
        })
        
        // console.log(newArr, "after map")
        // console.log(newArr.count, "array count")
        if (newArr.length > 0 ) {
            // console.log("fetch patch trigger")
            fetch(`http://localhost:3000/dogs/${this.props.dog.id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    avg_rating: (newArr.reduce((a, b) => a + b) / newArr.length).toFixed(1)
                })
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    avgRating: data.avg_rating
                })
            })
        }
    }
    
    handleClick = (event) => {
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
        .then(resp => resp.json())
        .then(data => {
            let ratingsObjsArr = this.props.dog.dog_ratings
            ratingsObjsArr.push(data)
    
            let newArr = ratingsObjsArr.map((rating) => {
                return rating.rating
            })
            
            this.setState({
            avgRating: (newArr.reduce((a, b) => a + b) / newArr.length).toFixed(1),
            clicked: !this.state.clicked
            })
        })
    }

    componentDidUpdate() {
        fetch(`http://localhost:3000/dogs/${this.props.dog.id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                avg_rating: this.state.avgRating
            })
        })
    }

    render() {
        let { image_url } = this.props.dog

        return (
            <div className="div-container">
                <li className="container">
                    <span className="image-container">
                        <h2>Rating: {this.state.avgRating}</h2>
                        <img className="image" src={image_url} alt={this.props.dog.breed.name} />
                            <div className="rating-buttons-container">{this.state.clicked
                                ? 
                                ""
                                :
                                <div className="rating-buttons">
                                    <button className="rating-btn" value="1" onClick={this.handleClick}>1</button>
                                    <button className="rating-btn" value="2" onClick={this.handleClick}>2</button>
                                    <button className="rating-btn" value="3" onClick={this.handleClick}>3</button>
                                    <button className="rating-btn" value="4" onClick={this.handleClick}>4</button>
                                    <button className="rating-btn" value="5" onClick={this.handleClick}>5</button>
                                </div>
                            }
                            </div>
                    </span>
                </li>
            </div>
        )
    }
}

export default DogItem

/* STEPS:
- √make 5 btn's to equal values 1-5
- √onClick event listener on the btn element
- √clickHandler w/ POST request (/dog_ratings)
- √trigger a re-render once the fetch is done
- √remove btn's after POST

- √componentDidMount: PATCH request to /dogs to update avg_rating
- √backend: make avg_rating attribute for dogs model (default: empty integer)
- √handleClick: patch request to /dogs/avg_rating
*/
