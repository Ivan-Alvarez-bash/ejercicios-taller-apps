const boton = window.document.querySelector('#boton');
boton.addEventListener('click', validar);

function validar() {
 
    const email = window.document.querySelector("#email");
    const ingresoMail = email.value;

    const pass = window.document.querySelector("#pass");
    const ingresoPass = pass.value;
    
    console.log(ingresoMail);
    console.log(ingresoPass);

    if (ingresoMail === 'ejemplo@gmail.com' && ingresoPass === '123456') {
        console.log('Iniciando sesión...');
    } 
    
    else {
        console.log('E-mail y/o contraseña incorrectos');
    }
}

