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
          <Route path ="/home" element = {<Content />} />
          <Route path = "/read" element = {<h1>Read Component</h1>} />
          <Route path = "/create" element = {<h1>Create Component</h1>} />
        </Routes>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
