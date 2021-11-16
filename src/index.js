import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Register';
import Login from './Components/Login';
import SelectBrand from './Components/SelectBrand';
import Footer from './Components/Footer';
import Testing from './Components/Testing';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Activate from './Components/Activate';
// import '..public/css/bootstrap.min.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

ReactDOM.render(
  <React.StrictMode>
  
  {/* <Footer/> */}


    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
