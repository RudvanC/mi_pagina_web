// Obtener el formulario
const form = document.getElementById('login-form');

// Evento para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación simple (solo para ejemplo)
    if (email && password) {
        alert(`Iniciando sesión con el correo: ${email}`);
    } else {
        alert('Por favor, complete todos los campos.');
    }
});