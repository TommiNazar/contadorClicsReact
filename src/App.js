
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  const multiplicarx2 = () => {
    setNumClics(numClics * 2)
  }


  return (
    <div className="App">
      
      <h1>CONTADOR DE CLICS</h1>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Multiplicar X2'
          esBotonDeClic={true}
          manejarClic={multiplicarx2} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
        
      </div>
      
    </div>
  );
}

export default App;
