import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form';
import Historical from './components/Historical'


ReactDOM.render(
  <React.StrictMode>
   
    <Form /> 
    <Historical />

  </React.StrictMode>,
  
  document.getElementById('root')
);

