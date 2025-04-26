import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Weather from './components/Weather';
import FeaturedTreks from './components/FeaturedTreks';
import Gamification from './components/Gamification';
import Footer from './components/Footer';
import ViewedForts from './pages/ViewedForts';
import UpcomingTreks from './pages/UpcomingTreks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Weather />
            <FeaturedTreks />
            <Gamification />
          </>
        } />
        <Route path="/viewed-forts" element={<ViewedForts />} />
        <Route path="/upcoming-treks" element={<UpcomingTreks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
