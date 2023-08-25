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

function getTitle(title) {
  return title;
}

const welcome = {
  greeting: `Hey`, 
  title: `React`,
}

const title = `React`;

function App() {
  return (
    <div>
      <h1>Hello function {getTitle("React")}</h1>
      <h1> Hello {title} World</h1>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <label htmlFor="search"> Search: </label>
      <input- id="search" type="text" />
    </div>
  );
}

export default App;