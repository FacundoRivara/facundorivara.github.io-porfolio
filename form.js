const username = document.getElementById("username");
const correo = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviarFormulario = document.getElementById("enviarFormulario");


//funcion para validar username
function validarUsername(){
    let nombre = username.value;
    //evitar que usen espacio para el campo
    nombre = (nombre.trim());
    if(nombre.value===''){
        alert("Debe de llenar el campo");
        return false;
    }
    let expReg = /^[A-Z ]+$/i;
    if(nombre.length==36){
        alert("Solo 35 caracteres por favor");
        return false;
    }
    esValido = expReg.test(nombre);
    if(!esValido){
        alert("Caracteres invalidos en el Nombre");
        return false;
    }
    else{
        if(esValido){
            return true
        }
    }
}
//funcion para validar email
function validarEmail(){
    let email = correo.value;
    if(email==''){
        alert ("El correo NO es valido");
        return false;
    }
    let expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let esValido = expReg.test(email)
    if(!esValido){
        alert("Correo invalido");
        return false;
    }
    return true;
}

//funcion para validar asunto
function validarAsunto(){ 
    let texto = asunto.value;
    texto = (texto.trim());
    if(texto.value===''){
        alert("Debe de llenar el campo");
        return false;
    }
    let letraValida =  /^[A-Z ]+$/i;
    if(texto.length===36){
        alert("Solo se permiten 35 caracteres.");
        return false;
    }
    esValido = letraValida.test(texto);
    if(!esValido){
        alert("Caracteres invalidos en Asunto"); 
        return false;
    }
    return true;
}
//funcion para validar mensaje
function validarMensaje(){
    let nombre = mensaje.value;
    texto = (texto.trim());
    let letraValida = /^[A-Za-z0-9\s]+$/;
    if(texto.value===''){
        alert("Debe de llenar el campo");
        return false;
    }
    esValido = letraValida.test(texto);
    if(!esValido){
        alert("Caracteres invalidos en el Mensaje"); 
        return false;
    }
    return true;
}
btnEnviarFormulario.addEventListener("click",(e)=>{
   
    if(validarUsername()){
        if (validarEmail()){
            if(validarAsunto()){
                if(!validarMensaje()){
                    alert("Mensaje invalido")
                    e.preventDefault()
                }
            }
            else{
                alert("Asunto invalido!")
                e.preventDefault()
            }
        }
        else{
            alert("Email invalido!")
            e.preventDefault()
        }
    }
    else{
        alert("Nombre invalido!")
        e.preventDefault()
    
    }
    
})
