import React from 'react';
import styled from '@emotion/styled'

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
`

function App() {

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
    console.log(frase[0]); //Solo me interesa la frase que retorna en el array[0]  
  }


  return (
    <Contenedor>
      <Boton
        //onClick={ () => consultarAPI() } // espera que el usuario de click
        //onClick={consultarAPI()} // no espera que el usuario de click, se ejecuta la funcion JS sin esperar el click
        onClick={consultarAPI} // espera que el usuario de click
      >Breaking Bad</Boton>  
    </Contenedor>    
  );
}

export default App;
