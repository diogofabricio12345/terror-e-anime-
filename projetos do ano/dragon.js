const botoes= document.querySelectorAll(".botao");
const textos= document.querySelectorAll(".aba-conteudo");
const contadores= document.querySelectorAll(".contador");
const TempoObjetivo1= new Date("2024-12-13T00:00:00");
const TempoObjetivo2= new Date("2024-12-13T00:00:00");
const TempoObjetivo3= new Date("2026-12-13T00:00:00");
const TempoObjetivo4= new Date("2028-12-13T00:00:00");
const tempoAtual= new Date;

//Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".

for(let i=0;i <botoes.length;i++){
    //Variável "i" é igual a 0, mas enquanto essa variável for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i será a quantidade de botões.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        //Remove a classe "ativo" de todos os botões.
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
        //Adiciona a classe ativo só no botão clicado.
    }
}
contadores[0].textContent=CalculaTempo(TempoObjetivo1);
contadores[1].textContent=CalculaTempo(TempoObjetivo2);
contadores[2].textContent=CalculaTempo(TempoObjetivo3);
contadores[3].textContent=CalculaTempo(TempoObjetivo4);

function CalculaTempo(TempoObjetivo){
let tempoAtual=new Date();
let tempoFinal=TempoObjetivo-tempoAtual;
let segundos=Math.floor(tempoFinal/1000);
let minutos=Math.floor(segundos/60);
let horas=Math.floor(minutos/60);
let dias=Math.floor(horas/24);
let mes=Math.floor(dias/30);
let anos=Math.floor(mes/12);

segundos%=60;
minutos%=60;
horas%=24;
dias%=30;
mes%=12;
return anos+"anos "+mes+"mes "+dias+"dias "+horas+"horas "+minutos+"minutos "+segundos+"segundos ";

}
comecaCronometros();

function comecaCronometros(){
atualizaCronometro();
setInterval(atualizaCronometro,1000);

}

function atualizaCronometro(){

contadores[0].textContent = CalculaTempo(TempoObjetivo1);
contadores[1].textContent = CalculaTempo(TempoObjetivo2);
contadores[2].textContent = CalculaTempo(TempoObjetivo3);
contadores[3].textContent = CalculaTempo(TempoObjetivo4);


}

 
