import Header from "../components/Header";
import InfoCardContainer from "../components/InfoCardContainer";
import Footer from "../components/Footer";

/*
  This is the Home page or view. This the landing page for the application.
  It contains the sub-components:
    - Header
    - InfoCardContainer
    - Footer
  
  The InfoCardContainer component takes a heading prop.

  The Home page contains the functionality or proposed functionality of:
    - Search component
    - Footer links
    - Information/News component

  The Footer and InfoCardContainer each fetch and display their information
  from the Firestore database.
*/

function Home() {
  
  return (
    <>
        <Header />
        <InfoCardContainer heading={"Explore all things property"} />
        <Footer />
    </>
  )
}

export default Home;
