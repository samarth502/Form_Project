import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './Components/RegistrationForm'
import Addreses from './Components/AddressDetails'
import Education from './Components/EducationDetails'
import FileUpload from './Components/FileUploadSection'
import Hobbies from './Components/Hobbies'
import Table from './Components/TableSection'

function App() {

  return(
    <>
    <RegistrationForm/>
    <Addreses/>
    <Education/>
    <Hobbies></Hobbies>
    <FileUpload/>
    <Table/>
    
    </>

  )
}

export default App
