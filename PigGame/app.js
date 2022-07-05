var Pontuacao;
var PontuaçãoRodada;
var JogadorAtivo;
var ÉJogavel;
var Meta;
Inicializa();
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(ÉJogavel){
        document.getElementById('dice-1').style.display='block';
        var Dado=Math.floor(Math.random()*6+1);
        var DomDado= document.getElementById('dice-1');
        DomDado.src="Dice-"+Dado+".png";
        if(Dado!=1){
            PontuaçãoRodada+=Dado;
            document.querySelector("#current-"+JogadorAtivo).textContent=PontuaçãoRodada;
        }else{
            ProximoJogador();
        }

    }
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    if(ÉJogavel){
        Pontuacao[JogadorAtivo]+=PontuaçãoRodada;
        document.querySelector('#score-'+JogadorAtivo).textContent=Pontuacao[JogadorAtivo];
        var Entrada=document.querySelector('.final-score').value;
        if(Entrada){
            Meta=Entrada;
        }else{
            Meta=30;
        }
        if(Pontuacao[JogadorAtivo]>=Meta){
            document.querySelector('#name-'+JogadorAtivo).textContent="Vencedor!!";
            document.querySelector('.player-'+JogadorAtivo+'-panel').classList.add('winner');
            document.querySelector(".player-0-panel").classList.remove('active');
            document.querySelector(".player-1-panel").classList.remove('active');
            ÉJogavel=false;
        }else{
            ProximoJogador();
        }

    }
})

document.querySelector('.btn-new').addEventListener('click',Inicializa);

function ProximoJogador(){
    PontuaçãoRodada=0;
    JogadorAtivo===0 ? JogadorAtivo=1:JogadorAtivo=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#current-1").textContent=0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
}

function Inicializa(){
    PontuaçãoRodada=0;
    Pontuacao=[0,0];
    JogadorAtivo=0;
    ÉJogavel=true;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent="Jogador 1";
    document.querySelector('#name-1').textContent="Jogador 2";
 document.querySelector("#score-0").textContent="0";
document.querySelector("#score-1").textContent="0";
document.querySelector("#current-0").textContent="0";
document.querySelector("#current-1").textContent="0";
document.getElementById('dice-1').style.display='none';
document.querySelector(".player-0-panel").classList.remove('active');
document.querySelector(".player-0-panel").classList.add('active');
document.querySelector(".player-1-panel").classList.remove('active');


}