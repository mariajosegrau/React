import Pelicula from "./componentes/Pelicula.jsx";
import peliculaData from "./componentes/pelicula.json";
import './App.css';

const App = () => {
  return (
    <Pelicula clasname="contenedor-pelicula" pelicula={peliculaData.pelicula}>
      {peliculaData.pelicula.resumen}
    </Pelicula>
  );
};

export default App;
