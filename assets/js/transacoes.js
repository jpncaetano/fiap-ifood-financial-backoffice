// Função para formatar o valor como moeda
function formatarComoMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para atualizar o saldo na interface
function atualizarSaldo(novoSaldo) {
    const saldoElemento = document.querySelector('.saldo-valor');
    saldoElemento.textContent = formatarComoMoeda(novoSaldo);
}

// Ação de clique no botão "Sacar"
document.querySelector('.sacar-btn').addEventListener('click', function () {
    $('#modalSaque').modal('show');
});

// Função para confirmar o saque
document.getElementById('confirmarSaque').addEventListener('click', function () {
    const valorSaque = parseFloat(document.getElementById('valorSaque').value);
    const saldoAtual = parseFloat(document.querySelector('.saldo-valor').textContent.replace(/[R$\.,]/g, '').replace(',', '.') / 100);

    // Verificar se o valor do saque é válido
    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Verificar se há saldo suficiente
    if (valorSaque > saldoAtual) {
        document.getElementById('mensagemErro').style.display = 'block';
    } else {
        // Atualiza o saldo com a subtração do valor sacado
        const novoSaldo = saldoAtual - valorSaque;
        atualizarSaldo(novoSaldo);

        // Fechar o modal e resetar campos
        $('#modalSaque').modal('hide');
        document.getElementById('valorSaque').value = '';
        document.getElementById('mensagemErro').style.display = 'none';

        alert("Saque realizado com sucesso.");
    }
});

// Função para formatar os valores como positivo ou negativo
function formatarValores() {
    const linhasTabela = document.querySelectorAll('#transacoesTableBody tr');
    
    linhasTabela.forEach(linha => {
        const valorCelula = linha.querySelector('td:nth-child(5)'); // A quinta coluna é o valor
        const valorTexto = valorCelula.textContent;

        if (valorTexto.includes('+')) {
            valorCelula.classList.add('positive');
        } else if (valorTexto.includes('-')) {
            valorCelula.classList.add('negative');
        }
    });
}

// Chamar a função assim que a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    formatarValores();
});


// Selecionar os botões de filtro
const botaoTodos = document.querySelector('#filtroTodos');
const botaoEntrada = document.querySelector('#filtroEntrada'); // Corrigido para "filtroEntrada"
const botaoSaida = document.querySelector('#filtroSaida');     // Corrigido para "filtroSaida"

// Função para filtrar a tabela
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

// Definir evento para o botão "Todos"
botaoTodos.addEventListener('click', function () {
    filtrarTabela('todos');
    botaoTodos.classList.add('active');
    botaoEntrada.classList.remove('active');
    botaoSaida.classList.remove('active');
});

// Definir evento para o botão "Entradas"
botaoEntrada.addEventListener('click', function () {
    filtrarTabela('entrada');
    botaoTodos.classList.remove('active');
    botaoEntrada.classList.add('active');
    botaoSaida.classList.remove('active');
});

// Definir evento para o botão "Saídas"
botaoSaida.addEventListener('click', function () {
    filtrarTabela('saída');
    botaoTodos.classList.remove('active');
    botaoEntrada.classList.remove('active');
    botaoSaida.classList.add('active');
});

// Filtrar por padrão mostrando "Todos" ao carregar a página
filtrarTabela('todos');


function searchTable() {
    // Declaração de variáveis
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    // Seleciona a tabela de transações
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

    // Loop sobre todas as linhas da tabela e oculta as que não correspondem à consulta de pesquisa
    for (i = 1; i < tr.length; i++) { // Começa a partir de 1 para ignorar o cabeçalho
        tr[i].style.display = "none"; // Oculta a linha inicialmente
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = ""; // Mostra a linha se encontrar uma correspondência
                    break;
                }
            }
        }
    }
}


