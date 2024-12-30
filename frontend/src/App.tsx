// import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Button from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <div className="h-screen flex flex-row p-0 m-0">
      <div className="h-fit w-1/6 bg-white">
       <Sidebar/>
      </div>
      <div className="w-5/6 bg-slate-200 flex flex-row justify-end gap-4">
         <Button startIcon={<PlusIcon size="lg"/>} variant='primary' text='Add Content' size="md"/>
      <Button startIcon={<ShareIcon size="lg"/>} variant='secondary' text='Share Brain' size="md"/>
      </div>
    </div>
  )
}

export default App
