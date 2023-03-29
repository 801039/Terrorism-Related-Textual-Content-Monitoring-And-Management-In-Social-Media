import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import { ToastContainer } from 'react-toastify';

function Home() {

  const [darkToggle, setDarkToggle] = useState(false)

  return (
  <>

    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme={darkToggle ? 'dark' : 'light'}
    />

    <div className={`h-screen w-full flex items-center justify-center absolute grid-col bg-neutral-50 
    ${darkToggle && 'dark'}`} >

      <div className='app__body' class="bg-neople-50 dark:bg-neon-900 flex justify-between 
        items-start shadow-2xl h-5/6 w-5/6">

        <label class="toggleDarkBtn">
          <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
          <span class="slideBtnTg round"></span>
        </label>

        <h1 class="text-neople-700 dark:text-neon-200 text-xl pr-56 pt-1 items-center relative">
          Serandib
        </h1>

        <div class="pl-40">
        </div>

        <div class="text-neople-800 dark:text-neon-300 mt-2 text-lg 
        w-3/12 h-5/6 pt-1 top-20 pl-4 absolute" >
          <Sidebar />
        </div>

        <div class="bg-neon-50 dark:bg-neople-900 mt-2 text-lg w-7/12 
        h-3/4 overflow-y-auto top-20 pt-1 left-1/3 absolute">
          <Chat />
        </div>
      </div>
    </div>
  </>
  
  )
}
export default Home;