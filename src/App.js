import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Home';
import Footer from './components/Footer/Footer';
import SearchPage from './components/SearchPage/SearchPage';
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          {/* No 404 handling route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
