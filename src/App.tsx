import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QRScanPage } from './components/QRScanPage';
import { ReviewInfoPage } from './components/ReviewInfoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRScanPage />} />
        <Route path="/review" element={<ReviewInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
