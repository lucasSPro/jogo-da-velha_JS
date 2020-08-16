var jogador1, jogador2, jogador, vencedor =  null;
var jogadorSelecionado =  document.getElementById('jogador-selecionado');
var vencedorSelecionado =  document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var id1 = null;
var id2 = null;
var id3 = null;


function escolherQuadrado(id){
  if(vencedor !== null){
    return;
  }

  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-') {
    return;
  }

  //quadrado.innerHTML = jogador;
  //quadrado.style.color =  '#fff';

  if ( jogador1 === null || jogador2 === null ){
    return
  }

  if(jogador === jogador1){
    jogador= jogador1;
  }else{
    jogador= jodador2;
  }
  mudarJogador(jogador);
  checarVencedor();
}

function escolherJogado0 (valor) {
  
}

function escolherJogado1 (valor) {
  
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
  // quadrado1.style.background= '#04B404';
  // quadrado2.style.background= '#04B404';
  // quadrado3.style.background= '#04B404';
  id1 = quadrado1.id;
  id2 = quadrado2.id;
  id3 = quadrado3.id;
  console.log(id1);
  document.getElementById(id1).className = 'efeito-1';
  document.getElementById(id2).className = 'efeito-1';
  document.getElementById(id3).className = 'efeito-1';
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  mudarJogador(null);
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

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    console.log(id1);
    document.getElementById(id1).className = 'quadrado';
    document.getElementById(id2).className = 'quadrado';
    document.getElementById(id3).className = 'quadrado';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
       // quadrado.style.background = '#0431B4';
        quadrado.style.color = '#0431B4';
        quadrado.innerHTML = '-';
    }

    mudarJogador('&#128117;');
}
