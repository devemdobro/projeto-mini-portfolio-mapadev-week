// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  // passo 2 - dar um jeito de identificar o clique no elemento da aba
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionado")) return;

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
  // passo 3 - desmarcar a aba selecionada
  const abaSelecionada = document.querySelector(".selecionado");
  abaSelecionada.classList.remove("selecionado");

  // passo 4 - marcar a aba clicada como selecionado
  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

  // passo 5 - esconder o conteúdo anterior
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  // passo 6 - mostrar o conteúdo da aba selecionada
  informacaoASerMostrada.classList.add("selecionado");
}
