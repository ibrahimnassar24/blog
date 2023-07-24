import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Hello every body
        <i className='material-icons'>send</i>
      </h1>
    </div>
  )
}

export default App
