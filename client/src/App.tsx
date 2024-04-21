import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './componenet/signup/signup';
import Login from './componenet/login/login';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
