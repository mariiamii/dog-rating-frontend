import React, { Component } from 'react';

class DogDropdown extends Component {
    handleChange = (event) => {
        this.props.changeDropdownOption(event.target.value)
    }

    render() {
        return (
            <nav>
                <h2>Select Your Breed</h2>
                <select name='breed' id='breed' value={this.dropdownOption} onChange={this.handleChange}>
                    <option className="dropdown" value='All'>All</option>
                    <option className="dropdown" value='Top Dogs'>View Top Dogs</option>
                    <option className="dropdown" value='Shiba'>Shiba Inu</option>
                    <option className="dropdown" value='Corgi'>Corgi</option>
                    <option className="dropdown" value='Husky'>Siberian Husky</option>
                    <option className="dropdown" value='Golden Retriever'>Golden Retriever</option>
                    <option className="dropdown" value='Dachshund'>Dachshund</option>
                    <option className="dropdown" value='French Bulldog'>French Bulldog</option>
                    <option className="dropdown" value='Poodle'>Poodle</option>
                    <option className="dropdown" value='Australian Shepherd'>Australian Shepherd</option>
                    <option className="dropdown" value='Beagle'>Beagle</option>
                    <option className="dropdown" value='Pomeranian'>Pomeranian</option>
                </select>
            </nav>
        )
    }
}

export default DogDropdown
