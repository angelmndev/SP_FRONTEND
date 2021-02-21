const API_URL = `${process.env.REACT_APP_API_URL}/maquinas`;

const AgregarMaquinas = async(data)=>{
    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }

    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();

    return response;
}

const ListarMaquinas = async()=>{
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(API_URL,config);
    const maquinas = await responseApi.json();

    return maquinas;
}


module.exports = {
    ListarMaquinas,
    AgregarMaquinas
}