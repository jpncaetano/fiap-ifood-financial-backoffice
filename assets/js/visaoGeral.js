// Função para abrir o modal de detalhes dos pedidos
function abrirModalDetalhesPedido(campos) {
    // Preenche os campos no modal
    for (let campoId in campos) {
        document.getElementById(campoId).textContent = campos[campoId];
    }
    // Abre o modal
    $('#modalDetalhes').modal('show');
}

// Inicializa os eventos da página Visão Geral
document.addEventListener('DOMContentLoaded', function () {
    // Exibe a aba "A Receber" por padrão
    togglePedidosTab('aReceber');

    // Adiciona evento para alternar entre as abas
    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            // Extrai o id da aba do atributo onclick
            const tabId = this.getAttribute('onclick').match(/'(.*)'/)[1];
            togglePedidosTab(tabId);
        });
    });
});

// Função para alternar entre as abas "A Receber" e "Pedidos Pagos"
function togglePedidosTab(tabId) {
    // Remove a classe "active" de todas as abas
    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Esconde o conteúdo de todas as abas
    document.querySelectorAll('.pedidos-tab-content').forEach(function (content) {
        content.style.display = 'none';
    });

    // Adiciona a classe "active" à aba selecionada e exibe o conteúdo correspondente
    document.querySelector(`[onclick*="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).style.display = 'block';
}

// Função para filtrar pedidos na tabela da Visão Geral
function searchPedidosTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    
    // Seleciona a tabela da aba ativa (A Receber ou Pedidos Pagos)
    const table = document.querySelector('.tab-content.pedidos-tab-content:not([style*="display: none"]) .table');
    const tr = table.getElementsByTagName("tr");

    // Filtra os pedidos com base no input da busca
    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        const td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                const txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}
