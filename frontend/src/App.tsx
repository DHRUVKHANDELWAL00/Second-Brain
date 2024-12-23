// import { useState } from 'react'
import './App.css'
import Button from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
      <div className="flex flex-row justify-between gap-4">
        <Button startIcon={<PlusIcon size="lg"/>} variant='primary' text='Add Content' size="md"/>
      <Button startIcon={<ShareIcon size="lg"/>} variant='secondary' text='Share Brain' size="md"/>
      </div>
    </>
  )
}

export default App
