import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MovieDel from './components/MovieDel';
import Search from './components/Search';

function App() {
  return (
    

    <BrowserRouter>
    <Routes>

      <Route path='' element={<AddMovie/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='delete' element={<MovieDel/>}/>
      


     
    </Routes>
    
    </BrowserRouter>


  );
}

export default App;
