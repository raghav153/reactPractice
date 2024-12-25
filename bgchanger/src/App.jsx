import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 p-4' style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0 mb-10'>
          <div className='fixed flex flex-wrap justify-center gap-3 bg-white rounded-3xl px-3 py-2'>
            <button className='outline-none text-white bg-red-500 rounded-2xl p-2' onClick={()=>setColor("red")}>
              Red
            </button>

            <button className='outline-none text-white bg-green-500 rounded-2xl p-2' onClick={()=>setColor("green")}>
              Green
            </button>

            <button className='outline-none text-white text-base bg-blue-500 rounded-2xl p-2' onClick={()=>setColor("blue")}>
              Blue
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
