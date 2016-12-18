import React, { PureComponent } from 'react';
import './App.css';
import ListControl from './ListControl'

import QUESTIONS from './questions.json'

export default class App extends PureComponent {
  render() {
    return (
      <div className='App'>          
        {QUESTIONS.map(question => (<ListControl key={question.id} question={question} />))}
      </div>
    );
  }
}
