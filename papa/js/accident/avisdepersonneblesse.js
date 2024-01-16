// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function sds() {
    // Récupérer la valeur de l'élément d'entrée
    var heuresignalement = document.getElementById("heuresignalement").value;

    // Extraction des heures et des minutes
    var heures = parseInt(heuresignalement.substring(0, 2), 10);
    var minutes = parseInt(heuresignalement.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 30;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('heureSdS');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);


}
function cil() {
    // Récupérer la valeur de l'élément d'entrée
    var heureSdS = document.getElementById("heureSdS").value;

    // Extraction des heures et des minutes
    var heures = parseInt(heureSdS.substring(0, 2), 10);
    var minutes = parseInt(heureSdS.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 10;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('heureCIL');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);


}


function opj() {
    // Récupérer la valeur de l'élément d'entrée
    var heureCIL = document.getElementById("heureCIL").value;
    // Extraction des heures et des minutes
    var heures = parseInt(heureCIL.substring(0, 2), 10);
    var minutes = parseInt(heureCIL.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 20;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('heureOPJ');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);

}


function circul() {
    // Récupérer la valeur de l'élément d'entrée
    var heureOPJ = document.getElementById("heureOPJ").value;

    // Extraction des heures et des minutes
    var heures = parseInt(heureOPJ.substring(0, 2), 10);
    var minutes = parseInt(heureOPJ.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 100;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('heurecircul');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}

