// Mostrar el calendario al presionar el botón de selección de fecha
document.getElementById('calendarioBoton').addEventListener('click', function() {
    document.getElementById('fechaNacimiento').style.display = 'inline';  // Mostrar el campo de fecha
});

// Manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío del formulario para que no se recargue la página

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const numero = document.getElementById('numero').value;

    // Saludo con nombre
    let mensaje = `¡Hola, ${nombre}!<br>`;  // Agregar salto de línea después del saludo


    //Numero de telefono
    let mensajeNumero = numero ? `¡Tu numero de telefono es: ${numero}<br>` : ""; // Salto de línea después del mensaje de edad
    
    //Fecha de nacimiento
    let mensajeNacimiento = fechaNacimiento ? `Naciste el ${fechaNacimiento}.<br>` : "No seleccionaste una fecha de nacimiento.<br>";

    // Validar el email y obtener el tipo de dominio
    let mensajeEmail = `¡Tu email es de tipo ${valEmail(email)}!<br>`;  // Salto de línea al final del mensaje de email

    // Función para validar el email
    function valEmail(email) {
        if (!email || !email.includes('@')) {
            return 'inválido';
        }
        const dominio = email.split('@')[1];
        let validateEmail = '';  // Declarar la variable antes de usarla
        switch(dominio) {
            case "gmail.com":
                validateEmail = "Gmail";
                break;
            case "hotmail.com":
                validateEmail = "Hotmail";
                break;
            case "outlook.com":
                validateEmail = "Outlook";
                break;
            case "yahoo.com":
                validateEmail = "Yahoo";
                break;
            default:
                validateEmail = "Otro";
                break;
        }
        return validateEmail;
    }

    // Mostrar el mensaje en la página (con saltos de línea)
    document.getElementById('mensaje').innerHTML = mensaje + mensajeEmail + mensajeNacimiento + mensajeNumero;

});


