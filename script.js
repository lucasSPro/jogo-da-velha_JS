var jogador1, jogador2, jogador, vencedor =  null;
var jogadorSelecionado =  document.getElementById('jogador-selecionado');
var vencedorSelecionado =  document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

function escolherQuadrado(id){
  if(vencedor !== null){
    alert('Alguem ja venceu, clique Nova jogada! ')
    return;
  }

  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-') {
    return;
  }

 

  if ( jogador1 === undefined || jogador2 === undefined ){
    alert('O jogo precisa de dois jogadores, escolhe Lurdes e Maria José')
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color =  '#fff';
  console.log(jogador1)
  console.log(jogador2)

  if(jogador === jogador2){
    jogador= jogador1;
  }else{
    jogador= jogador2;
  }
  mudarJogador(jogador);
  checarVencedor();
}

function escolherJogado0 (valor) {
  console.log(valor);
  const str =  valor + '';
  const escolha = [
    {
      id:"&#129491;",
      ref:"L1",
    },
    {
      id:"&#10060;",
      ref:"L2",
    },
    {
      id:"&#11088;",
      ref:"L3",
    },
    {
      id:"&#127746;",
      ref:"L4",
    },
    {
      id:"&#127774;",
      ref:"L5",
    },
    {
      id:"&#127815;",
      ref:"L6",
    }
 ];

 const j1 = escolha.find(emoji => emoji.ref === str);
 jogador1 = j1.id
 trocaJogador1(j1.ref);
}

function escolherJogado1 (valor) {
  console.log(valor);
  if (jogador1 === undefined ){
    alert('Escolhe primeiro o jogador 1 ')
    return
  }
  const str =  valor + '';
  const escolha = [
    {
      id:"&#128117",
      ref:"MJ1",
      },
      {
        id:"&#10062;",
        ref:"MJ2",
      },
      {
        id:"&#11093;",
        ref:"MJ3",
      },
      {
        id:"&#127757;",
        ref:"MJ4",
      },
      {
        id:"&#127770;",
        ref:"MJ5",
      },
      {
        id:"&#127822;",
        ref:"MJ6",
      },
    
 ];

 const j2 = escolha.find(emoji => emoji.ref === str);
 jogador2 = j2.id;
 trocaJogador2(j2.ref);
 sorteio();

}

function trocaJogador1 (valor) {

  for (var i = 1; i <= 6; i++) {
    var quadrado = document.getElementById("L" + i + '');
    quadrado.style.background = 'rgb(8, 14, 19)';
  }

  if (valor !== null){
    document.getElementById(valor).style.background = '#04B404';
  }
}

function trocaJogador2 (valor) {
  
  for (var i = 1; i <= 6; i++) {
    var quadrado = document.getElementById("MJ" + i + '' );
    quadrado.style.background = 'rgb(8, 14, 19)';
  }

  if (valor !== null){
    document.getElementById(valor).style.background = '#04B404';
  }
}


function sorteio (){
  if (jogador1 !== null){
    const parOuImpar = Math.floor(Math.random() * 2);
    console.log(parOuImpar)
    if (parOuImpar === 1){
      jogador = jogador1
      mudarJogador(jogador)
    }else{
      jogador = jogador2
      mudarJogador(jogador)
    }
  }

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
  quadrado1.style.background = '#04B404';
  quadrado2.style.background = '#04B404';
  quadrado3.style.background = '#04B404';
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

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#0431B4';
        quadrado.style.color = '#0431B4';
        quadrado.innerHTML = '-';
    }
    
    trocaJogador1(null);
    trocaJogador2(null);
    jogador1 =undefined;
    jogador2 =undefined;

    document.style.background = '#0431B4';

}
