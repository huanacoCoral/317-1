// Carga el contenido de otro archivo HTML
function incluirHTML() {
    fetch('tablasD.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el contenido:', error);
        });
}

// Llama a la función para cargar el contenido cuando se cargue el documento
document.addEventListener('DOMContentLoaded', function() {
    incluirHTML();
});