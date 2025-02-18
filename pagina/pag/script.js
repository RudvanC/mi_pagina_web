// Mostrar el calendario al hacer clic en el ícono
document.getElementById('iconoCalendario').addEventListener('click', function () {
    const fechaNacimiento = document.getElementById('fechaNacimiento');

    // Mostrar el input de fecha y abrir automáticamente el selector de fecha
    fechaNacimiento.style.display = 'inline';
    fechaNacimiento.showPicker(); // Esta función abre directamente el calendario en navegadores compatibles
});

// Manejar el envío del formulario
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar recarga de la página

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar que todos los campos estén llenos
    if (!nombre || !email || !numero || !fechaNacimiento || !password) {
        document.getElementById('mensaje').innerHTML = "⚠️ Todos los campos son obligatorios.";
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('fechaNacimiento', fechaNacimiento);
    localStorage.setItem('numero', numero);

    // Mensajes para mostrar en la página
    let mensaje = `¡Hola, ${nombre}!<br>`;
    let mensajePassword = `🔑 Tu contraseña es: ${password}.<br>`;
    let mensajeNumero = `📞 Tu número de teléfono es: ${numero}.<br>`;
    let mensajeNacimiento = `🎂 Naciste el ${fechaNacimiento}.<br>`;
    let mensajeEmail = `📧 ¡Tu email es de tipo ${valEmail(email)}!<br>`;

    // Función para validar el email
    function valEmail(email) {
        if (!email || !email.includes('@')) {
            return 'inválido';
        }
        const dominio = email.split('@')[1];
        let validateEmail = '';
        switch (dominio) {
            case "gmail.com": validateEmail = "Gmail"; break;
            case "hotmail.com": validateEmail = "Hotmail"; break;
            case "outlook.com": validateEmail = "Outlook"; break;
            case "yahoo.com": validateEmail = "Yahoo"; break;
            default: validateEmail = "Otro"; break;
        }
        return validateEmail;
    }

    // Mostrar el mensaje en la página
    document.getElementById('mensaje').innerHTML = mensaje + mensajeEmail + mensajeNacimiento + mensajeNumero + mensajePassword + "<br><br> SI TODO ESTÁ CORRECTO, <br> HAZ CLIC EN 'CONFIRMAR' PARA CONTINUAR.";
});

// Manejar el botón "CONFIRMAR" para redirigir después de verificar los datos
document.querySelector('.redireccion').addEventListener('click', function (event) {
    event.preventDefault(); // Evita la redirección inmediata

    // Obtener los valores actuales del formulario (no del localStorage)
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();

    // Verificar si todos los campos están completos
    if (email === "" || password === "" || nombre === "" || numero === "" || fechaNacimiento === "") {
        document.getElementById('mensaje').innerHTML = "⚠️ Debes completar todos los campos antes de continuar.";
        return; // Detener la ejecución si falta alguno de los campos
    }

    // Redirigir a la página de inicio de sesión
    window.location.href = "/mi_pagina_web/pagina/mail/mail.html";
});