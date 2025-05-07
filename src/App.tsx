import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { infoCardExists, footerCollectionExists, listingDataExists } from './backend/FirebaseService.tsx';
import Home from './pages/Home.tsx';
import PropertyListing from './pages/PropertyListing.tsx';
import Listing from './pages/Listing.tsx';

function App() {
  //intialise database and check collections, if collections don't exist, create them using premade data
  useEffect(() => {
    console.log("Firebase has been initialised");

    infoCardExists();
    footerCollectionExists();
    listingDataExists();
  }, []);

  return (
    <Router>
      <div className="mainBody">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<PropertyListing />} />
          <Route path="/rent" element={<PropertyListing />} />
          <Route path="/sold" element={<PropertyListing />} />
          <Route path="/listing/:slug" element={<Listing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
