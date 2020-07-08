import React from 'react'

class DogItem extends React.Component {
    state = {
        rating: 0
    }

    componentDidMount = () => {
        let ratingsArr = this.props.dog.dog_ratings
        console.log(ratingsArr, "ratings array")
        let newArr = ratingsArr.map((rating) => {
            return rating.rating
        })
        console.log(newArr, "new array")
        // debugger
        this.setState({
            rating: newArr.reduce(function(a, b) { return a + b; }, 0)
        })
    }

    render() {
        let { image_url } = this.props.dog

        console.log(this.state.rating)
        // console.log(this.renderAvg)

        return (
            <li>
                <img src={image_url} alt={this.props.dog.breed.name} />
            </li>
        )
    }
}

export default DogItem
