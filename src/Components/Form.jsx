import {useState} from "react";
import Message from './utils/Message'

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: ""
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (user.nombre.length > 5 && emailRegex.test(user.email) && user.nombre.includes(" ")) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }

    console.log(`Gracias, ${user.nombre}, te contactaremos cuanto antes vía mail a tu dirección ${user.email}`)
  }

  return (
    <div>
      {show ? ( 
        <Message nombre={user.nombre} email={user.email} />
      ) : (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre Completo" onChange={({target}) => setUser({...user, nombre: target.value})} />
        <input type="text" placeholder="E-mail" onChange={({target}) => setUser({...user, email: target.value})} />
        <button>Enviar</button>

        {error ? (
          <>
            <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>
          </>
        ) : null}

        </form>
      )}
    </div>
  )
}

export default Form
