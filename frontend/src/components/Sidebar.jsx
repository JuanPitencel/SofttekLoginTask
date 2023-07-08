import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Sidebar = () => {

  const { auth } = useAuth()

  return (
    <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-slate-600' >
        <p className='text-xl uppercase font-bold text-white'>Hola: {auth.nombre}</p>

        <Link
            to="crear-proyecto"
            className='bg-slate-800 w-full p-3 uppercase font-raleway font-arial text-white block mt-5 text-center rounded-lg hover:bg-slate-400 transition-colors'
        >Nuevo Proyecto</Link>
    </aside>
  )
}

export default Sidebar