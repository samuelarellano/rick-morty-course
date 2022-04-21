import React, { Fragment } from 'react'

export default function Characters(props) {
    const {characters, setCharacters} = props;
    const resetCharacters = () =>{
        setCharacters(null);
    }
  return (
    <div>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volver a la home </span>
        <div className='container-characters'>
          {characters.map((character, index) => (
              <div className='character-container' key={index}>
                  <div>
                      <img src={character.image} alt={character.name} />
                  </div>
                  <div>
                      <h3>{character.name}</h3>
                      <h6>{character.status === 'Alive' ? (
                          <Fragment>
                              <span className='alive' />Alive
                          </Fragment>
                      ) : (
                          <Fragment>
                              <span className='dead' />Dead
                          </Fragment>
                      )}</h6>
                      <p>
                          <span className='text-grey'>Episodios: </span>
                          <span>{character.episode.length}</span>
                      </p>
                      <p>
                      <span className='text-grey'>Especie: </span>
                          <span>{character.especies}</span>
                      </p>
                  </div>
              </div>
          ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver a la home</span>
    </div>
  )
}
