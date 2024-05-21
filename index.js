document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('textInput');
    const equalButton = document.getElementById('equalButton');

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que se ejecute el último número
            equalButton.click();
        } 
    });
});