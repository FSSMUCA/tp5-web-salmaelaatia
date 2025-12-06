function totalAvecRemise(total, remise) {
  return total - (total * remise / 100);
}

let totalHT = parseFloat(prompt("Entrez le total HT (hors taxes) :"));
let remise = parseFloat(prompt("Entrez le pourcentage de remise :"));

let totalFinal = totalAvecRemise(totalHT, remise);

alert("Le total après remise est : " + totalFinal.toFixed(2) + " €");
