
import './App.css';
import Movie from './components/Movie';
import Header from './components/Header';
import movies from './movie.json' 

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="main">
     {
        movies.map((element,index) => {
          return(
          <Movie key = {index}
                 title = {element.Title}
                 year={element.Year} 
                 image = {element.Images}
                 runtime = {element.Runtime} 
                 genre = {element.Genre}
                 released = {element.Released}/>)
        })
     }
     
     </div>
    </div>
  );
}

export default App;
