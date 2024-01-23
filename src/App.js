
// import './App.css';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {


  return (
    <div className="App">
      
      <Router>

      <Navbar/>

      <Routes>

        <Route path= "/Home" element={<Home/>}></Route>
        <Route path= "/MyWorks" element={<MyWorks/>}></Route>
        <Route path= "/Contact" element={<Contact/>}></Route>


      </Routes>
      </Router>
      </div>  

  );
}

export default App;
