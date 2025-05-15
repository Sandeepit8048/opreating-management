import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import WelcomeMessage from './component/welcomemessage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OptlnManagement from './component/OptInManagement';
import WelcomeForm from './component/welcomeform';
import Welmess from './component/Welmess';
import Documentupload from './component/Documentupload';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



// function Management() {
//   return <h2>Management Page</h2>;
// }

// function WelcomeMessage() {
//   return <h2>Welcome Message Page</h2>;
// }

function Document() {
  return <h2>Document Page</h2>;
}

function Video() {
  return <h2>Video Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<OptlnManagement/>} />
          <Route path="/welcome" element={<WelcomeMessage />} />
          <Route path="/welcomeform" element={<WelcomeForm />} />
          <Route path="/Welmess" element={<Welmess />} />
          <Route path="/Documentupload" element={<Documentupload />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
