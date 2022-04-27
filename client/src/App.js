import background from '../img/background.jpg';
import logo from '../img/iu_logo.png';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import Registration from './components/Registration';
import Homepage from './components/Homepage';

import { render } from '@testing-library/react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Registration />} />
        {/* <Route path = "/homepage" element={<Homepage/>} /> */}
        <Route path="/homepage"  > {localStorage.getItem("accessToken") ? <Homepage /> : <Navigate to="/" />} </Route>
      </Routes>
    </div>
  );
}



export default App;