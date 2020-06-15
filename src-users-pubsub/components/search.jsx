import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component{

    handleSearch = () => {
        const searchName = this.searchInput.value.trim();
        if(searchName) {
            PubSub.publish('search', searchName); // 发布消息
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