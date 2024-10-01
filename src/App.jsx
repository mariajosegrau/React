import './App.css';
import Contenedor from "./ejercicio1/Contenedor.jsx";
import Interprete from './ejercicio1/Interprete.jsx';

function App() {
  return (
    <>
      <Contenedor>
        <Interprete nombre="feo" foto="enlace">
           Esta es la biografia del feo
        </Interprete>
        <Interprete nombre="guapo" foto="enlacedeGuapo">
           Esta es la biografia del Guapo
        </Interprete>
      </Contenedor>
    </>
  )
};

export default App;
