import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`

function App() {

  const [frase, guardarFrase] = useState({})

  //Carga una frase al inicio de la ejecucion automaticamente
  useEffect(() => {
    consultarAPI()
  }, []); // [] para que lo cargue la primera vez

/*  const consultarAPI = () => {
    // Ejemplo sin async y await  
    //console.log('Consultando la API...');    
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = api.then( respuesta => respuesta.json() )
    frase.then( resultado => console.log(resultado))
    }*/

  // async y await para que se detenga la ejecucion del codigo hasta que se resuelva api  
  const consultarAPI = async () => {
    //console.log('Consultando la API...');    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();

    //console.log(frase[0]); //Solo me interesa la frase que retorna en el array[0]  
    guardarFrase(frase[0]);

  }


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />

      <Boton
        //onClick={ () => consultarAPI() } // espera que el usuario de click
        //onClick={consultarAPI()} // no espera que el usuario de click, se ejecuta la funcion JS sin esperar el click
        onClick={consultarAPI} // espera que el usuario de click
      >
        Obtener Frase
      </Boton>  
    </Contenedor>    
  );
}

export default App;
