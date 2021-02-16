const API_URL = `${process.env.REACT_APP_API_URL}/maquinas`;

const ListarMaquinas = async()=>{
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(API_URL,config);
    const maquinas = await responseApi.json();

    return maquinas;
}


module.exports = {
    ListarMaquinas
}