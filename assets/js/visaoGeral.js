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

    // Garante que a aba "A Receber" esteja ativa ao selecionar "Visão Geral"
    if (tabId === 'visaoGeral') {
        showPedidosTab('aReceber');
    }
}

function showPedidosTab(tabId) {
    // Esconde todas as abas de pedidos
    document.querySelectorAll('.pedidos-tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostra a aba de pedidos selecionada
    document.getElementById(tabId).style.display = 'block';

    // Remove a classe 'active' de todas as abas de pedidos
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' à aba de pedidos selecionada
    const tabElement = document.querySelector('.tab[onclick="showPedidosTab(\'' + tabId + '\')"]');
    tabElement.classList.add('active');
}

function searchTable() {
    // Declaração de variáveis
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    // Verifica qual aba está ativa
    var activeTab = document.querySelector('.pedidos-tab-content:not([style*="display: none"])');
    
    if (activeTab) {
        table = activeTab.querySelector(".table");
        tr = table.getElementsByTagName("tr");

        // Loop sobre todas as linhas da tabela e oculta as que não correspondem à consulta de pesquisa
        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = "none";
            td = tr[i].getElementsByTagName("td");
            for (var j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }
    }
}


// Exibe a aba "A Receber" por padrão ao carregar a página
window.onload = function() {
    showPedidosTab('aReceber');
}

// Função para abrir a modal e preencher com os detalhes do pedido
function abrirModalDetalhes(pedidoId, produto, quantidade, subtotal, comissao, cupons, repasse, liquido, metodoPagamento) {
    document.getElementById('modalPedidoId').textContent = pedidoId;
    document.getElementById('modalProduto').textContent = produto;
    document.getElementById('modalQuantidade').textContent = quantidade;
    document.getElementById('modalSubtotal').textContent = subtotal;
    document.getElementById('modalComissao').textContent = comissao;
    document.getElementById('modalCupons').textContent = cupons;
    document.getElementById('modalRepasse').textContent = repasse;
    document.getElementById('modalLiquido').textContent = liquido;
    document.getElementById('modalMetodoPagamento').textContent = metodoPagamento;

    $('#pedidoModal').modal('show');
}
