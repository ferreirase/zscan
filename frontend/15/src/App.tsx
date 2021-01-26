import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange =  (e: any) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <img src={logo} alt="React Logo"/>
      <input type="text" 
        placeholder="Text" value={ inputText } onChange={handleInputChange}/>
      <h1>{ inputText }</h1>
    </div>
  );
};

export default App;
