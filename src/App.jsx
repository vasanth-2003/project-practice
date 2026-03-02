import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Analytics from './components/Analytics'
import Customer from './components/Customer'
import Settings  from './components/Settings'
import GiftCardSection from './components/GiftCardSection'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/giftcard" element = {<GiftCardSection/>}/>
        <Route path = "/analytic" element = {<Analytics/>}/>
        <Route path='/customer' element = {<Customer/>}/>
        <Route path='/settings' element = {<Settings/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
