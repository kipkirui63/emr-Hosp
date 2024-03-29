import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import MyComponent from './components/MyComponent';
import "./App.css";
import DoctorDashboard from './components/DoctorDashboard';
import NurseDashboard from './components/NurseDashboard';

function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="" element={<Login/>} />
          {/* <Route path="/MyComponent" element={<MyComponent/>} /> */}
          <Route path="/DoctorDashboard" element={<DoctorDashboard/>}/>
          <Route path="/NurseDashboard" element={<NurseDashboard/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;


