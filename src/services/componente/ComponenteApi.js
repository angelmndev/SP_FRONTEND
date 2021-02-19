const API_URL = `${process.env.REACT_APP_API_URL}/componentes`;

const ListarComponentes = async () => {
    console.log("Api de componenete");
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(API_URL, config);
    const componentes = await responseApi.json();
    console.log(componentes);
    return componentes;
}


module.exports = {
    ListarComponentes
}