// Função para formatar valor como moeda
function formatarComoMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para atualizar o saldo na interface
function atualizarSaldo(novoSaldo) {
    const saldoElemento = document.querySelector('.saldo-valor');
    saldoElemento.textContent = formatarComoMoeda(novoSaldo);
}

// Função para resetar o modal de saque
function resetarModalSaque() {
    document.getElementById('valorSaque').value = ''; // Limpar o valor do campo
    document.getElementById('erroSaque').style.display = 'none'; // Ocultar a mensagem de erro
}

// Ação de clique no botão "Sacar" (para abrir o modal)
document.querySelector('.sacar-btn').addEventListener('click', function () {
    resetarModalSaque(); // Resetar o modal antes de mostrar
    $('#modalSaque').modal('show');
});

// Resetar os campos quando o modal é fechado
$('#modalSaque').on('hidden.bs.modal', function () {
    resetarModalSaque(); // Resetar o modal ao ser fechado
});

// Ação de confirmação do saque
document.getElementById('btnConfirmarSaque').addEventListener('click', function () {
    const valorSaque = parseFloat(document.getElementById('valorSaque').value.replace(',', '.'));
    const saldoAtual = parseFloat(document.querySelector('.saldo-valor').textContent.replace(/[R$\.,]/g, '').replace(',', '.') / 100);

    // Verificar se o valor do saque é válido
    if (isNaN(valorSaque) || valorSaque <= 0) {
        exibirModalAlerta('Erro', 'Por favor, insira um valor válido.');
        return;
    }

    // Verificar se há saldo suficiente
    if (valorSaque > saldoAtual) {
        document.getElementById('erroSaque').style.display = 'block';
    } else {
        // Atualiza o saldo com a subtração do valor sacado
        const novoSaldo = saldoAtual - valorSaque;
        atualizarSaldo(novoSaldo);

        // Fechar o modal de saque e resetar campos
        $('#modalSaque').modal('hide');
        document.getElementById('valorSaque').value = '';
        document.getElementById('erroSaque').style.display = 'none';

        // Exibe modal de sucesso
        exibirModalAlerta('Sucesso', 'Saque realizado com sucesso.');

        // Adicionar uma nova transação na tabela
        adicionarNovaTransacao(valorSaque);
    }
});

// Função para adicionar uma nova linha na tabela de transações
function adicionarNovaTransacao(valorSaque) {
    // Pega a tabela de transações
    const tabela = document.getElementById('transacoesTableBody');

    // Cria uma nova linha
    const novaLinha = document.createElement('tr');

    // Adiciona as células à nova linha
    novaLinha.innerHTML = `
        <td>${new Date().toLocaleDateString('pt-BR')}</td>
        <td>Saque para conta bancária ****1234</td>
        <td>Saque</td>
        <td>Saída</td>
        <td class ="neutral">-${formatarComoMoeda(valorSaque)}</td>`;

    // Adiciona a nova linha à tabela
    tabela.insertBefore(novaLinha, tabela.firstChild);
}

// Função para exibir o modal de alerta
function exibirModalAlerta(titulo, mensagem) {
    document.getElementById('modalAlertaTitulo').textContent = titulo;
    document.getElementById('modalAlertaMensagem').textContent = mensagem;
    $('#modalAlerta').modal('show');
}

// Chamar a função assim que a página for carregada
document.addEventListener('DOMContentLoaded', function () {
    botaoTodos.classList.add('active');
    filtrarTabela('todos');
});

// Filtro de transações
const botaoTodos = document.querySelector('#filtroTodos');
const botaoEntrada = document.querySelector('#filtroEntrada');
const botaoSaida = document.querySelector('#filtroSaida');

function filtrarTabela(tipo) {
    const linhas = document.querySelectorAll('#transacoesTableBody tr');
    linhas.forEach((linha) => {
        const movimentacao = linha.querySelector('td:nth-child(4)').textContent;
        if (tipo === 'todos') {
            linha.style.display = '';
        } else if (movimentacao.toLowerCase() === tipo.toLowerCase()) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
}

botaoTodos.addEventListener('click', function () {
    filtrarTabela('todos');
    botaoTodos.classList.add('active');
    botaoEntrada.classList.remove('active');
    botaoSaida.classList.remove('active');
});

botaoEntrada.addEventListener('click', function () {
    filtrarTabela('entrada');
    botaoTodos.classList.remove('active');
    botaoEntrada.classList.add('active');
    botaoSaida.classList.remove('active');
});

botaoSaida.addEventListener('click', function () {
    filtrarTabela('saída');
    botaoTodos.classList.remove('active');
    botaoEntrada.classList.remove('active');
    botaoSaida.classList.add('active');
});

filtrarTabela('todos');

// Função de busca para filtrar pedidos na aba Transações
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    // Seleciona a tabela de transações
    table = document.querySelector("#transacoesTableBody");
    tr = table.getElementsByTagName("tr");

    // Loop sobre todas as linhas da tabela e oculta as que não correspondem à consulta de pesquisa
    for (i = 0; i < tr.length; i++) {
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

// Inicializa a função de busca quando o usuário digita
document.getElementById("searchInput").addEventListener('keyup', searchTable);