const choix = ['pierre' , 'feuille', 'ciseaux'];

let radios = document.querySelectorAll('input[type="radio"]');
let btn = document.querySelector('button#play');
let resultatText = document.querySelector('#resultat');
let choixJoueursText = document.querySelector('#choixJoueurs');
let winCountTxt = document.querySelector('#manche-gagner');
let nulCountTxt = document.querySelector('#manche-nul');
let loseCountTxt = document.querySelector('#manche-perdu');
let saveBtn = document.querySelector('#save');
let resetBtn = document.querySelector('#reset');


let choixJoueur;
let choixRandom;
let resultat;
let saves;

let winCount =0;
let nulCount =0;
let loseCount =0;
//console.log(`Random IS NUMBER ${RandomChoix}`);

function stats (resultat){

    if (resultat==='Manche Gagné'){
        winCount ++;
        winCountTxt.innerHTML= `Manche gagné = ${winCount}`
    }
    if (resultat==='Manche Nul'){
        nulCount ++;
        nulCountTxt.innerHTML= `Manche Nul = ${nulCount}`
    }
    if (resultat==='Manche Perdu'){
        loseCount ++;
        loseCountTxt.innerHTML= `Manche Perdu = ${loseCount}`
    }
}

function jeux(){
    choixRandom = Math.floor(Math.random() * choix.length);
    for(i = 0; i < radios.length; i++){
        if(radios[i].checked){
            choixJoueur = radios[i].value;
            choixRandom = radios[choixRandom].value;
          if(
             (choixJoueur==='pierre' & choixRandom==='ciseaux') ||
             (choixJoueur==='ciseaux' & choixRandom==='feuille') ||
             (choixJoueur==='feuille' & choixRandom==='pierre')
          )
          {
            resultat = 'Manche Gagné';   
          }
          if(choixJoueur===choixRandom)
          {
            resultat = 'Manche Nul'
          }if(
             (choixJoueur==='pierre' & choixRandom==='feuille') ||
             (choixJoueur==='ciseaux' & choixRandom==='pierre') ||
             (choixJoueur==='feuille' & choixRandom==='ciseaux')
          ){
            resultat = 'Manche Perdu'
          }

        }
    }
    return [
        resultatText.innerHTML = 'resultat : ',
        choixJoueursText.innerHTML=`Tu a joué ${choixJoueur} et moi ${choixRandom}`,
        setTimeout(
            function(){
                resultatText.innerHTML =`resultat : ${resultat}`
            },1000
        ),
        stats(resultat)
    ]
};
btn.addEventListener('click', jeux);