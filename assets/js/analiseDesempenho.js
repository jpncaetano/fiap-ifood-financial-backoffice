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
    const selectedTab = document.querySelector(`.nav-link[href*="${tabId}.html"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Inicializando o gráfico de desempenho
window.onload = function() {
    var ctx = document.getElementById('performanceChart').getContext('2d');
    var performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
            datasets: [{
                label: 'Total de Vendas',
                data: [1200, 1500, 900, 1800, 1300, 1600, 2000],
                borderColor: 'green',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Total de Pedidos',
                data: [30, 45, 25, 60, 40, 50, 70],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};
