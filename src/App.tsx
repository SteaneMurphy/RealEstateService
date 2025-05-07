import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import { infoCardExists, footerCollectionExists, listingDataExists } from './backend/FirebaseService.tsx';
import Home from './pages/Home.tsx';
import PropertyListing from './pages/PropertyListing.tsx';
import Listing from './pages/Listing.tsx';

/*
  Main application component. This component is where all other components and views are called from. The
  returned view is wrapped in the Router component which has hardcoded set routes. The Navbar component sits on top
  of the Routes as it is always visible, regardless of which page or view is being rendered.

  Each Route is given a specific url that is attatched to the main url, for example in development, that might be:
    - http://localhost:5173/{routeUrl} with 'routeUrl' being substituted by the specific path provided.

  For the specific path 'listing/:slug', the ':slug' variable is substituted by a dynamic varibale provided in
  subcomponents using the 'location' functionality of React Router.

  When a specific route is used, its associated 'element' is checked and the corresponding component is rendered.
  These components are structured as pages or views, each containing their own sub-components that make up the page
  and individual logic.
*/

function App() {
  
  /*
    This useEffect hook runs once on the App component mount. It essentially checks the Firestore database for the
    existence of three document categories:
      - infoCards
      - listings
      - footerCategories

    If any of the document categories is not found, the corresponding data is created via the supplied JSON files:
      - lisings.json
      - infoCards.json
      - footerCategories.json

    This functionality would normally be handled by the backend service, but for the sake of the assessment I have added
    this functionality into the client application for testing purposes. I acknowledge that including this code
    outside of a development environment could lead to security issues.
  */
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
