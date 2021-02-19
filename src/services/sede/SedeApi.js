const API_URL = `${process.env.REACT_APP_API_URL}/sede`;


const ListarSede = async() => {
    const config = {
        method: 'GET'
    }
    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();
    console.log(response);
    return response;
}

module.exports = {
    ListarSede
}