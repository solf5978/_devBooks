import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <MyThing />
  <WhiteSpace />
  <Greeting />
  <ReHelloWorld />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function MyThing() {
  return (
    <div className="book">
      <div className="title">
        The Title
      </div>
      <div className="author">
        The Author
      </div>
      <div className="stats">
        5 Stars
      </div>
      <ul className="stats">
        <li className="rating">
          5 Stars
        </li>
        <li className="isbn">
          12-345678-910
        </li>
      </ul>
    </div>
  )
}


function WhiteSpace() {
  return (
    <div>
      <div className="whitespace">
        <span>.</span>
        <p>.</p>
      </div>
      <div className="newline">
        NewLine






        Test

      </div>
      <div>
        &nbsp;Non-Breaking
        &nbsp;Space&nbsp;
      </div>
    </div>
  )
}

function ReHelloWorld() {
  alert('12234141341')
  return 
    React.createElement(
      'div',
      {},
      'Hello World'
    )
}

function Greeting() {
  let username = "root"
  // username = undefined
  // username = null
  // username = false

  return (
    <p className="Greeting">
      {username && 'Greeting, username'}
      {!username && 'Not logged in'}
    </p>
  )
}
