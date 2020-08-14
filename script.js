var jogador, vencedor =  null;
var jogadorSelecionado =  document.getElementById('jogador-selecionado');
var vencedorSelecionado =  document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
  if(vencedor !== null){
    return;
  }

  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-') {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color =  '#fff';

  if(jogador === 'X'){
    jogador= '0';
  }else{
    jogador= 'X';
  }
  mudarJogador(jogador);
  checarVencedor();
}

function mudarJogador (valor) {
  jogador =  valor;
  jogadorSelecionado.innerHTML =  jogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorDoQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorDoQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorDoQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorDoQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorDoQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorDoQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorDoQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorDoQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}

function checaSequencia (quadrado1,quadrado2,quadrado3) {
  var igual =  false;

  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    igual = true;
  }

  return igual;
}

function mudarCorDoQuadrado (quadrado1,quadrado2,quadrado3) {
  quadrado1.style.background= '#159';
  quadrado2.style.background= '#159';
  quadrado3.style.background= '#159';
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function restart(){
  vencedor = null;
  vencedorSelecionado.innerHTML='';

  for( var interator = 1; interator <=9; interator++){
    var quadrado = document.getElementById(interator);
    quadrado.style.background = ''
  }
}
