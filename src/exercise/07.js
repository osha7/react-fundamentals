// // Rendering Lists
// // http://localhost:3000/isolated/exercise/07.js

// import * as React from 'react'

// const allItems = [
//   {id: 'apple', value: '🍎 apple'},
//   {id: 'orange', value: '🍊 orange'},
//   {id: 'grape', value: '🍇 grape'},
//   {id: 'pear', value: '🍐 pear'},
// ]

// function App() {
//   const [items, setItems] = React.useState(allItems)

//   function addItem() {
//     const itemIds = items.map(i => i.id)
//     setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
//   }

//   function removeItem(item) {
//     setItems(items.filter(i => i.id !== item.id))
//   }

//   return (
//     <div className="keys">
//       <button disabled={items.length >= allItems.length} onClick={addItem}>
//         add item
//       </button>
//       <ul style={{listStyle: 'none', paddingLeft: 0}}>
//         {items.map(item => (
//           // 🐨 add a key prop to the <li> below. Set it to item.id
//           <li key={item.id}>
//             <button onClick={() => removeItem(item)}>remove</button>{' '}
//             <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
//             <input id={`${item.id}-input`} defaultValue={item.value} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App




// Rendering Lists
// 💯 Focus Demo
// http://localhost:3000/isolated/final/07.extra-1.js

import * as React from 'react'

function FocusDemo() {
  const [items, setItems] = React.useState([
    {id: 'apple', value: '🍎 apple'},
    {id: 'orange', value: '🍊 orange'},
    {id: 'grape', value: '🍇 grape'},
    {id: 'pear', value: '🍐 pear'},
  ])

  React.useEffect(() => {
    const id = setInterval(() => setItems(shuffle), 1000)
    return () => clearInterval(id)
  }, [])

  function getChangeHandler(item) {
    return event => {
      const newValue = event.target.value
      setItems(allItems =>
        allItems.map(i => ({
          ...i,
          value: i.id === item.id ? newValue : i.value,
        })),
      )
    }
  }

  return (
    <div className="keys">
      <div>
        <h1>Without a key</h1>
        {items.map(item => (
          <input
            className={`${item.id}-input`}
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
      <div>
        <h1>With array index as key</h1>
        {items.map((item, index) => (
          <input
            className={`${item.id}-input`}
            key={index}
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
      <div>
        <h1>With a Proper Key</h1>
        {items.map(item => (
          <input
            className={`${item.id}-input`}
            key={item.id} // maintains state properly
            value={item.value}
            onChange={getChangeHandler(item)}
          />
        ))}
      </div>
    </div>
  )
}

function shuffle(originalArray) {
  const array = [...originalArray]
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function App() {
  return <FocusDemo />
}

export default App
