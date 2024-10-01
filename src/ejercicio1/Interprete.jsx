import "./Interprete.css";
const Interprete = (props) => {
    //javascript
    const {children, nombre, foto} = props;
    return(
        //jsx
        <>
            <div className="interprete-contenedor">
                <img alt="feo" src={foto}/>
                <h1>{nombre}</h1>
                <h3>{children}</h3>  
            </div>
            
        </>
       
    );
};

export default Interprete;