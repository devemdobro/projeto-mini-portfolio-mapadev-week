const abas = document.querySelectorAll(".aba");
const informacoes = document.querySelectorAll(".informacao");

abas.forEach((aba) => {
    aba.addEventListener("click", function () {

        const abaClicadaEstaSelecionado = aba.classList.contains("selecionado");
        if(abaClicadaEstaSelecionado) return;

        const abaSelecionada = document.querySelector('.selecionado');
        abaSelecionada.classList.remove('selecionado');

        informacoes.forEach((info) => {
            const estaSelecionada = info.classList.contains("selecionado");
            if (estaSelecionada) {                
                esconderInformacoes(info);
            } else {
                aba.classList.add('selecionado');
                mostrarInformacoes(info);
            }
        });
    });
});

function esconderInformacoes(info) {
    info.classList.remove("selecionado");
}

function mostrarInformacoes(info) {
    info.classList.add("selecionado");
}
