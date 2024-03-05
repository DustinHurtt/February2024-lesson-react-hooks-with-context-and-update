import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Timer from './components/Timer'
import TimerTwo  from './components/TimerTwo'
import TimerThree from './components/TimerThree'
import TimerFour from './components/TimerFour'
import IronbnbList from './pages/IronbnbList'
import Navbar from './components/Navbar'
import ListingDetail from './pages/ListingDetail'
import EditListing from './pages/EditListing'

function App() {

  // const [show, setShow] = useState(true)

  return (
    <div className="App">
    <Navbar />
      {/* <Timer /> */}
      {/* <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button> */}

      {/* {
        show && <IronbnbList />
      } */}

      <Routes>
        <Route path='/' element={<IronbnbList />} />
        <Route path='/:id' element={<ListingDetail />} />
        <Route path='/edit/:id' element={<EditListing />} />
      </Routes>

    </div>
  )
}

export default App
