import './App.css';
import { AuthProvider } from './context/AuthContext';
import AdoptionForm from './components/AdoptionForm/AdoptionForm';
import AdoptionPage from './components/AdoptionPage/AdoptionPage';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuthetication } from './hooks/useAuthetication';
import AnimalImage from './components/AdoptionForm/AnimalImage';

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthetication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth])

  if (loadingUser){
    return <p>Carregando...</p>
  }

  
  return (
    <div className='App'>
      <AuthProvider value={{user}}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="toadopt" element={<AdoptionPage/>} />
            <Route path="adoptions" element={<AdoptionForm/>} />
            <Route path="home" element={<Home/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="login" element={<Login/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="about" element={<About/>} />
            <Route path="img-form/:animalId" element={<AnimalImage/>} />





          </Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
      
  );
}

export default App;
