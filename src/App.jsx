import { useState } from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';


import Login from './components/login/Login.jsx';
import Dashboard from './components/Dashboard';
import Maincontent from './components/Maincontent';

 
function App() {

const [token, setToken] = useState();
 
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1 className='tittle'>Welcome</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/maincontent' element={ <Maincontent /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
