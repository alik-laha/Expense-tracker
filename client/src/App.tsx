import './App.css'
import { Routes, Route } from 'react-router-dom';
import Signup from './componenet/signup/signup';
import Login from './componenet/login/login';
import EmailVerify from './componenet/forgotpassword/emailVerify';
import ResetPassword from './componenet/forgotpassword/resetPassword';
import Home from './componenet/home/home';
import { PrivateComponent } from './componenet/private/private';

import Navbar from './componenet/navbar/navbar';


function App() {
  return (

    <Routes>

      <Route path='/' element={<PrivateComponent />}>
        <Route path="/" element={<><Navbar /><Home /></>} />
        {/* Move PrivateComponent route outside the Route with children */}
      </Route>

      <Route path="/signup" element={<Signup />} />

      <Route path='/email/verify' element={<EmailVerify />} />\

      <Route path='/reset/password' element={<ResetPassword />} />
      <Route path="/login" element={<Login />} />

    </Routes>

  )
}

export default App;
