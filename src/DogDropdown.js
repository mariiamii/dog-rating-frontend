import React, { Component } from 'react';

class DogDropdown extends Component {

    handleChange = (event) => {
        this.props.changeDropdownOption(event.target.value)
    }

    render() {
        return (
            <nav>
                <h2>Dog Breeds</h2>
                <select name='breed' id='breed' value={this.dropdownOption} onChange={this.handleChange}>
                <option value='All'>All</option>
                <option value='Shiba'>Shiba</option>
                <option value='Corgi'>Corgi</option>
                <option value='Husky'>Husky</option>
                <option value='Golden Retriever'>Golden Retriever</option>
                <option value='Dachshund'>Dachshund</option>
                <option value='French Bulldog'>French Bulldog</option>
                <option value='Poodle'>Poodle</option>
                <option value='Australian Shepherd'>Australian Shepherd</option>
                <option value='Beagle'>Beagle</option>
                <option value='Pomeranian'>Pomeranian</option>
                </select>
            </nav>
        )
    }
}

export default DogDropdown