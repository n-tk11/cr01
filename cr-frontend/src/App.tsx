import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
const App = () => {
  const [message,setMessage] = useState('My message');

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message);
      });
  },[]);

  return (
    <div className="App">
      {message}
    </div>
  )
}

export default App;
