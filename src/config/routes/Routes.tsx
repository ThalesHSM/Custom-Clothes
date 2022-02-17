import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeScreen from '@HomeScreen/HomeScreen';
import ClotheScreen from '../../screens/ClotheScreen/ClotheScreen';

function routes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Product/:id" element={<ClotheScreen />} />
      </Routes>
    </Router>
  );
}

export default routes;
