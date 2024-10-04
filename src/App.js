import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";
import './App.css'

class App extends Component {
  state = {
    ninjas : [
      {name : "Ram", age : 30, belt : 'black', id : 1},
      {name : "Raj", age : 40, belt : 'green', id : 2},
      {name : "Rakesh", age : 50, belt : 'yellow', id : 3},
      {name : "Ramesh", age : 20, belt : 'pink', id : 4}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My React Component Demo1 </h1>
        <p> Welcome Developers :)</p>

        <br/>
        <h3> Custom Sub component with properties and state - Functional Object style</h3>
        <Ninjas ninjas = {this.state.ninjas} deleteNinja={this.deleteNinja}/>
       
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;