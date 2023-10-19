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
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
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

const Time = () => (
  <span className="time">3h ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
)

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
)

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
)

// function Dave() {
//   const firstName = "Dave"
//   const lastName = "Ceddia"
//   return (
//     <Person
//       className='person'
//       age={33}
//       name={firstName + '' + lastName} />
//   )
// }

// function HelloProps(props) {
//   return (
//     <span>Hello, {props.name}</span>
//   )
// }