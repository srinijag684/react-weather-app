import './App.css';
import React from 'react';
import Weather from './Weather';

function App() {
  return(
  <div className='App'>
      <div className='footer'>
      <Weather defaultCity="Singapore" />
        This project is created by Srinija and is {" "}
        <a
          href='https://github.com/srinijag684/react-weather-app'
          target="_blank"
          rel="noreferrer"
        >
        open-sourced on Github
        </a>
      </div>
 </div>);
    
  
}

export default App;
