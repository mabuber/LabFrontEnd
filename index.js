const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones={
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^(?=.*[A-Z])[a-zA-Z\d]{8,}$/
}

const grupos={
    grupo_nombre: false,
    grupo_mail:false,
    grupo_clave: false,
}

const validarFormulario=(n)=>{
    switch(n.target.name){
        case "nombre":
            if(expresiones.nombre.test(n.target.value)){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_correcto');
                grupo_nombre=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_nombre=false;
            }else{
                document.getElementById('grupo_nombre').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_nombre').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_nombre .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_nombre .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_nombre=false;
            }
        break;

        
        case "email":
            if(expresiones.email.test(n.target.value)){
                document.getElementById('grupo_email').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_email .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_email').classList.add('formulario_grupo_correcto');
                grupo_email=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_email').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_email').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_email=false;
            }else{
                document.getElementById('grupo_email').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_email').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_email .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_email .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_email=false;
            }
        break;


        case "clave":
            if(expresiones.clave.test(n.target.value)){
                document.getElementById('grupo_clave').classList.remove('formulario_grupo_incorrecto');
                document.querySelector('#grupo_clave .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.querySelector('#grupo_clave .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.getElementById('grupo_clave').classList.add('formulario_grupo_correcto');
                grupo_clave=true;
            }else if(n.target.value !=""){
                document.getElementById('grupo_clave').classList.remove('formulario_grupo_correcto');
                document.querySelector('#grupo_clave .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
                document.getElementById('grupo_clave').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_clave .formulario_input_error').classList.add('formulario_input_error_activo');
                grupo_clave=false;
            }else{
                document.getElementById('grupo_clave').classList.remove('formulario_grupo_correcto');
                document.getElementById('grupo_clave').classList.add('formulario_grupo_incorrecto');
                document.querySelector('#grupo_clave .formulario_input_error').classList.remove('formulario_input_error_activo');
                document.querySelector('#grupo_clave .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
                grupo_clave=false;
            }
            validarClave();
        break;

        case "confirmarClave":
            validarClave();
        break;
    }
}

const validarClave=()=>{
    const inputClave=document.getElementById('clave');
    const inputConfClave=document.getElementById('confirmarClave');

    if(inputConfClave.value==""){
        document.getElementById('grupo_confirmarClave').classList.remove('formulario_grupo_correcto');
        document.getElementById('grupo_confirmarClave').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_confirmarClave .formulario_input_error').classList.remove('formulario_input_error_activo');
        document.querySelector('#grupo_confirmarClave .formulario_input_vacio').classList.add('formulario_input_vacio_activo');
        grupo_confirmarClave=false;
    }else if(inputClave.value !== inputConfClave.value){
        document.getElementById('grupo_confirmarClave').classList.remove('formulario_grupo_correcto');
        document.getElementById('grupo_confirmarClave').classList.add('formulario_grupo_incorrecto');
        document.querySelector('#grupo_confirmarClave .formulario_input_vacio').classList.remove('formulario_input_vacio_activo');
        document.querySelector('#grupo_confirmarClave .formulario_input_error').classList.add('formulario_input_error_activo');
        grupo_confirmarClave=false;
    }else{
        document.getElementById('grupo_confirmarClave').classList.remove('formulario_grupo_incorrecto');
        document.getElementById('grupo_confirmarClave').classList.add('formulario_grupo_correcto');
        document.querySelector('#grupo_confirmarClave .formulario_input_error').classList.remove('formulario_input_error_activo');
        grupo_confirmarClave=true;
    }
}


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(grupo_nombre && grupo_email && grupo_clave == true){
        formulario.reset();

        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');
        document.querySelectorAll('.formulario_grupo_correcto').forEach((pic)=>{
            pic.classList.remove('formulario_grupo_correcto');
        })
    }
});
