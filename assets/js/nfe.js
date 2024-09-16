// Filtro de notas fiscais
function searchNfeTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector(".nfe-table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {  // Começar em 1 para ignorar o cabeçalho
        tr[i].style.display = "none";  // Esconder todas as linhas inicialmente
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";  // Mostrar a linha se o filtro corresponder
                    break;
                }
            }
        }
    }
}

// Abre o modal Ver NF-e
function abrirModalDetalhesNfe(campos) {
    // Iterar sobre os campos e preencher o modal
    for (let campoId in campos) {
        document.getElementById(campoId).textContent = campos[campoId]; // Popula os campos no modal
    }
    // Exibir o modal
    $('#modalNfe').modal('show');
}