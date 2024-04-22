import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './componenet/signup/signup';
import Login from './componenet/login/login';
import PrivateComponent from './componenet/private/private';
import Verify from './componenet/verify/verify';
import EmailVerify from './componenet/forgotpassword/emailVerify';
import ResetPassword from './componenet/forgotpassword/resetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path='/email/verify' element={<EmailVerify />} />
        <Route path='/reset/password' element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        {/* Move PrivateComponent route outside the Route with children */}
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Alik</h1>} />
          <Route path="/verify" element={<Verify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
