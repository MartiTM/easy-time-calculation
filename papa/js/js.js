// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}








// Fonction pour changer le fond en vert lorsque la checkbox est cochée
function changerFondCheckbox(checkbox, elementID) {
    var avisPersonneBlessee = document.getElementById(elementID);

    // Ajoute ou supprime la classe "fond-vert" en fonction de l'état de la checkbox
    if (checkbox.checked) {
        avisPersonneBlessee.classList.add("fond-vert");
    } else {
        avisPersonneBlessee.classList.remove("fond-vert");
    }
}



function calculTemps(entreeID,sortieID,temps) {
    // Récupérer la valeur de l'élément d'entrée
    var heur = document.getElementById(entreeID).value;

    // Extraction des heures et des minutes
    var heures = parseInt(heur.substring(0, 2), 10);
    var minutes = parseInt(heur.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += temps;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById(sortieID);
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}

