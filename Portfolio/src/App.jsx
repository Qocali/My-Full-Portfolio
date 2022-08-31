import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Resume from './components/Resume'
import './App.css'

function App() {
  const {experience,serExperience}=useState([]);
  const {skill,serskill}=useState([]);
  const {project,setproject}=useState([])

  return (
    <>
     <Header/>
     <Nav/>
     <Resume/>
    </>
  )
}

export default App
