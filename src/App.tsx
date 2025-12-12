import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QRScanPage } from './components/QRScanPage';

function App() {
  return (
    <BrowserRouter>
      <QRScanPage />
    </BrowserRouter>
  );
}

export default App;