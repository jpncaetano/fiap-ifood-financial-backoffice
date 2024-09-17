// Executa após o documento ser carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // Carrega o menu e cabeçalho
    fetch('../components/menuHeader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menuHeader').innerHTML = data;

            // Marca o menu correspondente à página atual
            const currentUrl = window.location.href;
            if (currentUrl.includes("visaoGeral.html")) {
                document.getElementById("menu-visaoGeral").classList.add("active");
            } else if (currentUrl.includes("analiseDesempenho.html")) {
                document.getElementById("menu-analiseDesempenho").classList.add("active");
            } else if (currentUrl.includes("transacoes.html")) {
                document.getElementById("menu-transacoes").classList.add("active");
            } else if (currentUrl.includes("nfe.html")) {
                document.getElementById("menu-nfe").classList.add("active");
            }
        })
        .catch(error => console.error('Erro ao carregar o menu:', error)); // Erro no carregamento
});
