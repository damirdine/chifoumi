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

function verifSave(){
    if(!localStorage.length=='')
    {
        winCount=localStorage.getItem('winCountSave')
        nulCount=localStorage.getItem('nulCountSave')
        loseCount=localStorage.getItem('loseCountSave')
        stats('localeStorageEmpty')
    }else{
        stats('reset')
    }

    return [winCount,nulCount,loseCount]
}
verifSave()

function stats (resultat){
    if (resultat==='Manche Gagné'){
        winCount ++;
        winCountTxt.innerHTML= `Manche gagnés = ${winCount}`
    }
    if (resultat==='Manche Nul'){
        nulCount ++;
        nulCountTxt.innerHTML= `Manche nul = ${nulCount}`
    }
    if (resultat==='Manche Perdu'){
        loseCount ++;
        loseCountTxt.innerHTML= `Manche perdu = ${loseCount}`
    }
    if(resultat==="localeStorageEmpty"){
        winCountTxt.innerHTML= `Manche gagnés = ${winCount}`
        nulCountTxt.innerHTML= `Manche nul = ${nulCount}`
        loseCountTxt.innerHTML= `Manche perdu = ${loseCount}`   
    }
    if(resultat==='reset'){
        winCountTxt.innerHTML= `Manche gagnés = 0`;
        nulCountTxt.innerHTML= `Manche nuls = 0`;
        loseCountTxt.innerHTML= `Manche perdus = 0`;
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
        stats(resultat),
        save()
    ]
};

btn.addEventListener('click', jeux);

function save() {
    saveBtn.addEventListener('click',function (){
        localStorage.setItem('winCountSave',winCount);
        localStorage.setItem('nulCountSave',nulCount);
        localStorage.setItem('loseCountSave',loseCount);

        winCount = localStorage.getItem('winCountSave');
        nulCount = localStorage.getItem('nulCountSave');
        loseCount = localStorage.getItem('loseCountSave');
    });
    resetBtn.addEventListener('click',function(){
        localStorage.clear();
        winCount =  0;
        nulCount = 0;
        loseCount = 0;
        stats('reset')    
    });
    return [winCount,nulCount,loseCount]
}
save();