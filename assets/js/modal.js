
// Função para carregar a janela modal
function abrirModal(carregarModal) {
    //console.log("Carregar a janela modal: " + carregarModal);

    // Receber o seletor da janela modal que será aberta
    let modal = document.getElementById(carregarModal);

    // Apresentar a janela modal
    modal.style.display = 'block';

    // Ocultar barra de rolagem
    document.body.style.overflow = 'hidden';
}


// Função para fechar a janela modal
function fecharModal(fecharModal) {
    //console.log("Fechar a janela modal: " + fecharModal);

    // Receber o seletor da janela modal que será fechada
    let modal = document.getElementById(fecharModal);

    // Ocultar a janela modal
    modal.style.display = 'none';

    // Apresentar barra de rolagem
    document.body.style.overflow = 'auto';
}

//let AtlMonitorado = document.getElementById('AtlMonitorado');

//função a mostrar ou esconder os itens de monitoramento por clube
/*
function mostrarMonitoramento(AtlMonitorado) {
    let Clube = document.getElementById('Clube');

    document.getElementById('AtlMonitorado').addEventListener('change', function () {

        if (this.checked) {
            //alert('SIM');
            Clube.style.display = 'block';
           
        } else {
            Clube.style.display = 'none';
        }
    });
} */

//let AtlEmpresario = document.getElementById('AtlEmpresario');
//função a mostrar ou esconder o campo empresario
/*
function mostrarEmpresario(AtlEmpresario) {
    let Empresario = document.getElementById('Empresario');

    document.getElementById('AtlEmpresario').addEventListener('change', function () {

        if (this.checked) {

            Empresario.style.display = 'block';

        } else {
            Empresario.style.display = 'none';
        }
    });
} */
