const API_URL = `${process.env.REACT_APP_API_URL}/ordenTrabajo`;


const AgregarOrdenTrabajoApi = async(data,idMaquinaFK,idUsuarioFK)=> {    
    console.log("idMaquina::",idMaquinaFK);
    console.log(data);

    const { otNumeroOrden, otFecha, idSedeFK, idAreaCultivoFK, otTiempoEstimado, otHoraInicio, otHoraFin, idUsuarioPersonalFK } = data;
    const dataOT = [];

    dataOT.push({
        otNumeroOrden: otNumeroOrden,
        otFecha: otFecha, 
        idSedeFK: idSedeFK, 
        idAreaCultivoFK: idAreaCultivoFK, 
        otTiempoEstimado: otTiempoEstimado, 
        otHoraInicio: otHoraInicio, 
        otHoraFin: otHoraFin, 
        idUsuarioSupervisorFK: idUsuarioFK, 
        idUsuarioPersonalFK: idUsuarioPersonalFK,
        idMaquinaFK: idMaquinaFK
    })

    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dataOT)
    };

    console.log("Orden de trabajo Api",dataOT)
    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();
    return response;
}

const ObtenerNumeroOrdenApi = async() => {
    console.log("controller");
    const config = {
        method: 'GET'
    };

    const responseApi = await fetch(`${API_URL}/numeroOrden`,config);
    const response  = await responseApi.json();
    console.log("API_Z",response)
    return response;
}


module.exports = {
    ObtenerNumeroOrdenApi,
    AgregarOrdenTrabajoApi
}
