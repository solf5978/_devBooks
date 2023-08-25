// BoilerPlate
// import logo from './logo.svg';
// import './App.css';

import { getTTFB } from "web-vitals";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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

// Vanilla Javascript

const pureJS_List = () => {
  for (let i = 0; i < list.length; i++) { return console.log(list[i].author)}}

// React Version

const reactJS_List = list.map( function(listItem) {
  <h2>{listItem.title}</h2>
});

// Apply Object Key on React JS
const aha = () => {
  list.map ( function(listItem) {
    return <h2> {listItem.author}</h2>
  })
}

function getTitle(title) {
  return null;
}      

const welcome = {
  greeting: `Hey`, 
  title: `React`,
}

const title = `React`;

function App() {
  return (
    <div>
      <h1> My Hacker Stories</h1>
      <h1>Hello function {getTitle("React")}</h1>
      <h1> Hello {title} World</h1>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <h1> VanillaJs </h1>
      {pureJS_List}
      <h1> React JS</h1>
      {list.map( function(listItem) {
        return <h2>{listItem.points}</h2>;
      })}
      <h1> Apply Object Key To React</h1>
      {list.map(item => { return (
        <div key={item.objectID}>
          {item.title}
        </div>);        } 
                ) 
      }

      <h1> More Than One Item </h1>
      {list.map( function(item) { 
        return (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>;
        </div> );
          })}
        

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;