function construirePhrase(prenom, age) {
  return "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
}
let prenom = "Sara";
let age = 22;
let phrase = construirePhrase(prenom, age);
console.log(phrase); 
age = 23;
phrase = construirePhrase(prenom, age);
console.log(phrase); 
