import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Analytics from './components/Analytics'
import Customer from './components/Customer'
import Settings  from './components/Settings'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/analytic" element = {<Analytics/>}/>
        <Route path='/customer' element = {<Customer/>}/>
        <Route path='/settings' element = {<Settings/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
