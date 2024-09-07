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

    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
            datasets: [
                { label: 'Total de Vendas', data: [1200, 1500, 900, 1800, 1300, 1600, 2000], borderColor: 'green', borderWidth: 2, fill: false, hidden: false},
                { label: 'Total de Pedidos', data: [30, 45, 25, 60, 40, 50, 70], borderColor: 'blue', borderWidth: 2, fill: false, hidden: true },
                { label: 'Despesas Operacionais', data: [500, 600, 700, 800, 900, 400, 300], borderColor: 'red', borderWidth: 2, fill: false, hidden: true },
                { label: 'Lucro Bruto', data: [400, 500, 600, 700, 800, 900, 1000], borderColor: 'purple', borderWidth: 2, fill: false, hidden: true },
                { label: 'Cancelamentos', data: [10, 15, 20, 5, 10, 15, 20], borderColor: 'orange', borderWidth: 2, fill: false, hidden: true },
                { label: 'Receita por Pedidos', data: [500, 600, 700, 800, 900, 400, 300], borderColor: 'yellow', borderWidth: 2, fill: false, hidden: true },
                { label: 'Lucro Líquido', data: [400, 500, 600, 700, 800, 900, 1000], borderColor: 'cyan', borderWidth: 2, fill: false, hidden: true },
                { label: 'Pagamentos Recebidos', data: [700, 800, 900, 1000, 1100, 1200, 1300], borderColor: 'brown', borderWidth: 2, fill: false, hidden: true },
                { label: 'Pagamentos Pendentes', data: [100, 200, 300, 400, 500, 600, 700], borderColor: 'pink', borderWidth: 2, fill: false, hidden: true },
                { label: 'Crescimento de Vendas', data: [3, 4, 5, 6, 7, 8, 9], borderColor: 'gray', borderWidth: 2, fill: false, hidden: true },
                { label: 'Ticket Médio', data: [50, 60, 70, 80, 90, 100, 110], borderColor: 'black', borderWidth: 2, fill: false, hidden: true },
                { label: 'Reembolsos', data: [5, 10, 15, 20, 25, 30, 35], borderColor: 'lime', borderWidth: 2, fill: false, hidden: true }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    onClick: null,
                }
            }
        }
    });

    // Função para verificar se há pelo menos um checkbox selecionado
    function checkAtLeastOne() {
        const checkboxes = document.querySelectorAll('.metric-checkbox');
        const checked = Array.from(checkboxes).some(cb => cb.checked);
        if (!checked) {
            alert('Pelo menos 1 métrica deve ser selecionada');
            return false;
        }
        return true;
    }

    // Conectando os checkbox aos datasets e adicionando a verificação
    document.getElementById('total-vendas').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[0].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });
    
    document.getElementById('total-pedidos').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[1].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });
    
    document.getElementById('despesas-operacionais').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[2].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('lucro-bruto').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[3].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('cancelamentos').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[4].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('receita-por-pedidos').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[5].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('lucro-liquido').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[6].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('pagamentos-recebidos').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[7].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('pagamentos-pendentes').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[8].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('crescimento-vendas').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[9].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('ticket-medio').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[10].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });

    document.getElementById('reembolsos').addEventListener('change', function() {
        if (checkAtLeastOne() || this.checked) {
            performanceChart.data.datasets[11].hidden = !this.checked;
            performanceChart.update();
        } else {
            this.checked = true;
        }
    });
}
