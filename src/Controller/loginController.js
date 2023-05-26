import axios from 'axios'
const uri="http://34.204.6.112:5000/";
export async function validarLogin(username,password){    
    try{
        const bool= await axios.get(`${uri}user/${username}`).then(res=>
            res.data[0].contraseña
        );
        if(bool===password){
            window.location.href=`http://34.204.6.112:3000/create`
        }else{
            alert("Contraseña incorrecta");
        }
    }catch(e){
        alert("Usuario no encontrado")
    };
}
