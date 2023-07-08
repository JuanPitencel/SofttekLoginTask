import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from './config/clienteAxios'
import Alerta from './components/Alerta'


const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams();
  const { token } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
          const url = `/usuarios/confirmar/${token}`
          const { data } = await clienteAxios(url)

          setAlerta({
            msg: data.msg,
            error: false
          })
          setCuentaConfirmada(true)

      } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
      }
    }
    confirmarCuenta();
  }, [])

  const { msg } = alerta

  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Confirmar cuenta para gestionar {''}
            <span className="text-slate-900">proyectos</span>
        </h1>

        <div className=' bg-blue-400 mx-20 rounded-lg'>
          {msg && <Alerta alerta={alerta} />}

          {cuentaConfirmada && (
            <Link 
                className='block text-center my-5 text-slate-900  uppercase text-2xl'
                to="/"
            >Inicia Sesión</Link>
          )}
        </div>
    </>
  )
}

export default ConfirmarCuenta