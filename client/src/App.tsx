import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './componenet/signup/signup';
import Login from './componenet/login/login';
import Verify from './componenet/verify/verify';
import EmailVerify from './componenet/forgotpassword/emailVerify';
import ResetPassword from './componenet/forgotpassword/resetPassword';
import Home from './componenet/home/home';



function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/email/verify' element={<EmailVerify />} />
        <Route path='/reset/password' element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        {/* Move PrivateComponent route outside the Route with children */}
        <Route path="/verify" element={<Verify />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App;
