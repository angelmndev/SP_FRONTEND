const API_URL = `${process.env.REACT_APP_API_URL}/sistemas`;

const ListarSistemas = async () => {
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(API_URL, config);
    const sistemas = await responseApi.json();

    return sistemas;
}


module.exports = {
    ListarSistemas
}