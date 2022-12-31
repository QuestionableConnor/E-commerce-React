import './App.js'
import Nav from './components/Nav.jsx';
import Landing from './components/Landing.jsx';
import Highlights from './components/Highlights.jsx';
import Featured from './components/Featured.jsx';
import Discounted from './components/Discounted.jsx';
import Explore from './components/Explore.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data.js'
import BookInfo from './pages/BookInfo.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books}/>} />
          <Route path="/books/:id" element={<BookInfo books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
