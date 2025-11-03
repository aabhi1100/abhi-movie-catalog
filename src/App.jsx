import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes,Route} from "react-router-dom";
import NavBar from './components/NavBar';
import { MovieProvier } from './contexts/MovieContext';


function App() {
  const movieNumber=1;

  return (
    <>
    <MovieProvier>
    <NavBar/>
   <main className="main-content">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/fav" element={<Favorites/>}/>
    </Routes>
   </main>
   </MovieProvier>
   
    </>
  )
}

export default App
