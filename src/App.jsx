  
import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './components/Main'
import CatIndex from './components/Cats/CatIndex'
import DogIndex from './components/Dogs/DogIndex'

function App() {
  
  return (
    <div className="App">
      <h1>App.jsx</h1>
      <Main />
      <CatIndex />
      <hr />
      <DogIndex />
    </div>
  )
}

export default App