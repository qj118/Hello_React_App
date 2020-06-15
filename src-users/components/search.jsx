import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component{

    static propTypes = {
        getSearchName:PropTypes.func.isRequired,
    }

    handleSearch = () => {
        const { getSearchName } = this.props;
        const searchName = this.searchInput.value.trim();
        if(searchName) {
            getSearchName(searchName);
        }
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="enter the name you search"
                       ref={input => this.searchInput = input}
                />
                <button onClick={this.handleSearch}>Search</button>
            </div>
        );
    }
}