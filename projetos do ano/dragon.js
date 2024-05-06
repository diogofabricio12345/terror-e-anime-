const botoes= document.querySelectorAll(".botao");
const textos= document.querySelectorAll(".aba-conteudo");
const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1= new Date("2024-10-05T00:00:00");
const tempoObjetivo2= new Date("2024-10-05T00:00:00");
contadores[0].text
contadores[1].textContent
const tempoAtual1= new Date;

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
contadores[0].textContent= calculatempo(tempoObjetivo1);
contadores[1].textContent= calculatempo(tempoObjetivo2);
contadores[2].textContent= calculatempo(tempoObjetivo3);
contadores[3].textContent= calculatempo(tempoObjetivo4);


function calculatempo(tempoObjetivo) {
  let tempoAtual= new Date();
  let tempoFinal= tempoObjetivo-tempoAtual;
  let segundos= Math.floor(tempoFinal/1000);
  let minutos= Math.floor(segundos/60);
  let horas= Math.floor(minutos/60);
  let dias= Math.floor(horas/24);
  segundos%=60;
  minutos%=60;
  horas%=24;
  return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
 
 
}