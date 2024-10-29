// Liste des personnes
const personnes = Array.from({ length: 42 }, (_, i) => `Personne${i + 1}`);

// Les couleurs des équipes
const equipes = {
    "bleu": [],
    "rouge": [],
    "vert": [],
    "jaune": []
};

// Mélanger aléatoirement les personnes
const personnesMelangees = personnes.sort(() => Math.random() - 0.5);

// Répartir les personnes dans les équipes
personnesMelangees.forEach((personne, index) => {
    const couleur = Object.keys(equipes)[index % 4]; // Choisir une couleur cycliquement
    equipes[couleur].push(personne);
});

// Afficher les équipes
console.log("Équipe Bleue :", equipes["bleu"]);
console.log("Équipe Rouge :", equipes["rouge"]);
console.log("Équipe Verte :", equipes["vert"]);
console.log("Équipe Jaune :", equipes["jaune"]);
