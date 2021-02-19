const API_URL = `${process.env.REACT_APP_API_URL}/tipoMantenimiento`;

const ListarTipoMantenimiento = async () => {
    const config = {
        method: 'GET'
    }

    const responseApi = await fetch(API_URL, config);
    const tipoMantenimiento = await responseApi.json();

    return tipoMantenimiento;
}


module.exports = {
    ListarTipoMantenimiento
}