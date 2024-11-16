document.addEventListener("DOMContentLoaded", () => {
    // Liste de prénoms prédéfinie
    const names = [
        "Alexandre", "Alexis", "Ana", "Angéla", "Angèle", "Anne-Lyse",
        "Anne-Lise", "Ariel", "Arthur", "Baptiste", "Boris",
        "Déva", "Dylan", "Elena", "Emma", "Evan", 
        "Florence", "Grace", "Hannah", "Hendy",
        "Jacky", "Julie", "Kingsley", "Liam", "Maely",
        "Marie-Ange", "Mélanie", "Natacha", "Nathan C.", "Nathan M.",
        "Nicolas", "Parfait", "Priscilla", "Rafael L.", "Rafael M.",
        "Remy", "Rubben's", "Samantha", "Samuel", "Sara",
        "Sarah", "Sebastien", "Shayna", "Stan", "Timothée",
        "Vivien", "Wendy", "Yasmine"
    ];
    
    // Trier les prénoms par ordre alphabétique
    names.sort((a, b) => a.localeCompare(b));

    // Répartition fixe des équipes pour chaque prénom
    const teamColors = {
        "Alexandre": "bleue",
        "Alexis": "bleue",
        "Ana": "jaune",
        "Anne-Lise" : "verte",
        "Anne-Lyse": "jaune",
        "Angéla": "jaune",
        "Angèle": "jaune",
        "Ariel" : "rouge",
        "Arthur": "verte",
        "Baptiste": "rouge",
        "Boris": "bleue",
        "Déva" : "rouge",
        "Dylan": "rouge",
        "Elena": "jaune",
        "Emma": "rouge",
        "Evan": "verte",
        "Florence": "bleue",
        "Grace": "bleue",
        "Hannah" : "rouge",
        "Hendy": "bleue",
        "Jacky": "verte",
        "Julie": "verte",
        "Kingsley": "rouge",
        "Maely": "jaune",
        "Marie-Ange": "bleue",
        "Mélanie": "jaune",
        "Natacha": "verte",
        "Nathan C.": "verte",
        "Nathan M.": "rouge",
        "Nicolas": "jaune",
        "Parfait": "jaune",
        "Priscilla": "rouge",
        "Rafael L.": "bleue",
        "Remy": "bleue",
        "Rubben's": "rouge",
        "Samantha": "bleue",
        "Samuel": "verte",
        "Sara": "rouge",
        "Sarah": "bleue",
        "Sebastien": "jaune",
        "Shayna": "bleue",
        "Stan": "jaune",
        "Timothée": "verte",
        "Wendy": "verte",
        "Yasmine": "verte"
        // Ajoute d'autres prénoms et leurs couleurs ici
    };

    // Remplir la liste déroulante avec les prénoms triés
    const nameSelect = document.getElementById("nameSelect");
    names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        nameSelect.appendChild(option);
    });

    const confirmButton = document.getElementById("confirmButton");
    const timerDisplay = document.getElementById("timer");
    const teamButton = document.getElementById("teamButton");
    let selectedName = "";

    // Gestion de la sélection du prénom
    nameSelect.addEventListener("change", (e) => {
        selectedName = e.target.value;
        if (selectedName) {
            confirmButton.classList.remove("hidden");
        }
    });

    confirmButton.addEventListener("click", () => {
        nameSelect.disabled = true;
        confirmButton.classList.add("hidden");
        startTimer();
    });

    // Fonction pour démarrer le timer jusqu'à une heure précise
    function startTimer() {
        const targetHour = new Date();
        targetHour.setHours(21, 15, 0); // Définit l'heure cible à 16h00

        const timerInterval = setInterval(() => {
            const now = new Date();
            const timeLeft = targetHour - now; // Temps restant en millisecondes

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "Le temps est écoulé !";
                teamButton.classList.remove("hidden");
                return;
            }

            const secondsLeft = Math.floor((timeLeft / 1000) % 60);
            const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
            const hoursLeft = Math.floor((timeLeft / 1000 / 3600) % 24);

            timerDisplay.textContent = `Temps restant : ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
        }, 1000);

        // Affiche le timer une fois le décompte commencé
        timerDisplay.classList.remove("hidden");
        timerDisplay.textContent = "Démarrage du timer...";
    }

    // Découverte de l'équipe
    teamButton.addEventListener("click", () => {
        const teamName = teamColors[selectedName];
        const colors = {
            "bleue": "#3498db",
            "rouge": "#e74c3c",
            "jaune": "#f1c40f",
            "verte": "#2ecc71"
        };
        document.body.style.backgroundColor = colors[teamName];
        document.body.innerHTML = `<h1 style="color: white; text-transform: uppercase;">${teamName}</h1>`;
    });
});
