import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FunctionComponent } from './FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
       <FunctionComponent state = {count} setState = {setCount}/>
      </div>
    </>
  )
}

export default App
