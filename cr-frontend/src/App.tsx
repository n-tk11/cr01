import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

type Appstate = {
  message: string;
};

class App extends React.Component<{}, Appstate> {
  state: Appstate  = {
    message: 'Default message', 
  };
  
  componentDidMount(){
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        this.setState({message: obj.message});
      });
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}
export default App;
