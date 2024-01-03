import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Setting from './components/Setting';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <main>
   <Sidebar/>
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/setting' element={<Setting/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>

   </main>
   </>
  );
}

export default App;
