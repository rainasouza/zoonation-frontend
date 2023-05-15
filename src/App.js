import './App.css';
import AdoptionForm from './components/AdoptionForm/AdoptionForm';
import AdoptionPage from './components/AdoptionPage/AdoptionPage';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="toadopt" element={<AdoptionPage/>} />
            <Route path="adoptions" element={<AdoptionForm/>} />
            <Route path="home" element={<Home/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="login" element={<Login/>} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
