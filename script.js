document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos.');
            event.preventDefault(); 
        }
    });
});
