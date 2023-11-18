import { useNavigate, Form} from 'react-router-dom'
import Formulario from '../components/Formulario'

export function action(){
  console.log('submit al formuario...')
  return { ok: true };
}

function NuevoCliente() {

  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>llena todos los campos para registrar un nuevo cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}
        >
          Volver
        </button>

      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-15'>
        <Form 
          method='post'
          action='/clientes/nuevo'
        >
            <Formulario></Formulario>
          <input
          type='submit'
          className='mt-5 w-full bg-blue-600 p-3 uppercase font-bold text-white text-lg'
          value="Registrar Cliente"
          >
          </input>
        </Form>
        

      </div>
    </>
  )
}

export default NuevoCliente