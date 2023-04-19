import './App.css';
import AdoptionPage from './components/AdoptionPage/AdoptionPage';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="adopt" element={<AdoptionPage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
