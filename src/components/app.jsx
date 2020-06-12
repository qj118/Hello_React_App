import React, { Component } from 'react';

import Search from "./search";
import Main from "./main";


export default class App extends Component{

    state = {
        searchName: '',
    }

    getSearchName = (searchName) => {
        this.setState({searchName});
    }

    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search getSearchName={this.getSearchName}/>
                </section>
                <Main searchName={this.state.searchName}/>
            </div>
        );
    }
}