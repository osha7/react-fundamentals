// // Basic Forms
// // http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   const usernameInputRef = React.useRef()
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   function handleSubmit(event) {
//     event.preventDefault() // stops full page refresh
//     // console.log(event.nativeEvent)
//     // console.log(event)
//     // console.dir(event.target)
//     // const value = event.target[0].value
//     // onSubmitUsername(value)
//     // console.dir(event.target.elements)
//     // const value = event.target.elements.usernameInput.value
//     // console.dir(usernameInputRef)
//     const value = usernameInputRef.current.value
//     onSubmitUsername(value)
//   }
// //  using ref with the useRef hook is an option, but better to to stick with 'event.target.elements.usernameInput.value'
//   const [error, setError] = React.useState(null)

//   function handleChange(event) {
//     console.log(event.target.value)
//     const {value} = event.target
//     const isLowerCase = value === value.toLowerCase()
//     setError(isLowerCase ? null : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input ref={usernameInputRef} id="usernameInput" name="username" type="text" onChange={handleChange} /> 
//       </div>
//       <div style={{color: 'red'}}>{error}</div>
//       {/* <button disabled={error} type="submit">Submit</button> */}
//       <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App




// *********  controlled inputs:

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = React.useRef()

  const [userName, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} id="usernameInput" name="username" type="text" onChange={handleChange} value={userName} />  
        {/* using the value prop. This is called a controlled input. */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
