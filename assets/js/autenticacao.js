// Seleciona os elementos relevantes
const qrOption = document.getElementById('qr-option');
const qrCodeSection = document.getElementById('qr-code-section');
const verificationOptions = document.getElementById('verification-options');
const faceRecognitionOption = document.getElementById('face-recognition-option');
const faceRecognitionSection = document.getElementById('face-recognition-section');

// Função para abrir o modal e redirecionar após 1,5 segundos
function openModal() {
    var modal = new bootstrap.Modal(document.getElementById('customModal'));
    modal.show();

    // Redireciona para "Visão Geral" após 1,5 segundos
    setTimeout(function() {
        window.location.href = './assets/pages/visaoGeral.html';
    }, 1500);
}

// Simula o escaneamento do QR Code
qrOption.addEventListener('click', function() {
    qrCodeSection.style.display = 'block';  // Mostra a seção do código QR
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo e abre o modal após 3 segundos
    setTimeout(function() {
        openModal();
    }, 3000);
});

// Simula o reconhecimento facial
faceRecognitionOption.addEventListener('click', function() {
    faceRecognitionSection.style.display = 'block';  // Mostra a seção de reconhecimento facial
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo e abre o modal após 3 segundos
    setTimeout(function() {
        openModal();
    }, 3000);
});
