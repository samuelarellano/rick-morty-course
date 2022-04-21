import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { Fragment, useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const rickMortyAPI = async () =>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Rick & Morty</h1>
       {characters ? (
       <Characters characters={characters} setCharacters={setCharacters} />
       ) : ( 
       <Fragment>
       <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
       <button onClick={rickMortyAPI} className="btn-search" >Buscar personajes</button>
       </Fragment>
       )}
       
       

      </header>
    </div>
  );
}

export default App;
