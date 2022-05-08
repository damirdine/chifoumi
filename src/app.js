const choix = ['pierre' , 'feuille', 'ciseaux'];
let choixJoueur,choixOrdinateur,resultatManche
let btns = document.querySelectorAll('input')
//console.log(btns)
function choixRandom(choixPossible){
  let NbrRandom = Math.floor(Math.random() * choixPossible.length)
  return choixOrdinateur = choixPossible[NbrRandom]
}

function manche(){
  choixOrdinateur = choixRandom(choix)
  if(
      (choixJoueur==='pierre' & choixOrdinateur==='ciseaux') ||
      (choixJoueur==='ciseaux' & choixOrdinateur==='feuille') ||
      (choixJoueur==='feuille' & choixOrdinateur==='pierre')
    ){
    resultatManche = 'Manche Gagné';
  }
    
  if(choixJoueur===choixOrdinateur){
    resultatManche = 'Manche Nul'
  }
    
  if(
      (choixJoueur==='pierre' & choixOrdinateur==='feuille') ||
      (choixJoueur==='ciseaux' & choixOrdinateur==='pierre') ||
      (choixJoueur==='feuille' & choixOrdinateur==='ciseaux')
    ){
      resultatManche = 'Manche Perdu'
  }
  return resultatManche
}
function afficherResultat(param){
  let resultatMancheTxt = document.querySelector('#resultat-manche')
  let jeuFait = document.querySelector('#jeu')
  jeuFait.textContent = `${choixJoueur} contre ${choixOrdinateur}`
  resultatMancheTxt.textContent = resultatManche
}
let mancheGagne=0,mancheNul=0,manchePerdu=0
function compteur(resultatManche){
  if(resultatManche==='Manche Gagné')
  {
     mancheGagne +=1
  }
  if(resultatManche==='Manche Nul'){
     mancheNul+=1
  }
  if(resultatManche==='Manche Perdu'){
     manchePerdu+=1
  }
  return [mancheGagne,mancheNul,manchePerdu]
}

function afficherStat(stats){
  let statsTxt = document.querySelector('#stats')
  statsTxt.textContent = `${mancheGagne} - ${mancheNul} - ${manchePerdu}`
}
function jeu(){
  afficherResultat(manche())
  afficherStat(compteur(resultatManche))
}
btns.forEach(element => 
  element.addEventListener('click', event => {
    choixJoueur=element.value
    jeu()
  })
)