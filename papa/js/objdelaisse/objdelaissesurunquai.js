// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function appel() {
    // Récupérer la valeur de l'élément d'entrée
    var decouverte = document.getElementById("hdecouverte").value;

    // Extraction des heures et des minutes
    var heures = parseInt(decouverte.substring(0, 2), 10);
    var minutes = parseInt(decouverte.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 20;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('h2appel');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);


}



function arriveFdO() {
    // Récupérer la valeur de l'élément d'entrée
    var appel2 = document.getElementById("h2appel").value;

    // Extraction des heures et des minutes
    var heures = parseInt(appel2.substring(0, 2), 10);
    var minutes = parseInt(appel2.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 10;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('harriveordre');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}

function levededouteFdO() {
    // Récupérer la valeur de l'élément d'entrée
    var arriveordre = document.getElementById("harriveordre").value;

    // Extraction des heures et des minutes
    var heures = parseInt(arriveordre.substring(0, 2), 10);
    var minutes = parseInt(arriveordre.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 20;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;
    
    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('hleveedoute');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}

function arrivedemineur() {
    // Récupérer la valeur de l'élément d'entrée
    var arriveordre = document.getElementById("harriveordre").value;

    // Extraction des heures et des minutes
    var heures = parseInt(arriveordre.substring(0, 2), 10);
    var minutes = parseInt(arriveordre.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 90;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('harrivedemineur');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}

function levededoutedemineur() {
    // Récupérer la valeur de l'élément d'entrée
    var arrivedemineur = document.getElementById("harrivedemineur").value;

    // Extraction des heures et des minutes
    var heures = parseInt(arrivedemineur.substring(0, 2), 10);
    var minutes = parseInt(arrivedemineur.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += 30;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    var organismeElement = document.getElementById('hleveedemineurs');
    organismeElement.value = padZero(heures) + ":" + padZero(minutes);
}