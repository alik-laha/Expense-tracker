import './App.css'
import { Routes, Route } from 'react-router-dom';
import { PrivateComponent } from './componenet/private/private';
import { lazy } from 'react';

import AddEarning from './componenet/addEarning/addEarning';
import AddSpending from './componenet/addSpending/addSpending';
import AddInvestment from './componenet/addInvestment/addInvestment';
import AddGoal from './componenet/addGoal/AddGoal';
import CreateInvestIn from './componenet/createInvestIn/createInvestIn';
import CreateSpendOn from './componenet/createSpendon/createSpendon';
import CreateEarnigFrom from './componenet/createEarningForm/createEarningFrom';

const Navbar = lazy(() => import('./componenet/navbar/navbar'));
const Login = lazy(() => import('./componenet/login/login'));
const Signup = lazy(() => import('./componenet/signup/signup'));
const Home = lazy(() => import('./componenet/home/home'));
const EmailVerify = lazy(() => import('./componenet/forgotpassword/emailVerify'));
const ResetPassword = lazy(() => import('./componenet/forgotpassword/resetPassword'));
``

function App() {
  return (

    <Routes>

      <Route path='/' element={<PrivateComponent />}>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path='/add/earning' element={<><Navbar /><AddEarning /></>} />
        <Route path='/add/spending' element={<><Navbar /><AddSpending /></>} />
        <Route path='/add/investment' element={<><Navbar /><AddInvestment /></>} />
        <Route path='/add/goal' element={<><Navbar /><AddGoal /></>} />
        <Route path='/create/investin' element={<><Navbar /><CreateInvestIn /></>} />
        <Route path='/create/spendon' element={<><Navbar /><CreateSpendOn /></>} />
        <Route path='/create/earningfrom' element={<><Navbar /><CreateEarnigFrom /></>} />
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
