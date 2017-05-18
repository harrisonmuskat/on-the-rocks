import React, { Component } from 'react';
import Button from '../components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideForm: true
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFormCss = this.handleFormCss.bind(this);
  }

  handleButtonClick() {
    let newHideForm = !this.state.hideForm;
    this.setState( {hideForm: newHideForm} );
  }

  handleFormCss() {
    if(this.state.hideForm) {
      return "hidden";
    } else {
      return "";
    }
  }

  render() {
    let formCss = this.handleFormCss();
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">On the Rocks</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search" /></li>
            <li><Button handleClick={this.handleButtonClick}/></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
