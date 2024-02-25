import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;


