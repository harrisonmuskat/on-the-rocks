import React, { Component } from 'react';

const Button = (props) => {
  return(
    <li><a href="#" className="button" onClick={props.handleClick}>Sign In</a></li>
  )
}

export default Button;
