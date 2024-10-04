
import '../App.css';  // Ajustamos la ruta

const Actor = ({ nombre, fechaNacimiento, biografia, imagen }) => (
  <div className="actor">
    <img src={imagen} alt={nombre} />
    <div>
      <h4>{nombre}</h4>
      <p><strong>Fecha de nacimiento:</strong> {fechaNacimiento}</p>
      <p>{biografia}</p>
    </div>
  </div>
);

export default Actor;