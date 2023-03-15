import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css'

function App(){
  return(
    <div className='App'>
      <h1>Movies Good</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default App
