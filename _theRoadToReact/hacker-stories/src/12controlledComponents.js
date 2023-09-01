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

  const Search = props => {
    return (
      <div>
        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' onChange={props.onSearch}/>

        <p>
          Searching For <strong> {searchTerm} </strong>
        </p>
      
      </div>
    )
  };


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
  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter( story => 
    story.title
      .toLowerCase()
      .includes(searchTerm)
  )

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      {/* Creating an Instance of List component */}
      <List list={stories} />
      {/* Creating another Instance of List component */}
      <List list={stories} />
      {/* Creating an Instance of ListAlternative component */}
      <ListAlternative list={stories} />

      <List list={searchedStories} />
      
    </div>
  );
}
export default App;
