
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Navbar';
import About from './components/About';

import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      
      <header>
      <Header/>
      </header>
     <main className="main">
      <Routes>
        <Route path='/About' element={<About/>}/>
       
        <Route path='/' element={<Posts/>}/>
      </Routes>
     </main>
    </div>
  );
}

export default App;
