
//funcionalidad para mostrar la contrasena
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        const loginMessage = document.getElementById('loginMessage');
        if (data === 'Usuario o contraseña incorrectos') {
            loginMessage.innerText = data;
            loginMessage.style.color = 'red';  // Aseguramos que el texto sea rojo
            loginMessage.style.display = 'block';  // Mostramos el mensaje de error
        } else {
            window.location.href = '/main.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
