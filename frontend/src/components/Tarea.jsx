import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"
import useAdmin from "../hooks/useAdmin"

const Tarea = ({tarea}) => {

  const {handleModalEditarTarea, handleModalEliminarTarea, completarTarea} = useProyectos()
  const admin = useAdmin()

  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id} = tarea
  console.log(tarea)
  return (
    <div className="border-b p-5 flex justify-between items-center">
     <div>
         <p className="text-xl">{nombre}</p>
         <p className="text-sm  text-gray-500 uppercase">{descripcion}</p>
         <p className="text-xl">{formatearFecha(fechaEntrega)}</p>
         <p className="text-gray-600">Prioridad: {prioridad}</p>
         { estado && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tarea.nombre}</p>}
     </div>
     <div className="flex gap-4">
     {admin && (
      <button className="bg-indigo-400 text-sm rounded-lg font-bold px-4 py-3"
      onClick={()=> handleModalEditarTarea(tarea)}>
      Editar </button>
        )}
       <button
            className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
            onClick={() => completarTarea(_id)}>{estado ? 'Completa' : 'Incompleta'}</button>
      {admin && ( 
      <button className="bg-red-500 text-sm rounded-lg font-bold px-4 py-3"
      onClick={()=> handleModalEliminarTarea(tarea)}>
      Eliminar </button>
      )} 
     </div>
    </div>
  )
}

export default Tarea