import React from 'react'

import './App.css'
import Email from './Email'
import Status from './Status'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar text-light mb-0 h1 display-4">
          Send Mail App
        </span>
        <Status />
      </nav>
      <Email />
    </div>
  )
}

export default App
