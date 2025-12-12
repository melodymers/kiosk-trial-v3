import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Html5Qrcode } from 'html5-qrcode';

export function QRScanPage() {
  const navigate = useNavigate();
  const scannerRef = useRef<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passId, setPassId] = useState('');

  useEffect(() => {
    const startScanner = async () => {
      try {
        const scanner = new Html5Qrcode('qr-reader');
        scannerRef.current = scanner;
        await scanner.start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 300, height: 300 }
          },
          (decodedText) => {
            setShowSuccess(true);
            setTimeout(() => {
              navigate('/review');
            }, 1500);
          },
          () => {}
        );
        setIsScanning(true);
      } catch (err) {
        console.error('Error starting scanner:', err);
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [navigate, isScanning]);

  const handleSearch = () => {
    if (passId.trim()) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/review');
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const navigateBack = () => {
    navigate('/');
  };

  return (
<div className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col font-[Inter] overflow-hidden" 
     style={{ 
       backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.5)), url(/ValACE-bldg.png)`
     }}>     
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-md shadow-xl border-b border-gray-100 py-6 px-6"
      >
        <div className="container mx-auto flex items-center justify-between">
          
          <div className="w-20 h-12 flex-shrink-0">
            <img src="/valace-logo.png" alt="ValACE Logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </motion.header>

      <main className="flex-1 container mx-auto px-6 py-12 flex flex-col items-center justify-center gap-8">
        {/* Search Bar Section */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  value={passId}
                  onChange={(e) => setPassId(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your ValACE Pass ID..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200 text-lg placeholder-gray-500"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 whitespace-nowrap active:scale-95"
              >
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* QR Scanner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-2xl w-full border border-white/50"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl shadow-lg"
            >
              <svg className="w-20 h-20 text-white mx-auto drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
              </svg>
            </motion.div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              Scan Your QR Code
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Position your QR code in the scanner
            </p>
          </div>

          <div className="relative mx-auto max-w-xs">
            <div
              id="qr-reader"
              className="rounded-2xl overflow-hidden border-4 border-gradient shadow-2xl mx-auto w-70 h-70"
            />
            {isScanning && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
              >
                <div className="w-72 h-72 border-4 border-blue-400 rounded-2xl bg-blue-400/10" />
              </motion.div>
            )}
          </div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, translateY: 20, scale: 0.9 }}
              animate={{ opacity: 1, translateY: 0, scale: 1 }}
              className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-400 rounded-2xl text-center shadow-xl"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-green-800 font-bold text-xl mb-2">ValACE Pass Entered Successfully!</p>
              <p className="text-green-700 text-lg font-medium">Redirecting to review...</p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
