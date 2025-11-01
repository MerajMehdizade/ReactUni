import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold underline p-10 text-green-800 bg-green-100 rounded-2xl">
          Start Project
        </h1>
      </div>
    </>  )
}

export default App
