import React from 'react'

function App() {
  return (
    <div className='h-screen w-full flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-4xl font-semibold'>Password Generator</h1>
      <div className='max-w-screen-xl mx-auto px-10 py-10 bg-violet-500 rounded-md'>
        <div className='flex border-[3px] border-black rounded-md'>
          <input className='outline-none' type="text" name="pass" id="" />
          <button className='px-5 py-2 bg-black text-white'>Copy</button>
        </div>
        <div className='mt-5 flex gap-5 font-semibold'>
          <input type="range" min={4} max={10} />
          <span>Length : 0</span>
        </div>
        <div className='flex gap-10 font-semibold items-center '>
          <div className='mt-5 flex gap-2'>
            <input type="checkbox" />
            <label htmlFor="Number">Number</label>
          </div>
          <div className='mt-5 flex gap-2'>
            <input type="checkbox" />
            <label htmlFor="Number">Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
