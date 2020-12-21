import React ,{useState} from 'react'
import {moviesData} from './Compents/SearchMovie/MoviesData'
import MoviesList from './Compents/MoviesList/Movies'
import './App.css';
import AddMovie from './Compents/AddMovies/Addmovies'
import SearchMovie from './Compents/SearchMovie/SearchMovie'
import Najma from './Compents/SearchMovie/Najma'


function App() {
  const [moviesList,setMovieslist] = useState(moviesData)
  const [searchByname, setSearchbyname] = useState("")
  const addmoviess = (newVal) => { 
    setMovieslist([...moviesList,newVal])
  }
  const [searchNajma , setNajma] = useState(1)
  return (
    <div className="App">
      <SearchMovie setSearchbyname={setSearchbyname}/>
      <Najma searchNajma={searchNajma}
      setNajma={setNajma}/>
      <div className="BackGround">
    <MoviesList moviesList={moviesList} searchByname={searchByname}
    searchNajma={searchNajma}/>
    <AddMovie addmoviess={addmoviess}/>
    </div>
   
    </div>
  );
}

export default App;
