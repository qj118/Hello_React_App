import React, { Component } from 'react';

import Search from "./search";
import Main from "./main";


export default class App extends Component{

    render(){
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search getSearchName={this.getSearchName}/>
                </section>
                <Main />
            </div>
        );
    }
}