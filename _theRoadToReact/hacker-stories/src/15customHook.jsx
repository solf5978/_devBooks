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

const ListAdv = ({list}) =>
  list.map(item => <Item key={item.objectID} item={item} />)

const Item = ({item}) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
)

// Nested Destructuring
const ItemNest = ({
  item: {
    title,
    url,
    author,
    num_comments,
    points,
  }
}) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
)

// Spread and Rest Operators
// 1. Iteration

const ListSR = ({ list }) =>
  list.map(item => (
    <ItemSR
      key={item.objectID}
      title={item.title}
      url={item.url}
      author={item.author}
      num_comments={item.num_comments}
      points={item.points}
      />
  ))

  const ItemSR = ({ title, url, author, num_comments, points }) => (
    <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
  )

// 2. Spread and Rest Operators

const ListSR2 = ({ list }) =>
    list.map( item => <ItemSR2 key={item.objectID} {...item} />)

const ItemSR2 = ({ title, url, author, num_comments, points }) => (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
    )

// Final Revisied
const ListSRO = ({ list }) =>
  list.map(({objectID, ...item}) => <ItemSRO key={objectID} {...item} />)

const ItemSRO = ({ title, url, author, num_comments, points }) => (    
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
)


// Initial Concise
const ListAnother = ({ list }) => 
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

  const Search = ({search, onSearch}) => (
      <div>
        <label htmlFor='search'>Search: </label>
        <input 
            id='search' 
            type='text' 
            value={search} 
            onChange={onSearch}
            />
        <p>
          Searching For <strong> {searchTerm} </strong>
        </p>
      
      </div>
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
  const [searchTerm, setSearchTerm] = React.useState('Placeholder');

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])
  
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

      <Search Search={searchTerm} onSearch={handleSearch} />

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
