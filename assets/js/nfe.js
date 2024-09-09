function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table");
    tr = table.getElementsByTagName("tr");

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

// Função para exibir o modal com os detalhes da NF-e
document.querySelectorAll('.ver-nfe-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Obter os detalhes da NF-e a partir da linha da tabela
        const row = this.closest('tr');
        const nfeDate = row.children[0].textContent; // Data de emissão
        const nfeNumber = row.children[1].textContent; // Número da NF-e
        const nfeDescription = row.children[2].textContent || "N/A"; // Descrição, index ajustado
        const nfeValue = row.children[3].textContent; // Valor
        const nfeStatus = row.children[4].textContent; // Status

        // Preencher os campos no modal com os valores
        document.getElementById('nfeDate').textContent = nfeDate;
        document.getElementById('nfeNumber').textContent = nfeNumber;
        document.getElementById('nfeDescription').textContent = nfeDescription;
        document.getElementById('nfeValue').textContent = nfeValue;
        document.getElementById('nfeStatus').textContent = nfeStatus;

        // Exibir o modal
        $('#modalNfe').modal('show');
    });
});
