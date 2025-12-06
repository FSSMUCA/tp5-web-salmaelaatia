function classifierNombre(n) {
  if (n < 0) {
    return "Nombre négatif";
  } else {
    if (n <= 10) {
      return "Petit";
    } else if (n <= 50) {
      return "Moyen";
    } else if (n <= 100) {
      return "Grand";
    } else {
      return "Très grand";
    }
  }
}
let saisie = prompt("Entrez un nombre :");
let nombre = Number(saisie);
let resultat = classifierNombre(nombre);
console.log(resultat);
