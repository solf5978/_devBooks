// Boilerplate
import React from 'react'
import logo from './logo.svg';
import './App.css';

import { getTTFB } from "web-vitals";

const list = [
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

function App() {
  // Main Actions Go Here

  // Vanilla Javascript
  const listItems = list.map( item => {
    return `<div>${item.author}</div>`
  });

  function List() {
    return list.map( item => {
      return (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      )
    })
  }

  function ListAlternative() {
    return (
      <div>
        {list.map( item => {
          return (        
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
          );
        })}
      </div>
    )
  }

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <hr />
      <List />
      <ListAlternative />
      
    </div>
  );
}
export default App;
