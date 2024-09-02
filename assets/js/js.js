// Seleciona os elementos relevantes
const qrOption = document.getElementById('qr-option');
const qrCodeSection = document.getElementById('qr-code-section');
const verificationOptions = document.getElementById('verification-options');
const backButton = document.getElementById('back-button');

// Adiciona um evento de clique para mostrar o código QR
qrOption.addEventListener('click', function() {
    qrCodeSection.style.display = 'block';  // Mostra a seção do código QR
    verificationOptions.style.display = 'none';  // Esconde as opções de verificação
});

// Adiciona um evento de clique para voltar para a tela anterior
backButton.addEventListener('click', function() {
    qrCodeSection.style.display = 'none';  // Esconde a seção do código QR
    verificationOptions.style.display = 'block';  // Mostra as opções de verificação novamente
});
