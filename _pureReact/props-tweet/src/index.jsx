import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import moment from 'moment';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

let testTweet = {
  message: "Something about dogs.",
  gravatar:"Knight",
  author: {
    handle: "dogguy",
    name: "imma dog person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2020-10-15"
}



function Avatar({hash}) {
  let url=`https://www.gravatar.com/avatar/${hash}`
  return (
    <img src={url}
         className="avatar"
         alt="avatar" />
  )
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  )
}

function NameWithHandle({ author }) {
  const { name, handle } = author
  return (
    <span className="name-with-handle">
      <span className="name">
        {name}
      </span>
      <span className="handle">
        @{handle}
      </span>
    </span>
  )
}

const Time = ({ time }) => (
  <span className="time">{moment(time).fromNow()}</span>
  )



const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

const RetweetButton = ({ count }) => (
  <i className="fa fa-retweet retweet-button" />
)

const LikeButton = ({ count }) => (
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Tweet tweet={testTweet}/>
  </>
);