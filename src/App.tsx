import './App.css';
import Button from './components/Button.tsx';
import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';

function App() {

  return (
    <div className="mainBody">
      <Navbar />
      <Header />
      <h1>Expore all things property</h1>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default App;
