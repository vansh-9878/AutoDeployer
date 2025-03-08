import { useState } from 'react'

import HomePage from './components/page'
import { NewProjectPage } from "./components/NewProject/NewProjectPage.jsx";


function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <HomePage />
        <NewProjectPage />
      </div>
    </>
  )
}

export default App
