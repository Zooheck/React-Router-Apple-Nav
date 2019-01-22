import React, { Component } from 'react';
import './App.css';
import NavItems from './Data'
import NavWrapper from './components/NavWrapper';
class App extends Component {
  constructor() {
    super()
    this.state = {
      navItems: []
    }
  }
  componentDidMount() {
    this.setState({
      navItems: NavItems
    })
  }
  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
