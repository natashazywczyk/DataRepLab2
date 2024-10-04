import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  let x = 5;

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path = "/home" element = {<Content />} />
          <Route path = "/read" element = {<Footer />} />
          <Route path = "/create" element = {<Header />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
