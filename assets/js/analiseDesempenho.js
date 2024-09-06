// Reutilizando a estrutura básica de navegação das abas da Visão Geral

window.onload = function() {
    // Certifica-se de exibir o conteúdo da aba "Análise de Desempenho" no carregamento da página
    document.getElementById('analiseDesempenho').style.display = 'block';
};

function showMainTab(tabId) {
    // Esconde todas as abas principais
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostra a aba principal selecionada
    document.getElementById(tabId).style.display = 'block';

    // Remove a classe 'active' de todas as abas principais
    document.querySelectorAll('.nav-link').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' à aba principal selecionada
    event.target.classList.add('active');

    // Adiciona aqui a verificação da aba de Análise de Desempenho
    if (tabId === 'analiseDesempenho') {
        showDesempenhoTab('metricasSelecionadas'); // Pode ser que você tenha uma aba dentro da análise
    }
}

function showDesempenhoTab(tabId) {
    // Esconde todas as abas de desempenho
    document.querySelectorAll('.chart-placeholder').forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostra a aba de desempenho selecionada
    document.getElementById(tabId).style.display = 'block';

    // Remove a classe 'active' de todas as abas de desempenho
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' à aba de desempenho selecionada
    event.target.classList.add('active');
}
