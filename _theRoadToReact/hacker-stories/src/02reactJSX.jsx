// Boilerplate
import React from 'react'
import logo from './logo.svg';
import './App.css';

import { getTTFB } from "web-vitals";

const welcome = {
  greeting: `Hey`,
  title: `React`,
}

function getTitle(title) {
  return title;
}

function App() {
  // Main Actions Go Here

  return (
    <div>
      <h1> { welcome.greeting} {welcome.title} </h1>
      <h1> Hello {getTitle(`React`)} </h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;
