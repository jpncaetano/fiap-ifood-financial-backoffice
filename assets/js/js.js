// Seleciona os elementos relevantes
const qrOption = document.getElementById('qr-option');
const qrCodeSection = document.getElementById('qr-code-section');
const verificationOptions = document.getElementById('verification-options');
const backButton = document.getElementById('back-button');
const faceRecognitionOption = document.getElementById('face-recognition-option');
const faceRecognitionSection = document.getElementById('face-recognition-section');

// Adiciona um evento de clique para simular o escaneamento do QR Code
qrOption.addEventListener('click', function() {
    qrCodeSection.style.display = 'block';  // Mostra a seção do código QR
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo de escaneamento do QR Code
    setTimeout(function() {
        alert('Escaneamento concluído!');
        window.location.href = '/assets/pages/visaoGeral.html';  // Redireciona para a página Visão Geral
    }, 3000);  // Espera 3 segundos antes de redirecionar
});

// Adiciona um evento de clique para voltar para a tela anterior
backButton.addEventListener('click', function() {
    qrCodeSection.style.display = 'none';  // Esconde a seção do código QR
    verificationOptions.style.display = 'block';  // Mostra as opções de verificação novamente
});

// Adiciona um evento de clique para simular o reconhecimento facial
faceRecognitionOption.addEventListener('click', function() {
    faceRecognitionSection.style.display = 'block';  // Mostra a seção de reconhecimento facial
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação

    // Simula o processo de reconhecimento facial
    setTimeout(function() {
        alert('Reconhecimento Facial bem-sucedido!');
        window.location.href = '/assets/pages/visaoGeral.html';  // Redireciona para a página Visão Geral
    }, 3000);  // Espera 3 segundos antes de redirecionar
});
