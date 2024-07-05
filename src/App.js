import { useState } from 'react';

function App() {

  // Definimos un Hook de estado con un objeto con tres atributos que almacenarán los valores 
  // ingresados en el formulario:
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    estudios: false, 
  })

  //En las funciones cambioNombre, cambioEdad y cambioEstudio actualizamos el estado 
  // respectivo llamando a la función setDatos
  function cambioNombre(e) {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }))
  }

  function cambioApellido(e) {
    setDatos((valores) => ({
      ...valores,
      apellidos: e.target.value,
    }))
  }

  function cambioEdad(e) {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }))
  }

  function cambioEstudio(e) {
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios,
    }))
  }

  function procesar(e) {
    e.preventDefault();
    let estudios= datos.estudios ? 'con estudios' : 'sin estudios';
    alert('Dato cargado: \nNombre y Apellido:' + datos.nombre + ' ' + datos.apellidos + ' \nEdad: '  +datos.edad + ' \nEdad: '  +estudios );
  }

  // Bloque JSX  mostramos los datos actuales de la variable de estado asignando 
  // a la propiedad value el valor almacenado en cada atributo del objeto
  return (
    <div>
      <form onSubmit={procesar}>
        <p>Ingrese nombre:<input type="text" value={datos.nombre} onChange={cambioNombre} class="cuadrotexto" /></p>
        <p>Ingrese Apellido Paterno:<input type="text" value={datos.apellidos} onChange={cambioApellido} class="cuadrotexto" /></p>
        <p>Ingrese edad:<input type="number" value={datos.edad} onChange={cambioEdad}  class="cuadrotexto"/></p>
        <p>Estudios:<input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input value="Enviar" type="submit" class="button_e"/></p>
      </form>
      <hr />
      <h3>Datos Ingresados</h3>
      <p>Nombre:{datos.nombre}</p>
      <p>Apellido Paterno:{datos.apellidos}</p>
      <p>Edad:{datos.edad}</p>
      <p>Estudios:{datos.estudios ? 'con estudios' : 'sin estudios'}</p>
    </div>
  );
}

export default App;