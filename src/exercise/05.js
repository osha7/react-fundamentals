// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App


// function Box(props) {
//   return (
//     // <div className="box" {...props} /> // spreading the props like this overrides all the properties before it in case of conflict
//   )
// }
// ---------------------------------------------------------------------------
// function Box({className = '', style, ...otherProps}) { // set className to default so that it never comes through as undefined
//   return (
//         <div className={`box ${className}`.trim()} style={{fontStyle: 'italic', ...style}} {...otherProps} /> // className value is a temporal literate 
//   )
// }

// const smallBox = <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
// const mediumBox = <Box className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
// const largeBox = <Box className="box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>
// ---------------------------------------------------------------------------
function Box({size, className = '', style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
        <div className={`box ${className} ${sizeClassName}`.trim()} style={{fontStyle: 'italic', ...style}} {...otherProps} />
  )
}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>Unsized Box</Box>
    </div>
  )
}

export default App

// in html you pass a string to the inline 'style' prop
  // class attribute
// in React you pass an object of CSS
  // in jsx you use the className attribute

  // in the console if you have an element selected, there will be a '$0' in light grey after the highlighted element (Elements tab)
  // if you type $0 in the console, it references the element you have selected
  // type:  $0.className or $0.style