export async function obtenerClientes(){
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function obtenerCliente(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}

export async function agregarCliente(datos){
    console.log(datos)
    try{
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:
                {'Content-Type' : 'application/json'}
        })
        await respuesta.json()
    }catch (error){
        console.log(error)

    }
}
