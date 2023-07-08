import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

const OlvidePassword = () => {

  const [email, setEmeail] = useState('')
  const [alerta, setALerta] = useState({})

  const handleSubmit = async e => {

    e.preventDefault()

    if ( email === "" || email.length < 6) {
      setALerta({
        msg: "Email obligatorio",
        error: true
      })
      return
  }
  try {

    const {data} = await clienteAxios.post('/usuarios/olvidemicontrasena', {email})

    setALerta({
      msg: data.msg,
      error: false
    })

  } catch (error){
    setALerta({
      msg: error.response.data.msg,
      error: true
    })
  }
}

 const {msg} = alerta

  return (
    < >
  
    <h1 className="text capitalize text-2xl text-center">Recuperar acceso</h1>

    { msg && <Alerta alerta={alerta} />}

    <form 
    onSubmit={handleSubmit}>
    <div>
    
      <label className="uppercase block text-xl" 
      htmlFor="email">Email</label>
      <input
         id= "email"
         type="email" 
         placeholder=" email usuario"
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         value={email}
         onChange={e => setEmeail(e.target.value)}
      />
      <input 
      type="submit"
      value= "Recuperar Cuenta"
      className=" border rounded-xl mt-5 bg-blue-400  w-full py-3 text-white uppercase font-bold  hover:cursor-pointer hover:bg-blue-700  " 
      />
    </div>

    </form>
    <nav className="lg:flex lg: justify-between"> 
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/">
     Si ya creaste tu cuenta Inicia Sesión
     </Link>
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/registrar">
     Registrar nueva cuenta
     </Link>
    </nav>
    
    </>

  )
}

export default OlvidePassword