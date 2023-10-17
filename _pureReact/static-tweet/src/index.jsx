import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Tweet />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Message />
      </div>
      Tweet
    </div>
  )
}

function Avatar() {
  return (
    <img src="https://www.gravatar.com/avatar/nothing"
         className="avatar"
         alt="avatar" />
  )
}

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  )
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">
        Your Name
      </span>
      <span className="handle">
        @yourhandle
      </span>
    </span>
  )
}