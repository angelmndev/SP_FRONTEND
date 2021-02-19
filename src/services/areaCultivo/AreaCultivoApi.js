const API_URL = `${process.env.REACT_APP_API_URL}/areaCultivo`;


const ListarAreaCultivoApi = async() => {
    const config = {
        method: 'GET'
    };
    
    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();

    return response;
}

module.exports = {
    ListarAreaCultivoApi
}

