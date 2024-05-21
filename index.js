document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('textInput');
    const equalButton = document.getElementById('equalButton');

    // Añadimos el evento de keydown al documento
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            equalButton.click();
        }
    });
});