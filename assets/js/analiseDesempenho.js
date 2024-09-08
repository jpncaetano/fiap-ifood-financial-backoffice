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
                { label: 'Total de Vendas', data: [1200, 1500, 900, 1800, 1300, 1600, 2000], borderColor: 'green', borderWidth: 2, fill: false, hidden: false },
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
                    display: false // Ocultar as legendas automáticas
                }
            }
        }
    });

    // Função para verificar se há pelo menos um checkbox selecionado
    const maxCheckboxes = 6;

function checkAtLeastOne() {
    const checkboxes = document.querySelectorAll('.metric-checkbox');
    const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
    
    // Verificar se há pelo menos 1 checkbox marcado
    if (checkedCheckboxes.length === 0) {
        alert('Pelo menos 1 métrica deve ser selecionada');
        return false;
    }
    
    return true;
}

function checkMaxLimit() {
    const checkboxes = document.querySelectorAll('.metric-checkbox');
    const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
    
    // Verificar se o limite de 5 checkboxes foi atingido
    if (checkedCheckboxes.length >= maxCheckboxes) {
        alert('Você só pode selecionar até 5 métricas');
        return false;
    }
    
    return true;
}

document.querySelectorAll('.metric-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        
        // Se o checkbox está sendo marcado, verificar se o limite foi atingido
        if (isChecked && !checkMaxLimit()) {
            this.checked = false; // Desmarca o checkbox se o limite foi atingido
            return;
        }
        
        // Se o checkbox está sendo desmarcado, verificar se pelo menos 1 checkbox está selecionado
        if (!isChecked && !checkAtLeastOne()) {
            this.checked = true; // Reforçar que pelo menos 1 checkbox precisa estar marcado
            return;
        }
        
        // Atualizar o gráfico com base no checkbox
        updateChart(index, this);
    });
});

    // Função para atualizar a visibilidade dos datasets e das legendas
    function updateChart(datasetIndex, checkbox) {
        if (checkAtLeastOne() || checkbox.checked) {
            performanceChart.data.datasets[datasetIndex].hidden = !checkbox.checked;
            performanceChart.update();
            updateLegend();
        } else {
            checkbox.checked = true; // Se nenhum outro checkbox estiver selecionado, manter o atual como selecionado
        }
    }

    // Função para atualizar as legendas dinamicamente
    function updateLegend() {
        const legendContainer = document.getElementById('legendContainer');
        legendContainer.innerHTML = ''; // Limpar o container de legendas
    
        performanceChart.data.datasets.forEach((dataset, index) => {
            if (!dataset.hidden) {
                // Criar uma nova legenda apenas para datasets visíveis
                const legendItem = document.createElement('div');
                legendItem.innerHTML = `<span style="color:${dataset.borderColor};">
                <span style="background-color:${dataset.borderColor}; display: inline-block; width: 12px; height: 12px; border-radius: 20%; margin-right: 8px;"></span>
                ${dataset.label}
            </span>`;
                legendContainer.appendChild(legendItem);
            }
        });
    }

    // Criar o container de legendas dinâmicas
    const legendContainer = document.createElement('div');
    legendContainer.id = 'legendContainer';
    document.querySelector('.main-content').appendChild(legendContainer); // Adicionar após o gráfico

    // Associando os checkboxes com as legendas e datasets
    document.querySelectorAll('.metric-checkbox').forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            updateChart(index, this);
        });
    });

    // Atualizar a legenda pela primeira vez
    updateLegend();
};
