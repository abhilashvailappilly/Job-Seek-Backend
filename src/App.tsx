import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserRoute} from './Routes/UserRoute'; // Adjust import path as needed
import Notfound from './Pages/Notfound';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/*" element={<UserRoute />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
