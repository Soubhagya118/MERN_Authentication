import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Verification from './pages/Verification';
import Header from './components/Header';
import Error from './pages/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
<Header/>

<Routes>

  <Route path='/' element={<Login/>}/>
  <Route path='/register' element={<Registration/>}/>
  <Route path='/user/verify' element={<Verification/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='*' element={<Error/>}/>

</Routes>
  </>
  );
}

export default App;
