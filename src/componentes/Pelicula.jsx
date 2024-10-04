import Actor from "./Actor"; // Importa el componente
import "./Pelicula.css";
import '../App.css';

const Pelicula = ({ pelicula, children }) => {
  const { nombre, director, cartelera, actores } = pelicula;

  return (
    //jsx
    <>
    <div classname="contenedor-pelicula">
      <h1>{nombre}</h1>
      <h3>Director: {director}</h3>
      <img src={cartelera} alt={`${nombre} poster`} className="cartelera" />
        <div className="resumen">
            {children}
        </div>
      <h2>Elenco</h2>
      <div className="elenco">
        {actores.map((actor, index) => (
          <Actor key={index} {...actor} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Pelicula;