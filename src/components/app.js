import React, { Component } from 'react';
import Qbank from './qbank'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionbank: []
    }
  }
  render() {
    return (
      <div className='app'>
        <div className = 'title'>QuizApp</div>
      </div>
    );
  }
}
