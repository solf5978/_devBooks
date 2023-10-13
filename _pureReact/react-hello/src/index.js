import React from 'react'
import { createRoot } from 'react-dom/client'

// What JSX Turns Into
// By Babel's Compiler →　JavaScript

// React.createElement(
//   string|Element,    ←　HTML or SVG Tags or Components
//   [propsObject],     ←　
//   [children...]
// )

// Nested
// React.createElement('div', {},
//  React.createElement('div', {}, 'Child1'),
//    React.createElement('div', {}, 'Child2',
//      React.createElement('div', {}, 'Child2_child')))

function HelloWorld() {
  return (
    <div>Hello World</div>
  )
}

function ReHelloWorld() {
  return (
    React.createElement(
      'div',
      {},
      'Hello World'
    )
  )
}

function SpanComponent() {
  return (
    React.createElement)
    'span',
    {className: 'song-name' },
    props.song.name
}

// Syntax
// ReactDOM.render([React Element], [DOM Element])

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<ReHelloWorld />)