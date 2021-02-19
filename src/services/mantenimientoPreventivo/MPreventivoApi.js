const API_URL = `${process.env.REACT_APP_API_URL}/mantenimiento`;

const AgregarMantPreventivo = async (mpData,idUsuarioFK) => {
        
    console.log("mantenimiwnto", mpData);
    const { idComponenteFK, idMaquinaFK, idSistemaFK, idTipoMantenimientoFK,mpFrecuenciaHoras,mpNivelRiesgo,mpRiesgoIdentificado, mpTarea} = mpData;
    const dataMantenimiento = [];
    dataMantenimiento.push({
        idComponenteFK: idComponenteFK,
        idMaquinaFK: idMaquinaFK,
        idSistemaFK: idSistemaFK,
        idTipoMantenimientoFK: idTipoMantenimientoFK,
        mpFrecuenciaHoras: mpFrecuenciaHoras,
        mpNivelRiesgo: mpNivelRiesgo, 
        mpRiesgoIdentificado: mpRiesgoIdentificado,
        mpTarea: mpTarea,
        idUsuarioFK: idUsuarioFK
    })

    console.log(dataMantenimiento);

    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dataMantenimiento)
    };

    const responseApi = await fetch(`${API_URL}/agregar`,config);
    const mantenimientoPreventivo = await responseApi.json();

    return mantenimientoPreventivo;
}

const ListarMantPreventivo = async() => {
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(`${API_URL}/all`,config);
    const mantPreventivo = await responseApi.json();
    return mantPreventivo;
}

const ListarMantPreventivoFiltro = async(data) => {
    const {idMaquinaFK, mpFecha, idTipoMantenimientoFK} = data[0];
    console.log("API")
    console.log(idMaquinaFK,mpFecha,idTipoMantenimientoFK)            
    const config = {
        method:'GET',                
    };

    const responseApi = await fetch(`${API_URL}/filter/${idMaquinaFK}/${mpFecha}/${idTipoMantenimientoFK}`,config);
    const mantPreventivo = await responseApi.json();
    return mantPreventivo;
}

module.exports = {
    ListarMantPreventivo,
    AgregarMantPreventivo,
    ListarMantPreventivoFiltro
}