const API_URL = `${process.env.REACT_APP_API_URL}/controlHoras`;

const AgregarControlHoras = async(data,idUsuario) => {
    
    const { idMaquinaFK, chCantidadHoras} = data;

    const controlHoras = [];
    controlHoras.push({ idMaquinaFK: idMaquinaFK, chCantidadHoras: chCantidadHoras, idUsuarioFK:idUsuario});

    console.log("COntrol horas",controlHoras);

    console.log("idUsuario", idUsuario)
    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(controlHoras)
    };


    const responseApi = await fetch(`${API_URL}/agregar`,config);
    const response = await  responseApi.json();

    return response;
}


const ListarControlHoras = async() => {
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(`${API_URL}/all`,config);
    const controlHoras = await responseApi.json();

    return controlHoras;
}


module.exports = {
    AgregarControlHoras,
    ListarControlHoras
}