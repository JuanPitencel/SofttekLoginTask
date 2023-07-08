
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {
  const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')) {
           setAlerta({
               msg: 'Todos los campos son obligatorios',
               error: true
           })
           return
        }

        if(password !== repetirPassword ) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlerta({
                msg: ' Minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, password} )

            setAlerta({
                msg: data.msg,
                error: false
            })
            

            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

  return   (
   < >
  
    <h1 className="text capitalize text-2xl text-center">Registra tus datos para acceder</h1>
    { msg && <Alerta alerta={alerta} /> }

    <form onSubmit={handleSubmit} >
    <div>
    <label className="uppercase block text-xl" 
      htmlFor="nombre">Nombre y Apellido</label>
      <input
         id= "nombre"
         type="String" 
         placeholder="Nombre y Apellido"
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         value={nombre}
         onChange={e => setNombre(e.target.value)}
      />
      <label className="uppercase block text-xl" 
      htmlFor="email">Email</label>
      <input
         id= "email"
         type="email" 
         placeholder=" email usuario"
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         value={email}
         onChange={e => setEmail(e.target.value)}
      />
      <label className="uppercase block text-xl mt-5" 
      htmlFor="password">Password</label>
       <input
         id= "password"
         type="password" 
         placeholder=" password "
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         value={password}
         onChange={e => setPassword(e.target.value)}
      />
     
      <label className="uppercase block text-xl mt-5" 
      htmlFor="password2">Repetir password</label>
       <input
         id= "passworde"
         type="password" 
         placeholder="Repetir password "
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         value={repetirPassword}
         onChange={e => setRepetirPassword(e.target.value)}
      />
      <input 
      type="submit"
      value= "Crear Cuenta"
      className=" border rounded-xl mt-5 bg-blue-400  w-full py-3 text-white uppercase font-bold  hover:cursor-pointer hover:bg-blue-700  " 
    
      />
    </div>

    </form >
    <nav className="lg:flex lg: justify-between"> 
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/">
     Si ya creaste tu cuenta Inicia Sesión
     </Link>
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/olvide-password">
     OLvide mi password
     </Link>
    </nav>
    
    </>
  )
}

export default Registrar