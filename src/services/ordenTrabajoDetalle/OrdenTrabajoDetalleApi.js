const API_URL = `${process.env.REACT_APP_API_URL}/ordenTrabajoDetalle`;

const AgregarOrdenTrabajoDetalleApi = async(data) => {
    const config = {
        method: 'POST',        
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();

    return response;
}


const ListarOrdenTrabajoDetalleApi = async()=>{
    const config= {
        method: 'GET'
    };

    const responseApi = await fetch(API_URL,config);
    const ordenTrabajoDetalle = await responseApi.json();
    return ordenTrabajoDetalle;
}


module.exports = {
    ListarOrdenTrabajoDetalleApi,
    AgregarOrdenTrabajoDetalleApi
}