const API_URL = `${process.env.REACT_APP_API_URL}/ordenTrabajoDetalle`;

const AgregarOrdenTrabajoDetalleApi = async(data) => {
   
    const dataOTD = [];
    data.map((item)=>{
        dataOTD.push({            
            idSistemaFK: item.idSistemaFK, 
            idComponenteFK: item.idComponenteFK, 
            idTipoMantenimientoFK: item.idTipoMantenimientoFK, 
            otdTareas: item.mpTarea, 
            otdEjecutado: '', 
            otdObservacion: '', 
            idMantenimientoPreventivoFK: item.idMantenimientoPreventivo            
        })
    })

    const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataOTD)
    }
    
    console.log("Orden trabajo detalle");
    console.log(dataOTD);
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


const ListarOrdenTrabajoDetallePorNumero = async(numero) => {
    const config = {
        method: 'GET'
    };

    const responseApi = await fetch(`${API_URL}/filtrar/${numero}`,config)
    const response = await responseApi.json();
    return response;
}

module.exports = {
    ListarOrdenTrabajoDetalleApi,
    AgregarOrdenTrabajoDetalleApi,
    ListarOrdenTrabajoDetallePorNumero
}
