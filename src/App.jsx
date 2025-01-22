import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/grid" element={<FirstPage />} />
        <Route path="/home" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
