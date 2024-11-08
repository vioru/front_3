import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import MessageHome from './components/MessageHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <MessageHome/>
    <Form/>
 

    </div>
  )
}

export default App


// La temática del formulario puede ser cualquiera de nuestra preferencia. Podemos solicitar información sobre música,
//  animales, libros, autos, personajes o lo que deseemos.
// El formulario deberá contener, al menos, dos inputs de texto y un botón de tipo submit. Si lo deseamos, 
// podemos agregar más inputs para hacer más completo nuestro formulario, pero esto es opcional.
// Al hacer clic en el botón de Enviar, debemos realizar las siguientes validaciones:
// Para el caso del primer input, la longitud mínima del texto ingresado deberá ser de 3 caracteres y 
// no deberá contener espacios en blanco al comienzo.
// Para el segundo input, debemos validar que contenga al menos al menos 6 caracteres.
// En caso de que alguna de las validaciones sea incorrecta, debemos mostrar el siguiente mensaje de error:  
// “Por favor chequea que la información sea correcta”.
// En caso de que los valores ingresados superen las validaciones en forma exitosa, debemos renderizar 
// el componente llamado Card que contenga dicha información. 
// Podemos darle el estilo y/o forma que deseemos, en tanto y en cuanto contenga al menos los mismos 
// valores que se hayan ingresado en el formulario.
