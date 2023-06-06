import axios from 'axios'
const uri="https://ligobas.com";
export async function validarLogin(username,password){    
    try{
        const bool= await axios.get(`${uri}user/${username}`).then(res=>
            res.data[0].contraseña
        );
        if(bool===password){
            window.location.href=`https://ligobas.com/create`
        }else{
            alert("Contraseña incorrecta");
        }
    }catch(e){
        alert("Usuario no encontrado")
    };
}
