// Seleciona os elementos relevantes
const qrOption = document.getElementById('qr-option');
const qrCodeSection = document.getElementById('qr-code-section');
const verificationOptions = document.getElementById('verification-options');
const faceRecognitionOption = document.getElementById('face-recognition-option');
const faceRecognitionSection = document.getElementById('face-recognition-section');

// Função para abrir o modal
function openModal() {
    var modal = new bootstrap.Modal(document.getElementById('customModal'));
    modal.show();
}

// Adiciona um evento de clique para simular o escaneamento do QR Code
qrOption.addEventListener('click', function() {
    qrCodeSection.style.display = 'block';  // Mostra a seção do código QR
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo de escaneamento do QR Code
    setTimeout(function() {
        openModal();  // Exibe o modal ao invés de alert()
    }, 3000);  // Espera 3 segundos antes de exibir o modal
});

// Adiciona um evento de clique para simular o reconhecimento facial
faceRecognitionOption.addEventListener('click', function() {
    faceRecognitionSection.style.display = 'block';  // Mostra a seção de reconhecimento facial
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo de reconhecimento facial
    setTimeout(function() {
        openModal();  // Exibe o modal ao invés de alert()
    }, 3000);  // Espera 3 segundos antes de exibir o modal
});

// Redirecionamento ao clicar no botão "Continuar"
document.getElementById('continueButton').addEventListener('click', function() {
    window.location.href = '/assets/pages/visaoGeral.html';  // Redireciona para a página Visão Geral
});
