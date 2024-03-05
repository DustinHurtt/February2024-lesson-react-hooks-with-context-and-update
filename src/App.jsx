import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import TimerTwo  from './components/TimerTwo'
import TimerThree from './components/TimerThree'
import TimerFour from './components/TimerFour'
import IronbnbList from './components/IronbnbList'

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <Timer /> */}
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>

      {
        show && <IronbnbList />
      }
    </div>
  )
}

export default App
