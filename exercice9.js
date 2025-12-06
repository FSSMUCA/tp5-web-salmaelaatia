function factorielle(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}

let nombre = parseInt(prompt("Entrez un nombre entier positif :"));
let resultat = factorielle(nombre);

alert("La factorielle de " + nombre + " est : " + resultat);
