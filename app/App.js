import React, { Component } from 'react';import {render} from 'react-dom';class App extends Component {  render(){    return (      <h1>Hello World</h1>    );  }}render(<App />, document.getElementById('root'));/*//conditional form componentimport React, {Component} from 'react';import {render} from 'react-dom';class Search extends Component{  constructor(){    super();    this.state = {      searchTerm: "React"    };  }  handleChange(event){    this.setState({searchTerm: event.target.value});  }  render(){    return(      <div>        Search Term:        <input type="Search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />      </div>    );  }}render(<Search />, document.body);*//*//unconditional form componentimport React, {Component} from 'react';import {render} from 'react-dom';class Search extends Component{  handleSubmit(event){    console.log("Submitted values are: ",        event.target.name.value,        event.target.email.value);    event.preventDefault();  }  render(){    return(        <form onSubmit={this.handleSubmit}>          <div className="formGroup">            Name: <input type="text" name="name" />          </div>          <div className="formGroup">            E-mail: <input type="text" name="email" />          </div>          <button type="submit">Submit</button>        </form>    );  }}render(<Search />, document.getElementById('root'));*//*//uses of refs in reactimport React, {Component} from 'react';import {render} from 'react-dom';class FocusText extends Component{  handleClick(){    //Explicity focus the text input using the raw DOM API.    this.refs.myTextInput.focus();  }  render(){    //The ref attribute adds a reference to the component to    //this.refs when the component is mounted.    return(      <div>        <input type="text" ref="myTextInput" />        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />      </div>    );  }}render(<FocusText />, document.getElementById('root'));*/