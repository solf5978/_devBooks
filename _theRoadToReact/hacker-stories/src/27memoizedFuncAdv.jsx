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

const ListInlineHandler = ({ list, onRemoveItem }) => (
    <ul>
        {list.map((item) => (
            <Item
            key={item.objectID}
            item={item}
            onRemoveItem={onRemoveItem}
            />
        ))}
    </ul>
)
// Using An Array Format To Return Back TO HTML
//  const Search = ({search, onSearch}) => [
//        <label key="1" htmlFor='search'>
//            Search:  {' '}
//        </label>,
//        <input 
//            key="2"
//            id='search' 
//            type='text' 
//            value={search} 
//            onChange={onSearch}
//            />,
//        <p key="3">
//          Searching For <strong> {searchTerm} </strong>
//        </p>,
//        ]
//    
// Another Way To Well Handle - Introducing React Fragment
//  const Search = ({ search, onSearch }) => (
//    <React.Fragment>
//        <label htmlFor='search'>Search: </label>
//        <input 
//            id='search' 
//            type='text' 
//            value={search} 
//            onChange={onSearch}
//            />
//        <p>
//          Searching For <strong> {searchTerm} </strong>
//        </p> 
//    </React.Fragment>
//  )
//
  // Shorthand Version

  const Search = ({ search, onSearch }) => (
    <>
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
    </>
  )



  const useStorageState = (key, initialState) => {
      const [value, setValue] = React.useState(
          localStorage.getItem(key) || initialState
      )
      
      React.useEffect(() => {
          localStorage.setItem(key, value)
        }, [value, key])

        return [value, setValue]
    }
//  const InputWithLabel = ({ id, type = 'text', value, onInputChange, children, }) => (
//    <>
//      <label htmlFor={id}>{children}</label>
//      &nbsp;
//      <input
//        id={id}
//        type={type}
//        value={value}
//        autoFocus={true}
//        onChange={onInputChange}
//      />
//    </>
//  )
//
// // Improve Flexibility w/ Dedicated Prop
//   const InputWithLabel = ({ 
//     id, 
//     type = 'text',
//     value, 
//     onInputChange,
//     isFocused,
//     children, }) => (
//     <>
//       <label htmlFor={id}>{children}</label>
//       &nbsp;
//       <input
//         id={id}
//         type={type}
//         value={value}
//         autoFocus={isFocused} // Also a shortHand
//         onChange={onInputChange}
//       />
//     </>
//   )

// Refactor Back To Imperative
   const InputWithLabel = ({ 
     id, 
     type = 'text',
     value, 
     onInputChange,
     isFocused, }) => {
     const inputRef = React.useRef();

     React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])

    return (
     <>
       <label htmlFor={id}>{children}</label>
       &nbsp;
        {}
       <input
         ref={inputRef}
         id={id}
         type={type}
         value={value}
         autoFocus={isFocused} // Also a shortHand
         onChange={onInputChange}
       />
     </>
    )
        }
    const initialStories = [
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
//    ShortHandVersion
//    const getAsyncStories = () =>
//        Promise.resolve({ data: {stories: initialStories}})

    const getAsyncStories = () =>
      new Promise((resolve) =>
      setTimeout( () =>
      resolve({ data: { stories: initialStories }}), 20000 )
      )

//    const storiesReducer = (state, action) => {
//        if (action.type === 'SET_STORIES') {
//            return action.payload 
//        } else if (action.type === 'REMOVE_STORY') {
//            return state.filter((story) => action.payload.objectID !== story.objectID)
//        } else {
//            throw new Error()
//        }
//    }
// Refactoring IF-ELSE LOOP Into Switch Case
      const storiesReducer = (state, action) => {
        switch (action.type) {
            case 'STORIES_FETCH_INIT':
                return {
                    ...state,
                    isLoading: true, 
                    isError: false,
                }
            case 'STORIES_FETCH_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload,
                }
            case 'STORIES_FETCH_FAILURE':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            case 'REMOVE_STORY':
                return {
                    ...state,
                    data: state.data.filter(
                        story => action.paylod.objectID !== story.objectID
                    )
                }
            default:
                throw new Error()
        }
      }

//    const ItemOnRemove = ({ item, onRemoveItem }) => {
//        const handleRemoveItem = () => {
//            onRemoveItem(item)
//        }
//        return (
//            <li>
//              <span>
//                <a href={item.url}>{item.title}</a>
//              </span>
//              <span>{item.author}</span>
//              <span>{item.num_comments}</span>
//              <span>{item.points}</span>
//              
//              <span>
//                <button type='button' onClick={handleRemoveItem}>
//                    Dismiss
//                </button>
//              </span>
//            </li>
//        )
//    }
//
// 1. Introduce The InLine Handler

const ItemOnRemove = ({ item, onRemoveItem }) => (
        <li>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          
          <span>
            <button type='button' onClick={() =>  onRemoveItem(item)}>
                Dismiss
            </button>
          </span>
        </li>
    )



// 2. Using JS Bind Functionality 
// const ItemOnRemove = ({ item, onRemoveItem }) => (
//
//         <li>
//           <span>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span>{item.author}</span>
//           <span>{item.num_comments}</span>
//           <span>{item.points}</span>
//           
//           <span>
//             <button type='button' onClick={onRemoveItem.bind(null, item)}>
//                 Dismiss
//             </button>
//           </span>
//         </li>
//     )
// 


 const App = () => {
  // Main Actions Go Here

   const storiesPre = [
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

  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')
  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [],
      isLoading: false,
      isError: false, })

  const handleFetchStories = React.useCallback(() => {

    if (!searchTerm) return;

    dispatchStories({ type: 'STORIES_FETCH_INIT'})

    fetch(`${API_ENDPOINT}${searchTerm}`)
        .then((response) => response.json())
        .then((result) => {
          dispatchStories({
              type: 'STORIES_FETCH_SUCCESS',
              payload: result.hits,
        })
    })
    .catch(() => dispatchStories({ type: 'STORIES_FETCH_FAILURE' }))
  }, [searchTerm])

  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  // React.useEffect(() => {
  //   getAsyncStories().then(result => {
  //       setStories(result.data.stories)
  //   })
  // }, [])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const handleRemoveStory = removeStory => {
    dispatchStories({
        type: 'REMOVE_STORY',
        payload: item,
    })

    dispatchStories({
        type: 'SET_STORIES',
        payload: newStories
    })
  }

  const searchedStories = stories.data.filter( story => 
    story.title
      .toLowerCase()
      .includes(searchTerm)
  )

  return (
    <div>
      <h1> My Hacker Stories</h1>

      <InputWithLabel
            id='search' 
            value={search} 
            onChange={onSearch}
         >
            <strong>Search: </strong>
        </InputWithLabel>

      <Search Search={searchTerm} onSearch={handleSearch} />

      {/* Creating an Instance of List component */}
      <List list={stories} />
      {/* Creating another Instance of List component */}
      <List list={stories} />
      {/* Creating an Instance of ListAlternative component */}
      <ListAlternative list={stories} />

      <List list={searchedStories} />
      <ListInlineHandler list={searchedStories} onRemoveItem={handleRemoveStory} />
      
      {isError && <p> Something Goes Wrong </p>}
      {isLoading ? (
        <p>Loading...</p> )
            : (
            <ListInlineHandler 
            list={searchedStories}
            onRemoveItem={handleRemoveStory} />
        )}

      {stories.isError && <p> Something Goes Wrong </p>}
      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListInlineHandler
        list = {searchedStories}
        onRemoveItem={handleRemoveStory}
        />
      )}

      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListInlineHandler
        list = {stories.data}
        onRemoveItem={handleRemoveStory}
        />
      )}

    </div>
  );
}
export default App;
