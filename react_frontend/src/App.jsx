// import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import CreateStudent  from './components/CreateStudent'
import HomePage from './components/HomePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/createStudent" element={<CreateStudent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    
    // <div>
    //   <h3>Hello</h3>
    //   <CreateStudent />
    // </div>
  )
}

export default App
