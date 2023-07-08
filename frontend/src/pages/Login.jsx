import { Link, useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta.jsx"
import clienteAxios from '../config/clienteAxios.jsx'
import useAuth from "../hooks/useAuth.jsx"
import { useState } from "react"


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')) {
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        });
        return
    }



    try {
        const { data } = await clienteAxios.post('/usuarios/login', { email, password})
        setAlerta({})
        localStorage.setItem('token', data.token)
        setAuth(data)
        navigate('/proyectos')
    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })
    }

}

const { msg } = alerta


  
  return (
   < >
     
    <h1 className="text capitalize text-2xl text-center">Inicie Sesión para administrar proyecto</h1>

    {msg && <Alerta alerta={alerta } />}

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
         onChange={ e => setEmail(e.target.value)}
      />
      <label className="uppercase block text-xl mt-5" 
      htmlFor="email">Password</label>
       <input
         id= "password"
         type="password" 
         placeholder=" password "
         className="text-black w-full mt-3 border rounded-xl bg-gray-50 p-4"
         onChange={ e => setPassword(e.target.value)}

      />
      <input 
      type="submit"
      value= "Iniciar Sesión"
      className=" border rounded-xl mt-5 bg-blue-400  w-full py-3 text-white uppercase font-bold  hover:cursor-pointer hover:bg-blue-700  " 
    
      />
    </div>

    </form>
    <nav className="lg:flex lg: justify-between"> 
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/registrar">
     Registrar nueva cuenta
     </Link>
     <Link className="block text-center my-5  text-white uppercase text-sm  border rounded-md  bg-blue-950 p-2"
            to= "/olvide-password">
     olvide mi password
     </Link>
    </nav>
    
    </>
  )
}

export default Login