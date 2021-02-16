const API_URL = `${process.env.REACT_APP_API_URL}/login`;

export const showLogin = async(usuUsuario,usuPassword)=>{
    
    console.log(usuUsuario,usuPassword);
    const config = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({usuUsuario:usuUsuario,usuPassword:usuPassword})
    }

    const responseApi = await fetch(API_URL,config);
    const response = await responseApi.json();
    return response;
}