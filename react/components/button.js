import React, { Component } from 'react';

const Button = (props) => {
  return(
    <a href="#" className="button" onClick={props.handleClick}>Sign In</a>
  )
}

export default Button;
