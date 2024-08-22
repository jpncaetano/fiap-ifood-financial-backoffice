document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Método de verificação selecionado: ' + this.textContent);
    });
});
