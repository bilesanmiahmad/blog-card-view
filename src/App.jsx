import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import avatar from './assets/image-avatar.webp'
import bgImage from './assets/illustration-article.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto bg-white rounded-lg p-5 my-80 md:w-2/5 lg:w-1/3">
      <section className='bg-cover w-full h-32' style={{backgroundImage: `url(${bgImage})`}}>
      </section>
      <section >
        <div className='flex'>
          <button className='bg-yellow-300 p-2 mt-5 rounded-md font-semibold border-0'>Learning</button>
        </div>
        <div className=''>
          <p className='font-figtree text-left'>Published 21 Dec 2023</p>
        </div>
        <div className=''>
          <p className='font-figtree text-lg font-extrabold text-left'>HTML & CSS foundations</p>
        </div>
        <div className=''>
          <p className='font-figtree text-left text-sm font-thin text-gray-500'>These languages are the backbone of every website defining structure, content and presentation.</p>
        </div>
        <div className='flex items-center'>
          <img className='bg-cover h-10 w-10 mr-3 rounded-md border-0' style={{backgroundImage: `url(${avatar})`}}></img>
          <span className='font-figtree font-semibold inline-block align-middle'>Greg Hooper</span>
        </div>
      </section>
    </div>
  )
}

export default App
