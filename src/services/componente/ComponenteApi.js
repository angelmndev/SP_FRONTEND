const API_URL = `${process.env.REACT_APP_API_URL}/componentes`;

const AgregarComponenteApi = async(value) => {
    console.log("componente",value);
    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(value)
    };

    const responseApi = await fetch(API_URL,config);
    const componente = await responseApi.json();

    return componente;
}

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
    ListarComponentes,
    AgregarComponenteApi
}