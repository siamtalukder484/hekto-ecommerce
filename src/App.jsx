import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Hello</h1>
    <h3 className='text-3xl capitalize '>Hi World </h3>
   </>
  )
}

export default App
