// Boilerplate
import React from 'react'
import logo from './logo.svg';
import './App.css';

import { getTTFB } from "web-vitals";

// With Block Body
const List = props => {
  props.list.map( item => {
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
  })
}

// More Concise
const ListAnother = () => 
  list.map( item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    )
  )


const App = () => {
  // Main Actions Go Here

  const stories = [
    {
    title: `React`,
    url: `https://reactjs.org/`,
    author: `Jordan Walke`,
    num_comments: 3,
    points: 4,
    objectID: 0,},
    {
      title: `Redux`,
      url: `https://redux.js.org/`,
      author: `Dan Abramov, Andrew Clark`,
      num_comments: 2,
      points: 5,
      objectID: 1,},
  ];

  const handleChange = event => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}/>

      <hr />
      {/* Creating an Instance of List component */}
      <List list={stories} />
      {/* Creating another Instance of List component */}
      <List list={stories} />
      {/* Creating an Instance of ListAlternative component */}
      <ListAlternative list={stories} />
      
    </div>
  );
}
export default App;
