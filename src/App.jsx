import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Analytics from './components/Analytics'
import Customer from './components/Customer'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/analytic" element = {<Analytics/>}/>
        <Route path='/customer' element = {<Customer/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
