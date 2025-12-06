// Version 1 : somme avec boucle
function sommeIterative(n) {
  let somme = 0;
  for (let i = 1; i <= n; i++) {
    somme += i;
  }
  return somme;
}

// Version 2 : somme avec récursion
function sommeRecursive(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sommeRecursive(n - 1);
  }
}

// Saisie utilisateur
let n = parseInt(prompt("Entrez un entier positif :"));

// Calculs
let resultatIteratif = sommeIterative(n);
let resultatRecursif = sommeRecursive(n);

// Affichage
alert("Somme itérative : " + resultatIteratif + "\nSomme récursive : " + resultatRecursif);
