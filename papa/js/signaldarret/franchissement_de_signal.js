// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function enquete() {
    // Récupérer la valeur de l'élément d'entrée
    var avis = document.getElementById("havis").value;

    // Extraction des heures et des minutes
    var heures = parseInt(avis.substring(0, 2), 10);
    var minutes = parseInt(avis.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 90;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('henquete');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);


}



function liberation() {
    // Récupérer la valeur de l'élément d'entrée
    var releve = document.getElementById("hreleve").value;

    // Extraction des heures et des minutes
    var heures = parseInt(releve.substring(0, 2), 10);
    var minutes = parseInt(releve.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 30;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('hliberation');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}
