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
document.querySelector('.sacar-btn').addEventListener('click', function() {
    $('#modalSaque').modal('show');
});

// Função para confirmar o saque
document.getElementById('confirmarSaque').addEventListener('click', function() {
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
