// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

// Fonction pour changer le fond en vert lorsque la checkbox est cochée
function changerFondCheckbox(checkbox, elementID, elementIDtxt) {
    var vert = document.getElementById(elementID);
    var verttxt = document.getElementById(elementIDtxt);

    // Ajoute ou supprime la classe "fond-vert" en fonction de l'état de la checkbox
    if (checkbox.checked) {
        vert.classList.add("fond-vert");
        verttxt.classList.add("fond-vert");
    } else {
        vert.classList.remove("fond-vert");
        verttxt.classList.remove("fond-vert");
    }
}

function calculTemps(entreeID, sortieID, temps) {
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

// Fonction pour ajouter des heures
function ajoutHeure(capteurID) {
    // Créer un nouvel ensemble de conteneurs
    var ensembleContainer = document.createElement("div");

    // Créer un nouvel élément input de type time
    var nouvelInputTime = document.createElement("input");
    nouvelInputTime.type = "time";

    // Créer un nouvel élément input de type texte
    var nouvelInputText = document.createElement("input");
    nouvelInputText.type = "text";

    // Créer le bouton de suppression
    var boutonSuppression = document.createElement("button");
    boutonSuppression.textContent = "Supprimer";
    boutonSuppression.addEventListener("click", function () {
        // Supprimer l'ensemble lors du clic sur le bouton
        conteneur.removeChild(ensembleContainer);
    });

    // Créer un nouvel élément input de type time
    var nouvelInputCheckbox = document.createElement("input");
    nouvelInputCheckbox.type = "checkbox";

    // Ajouter les éléments au conteneur
    ensembleContainer.appendChild(nouvelInputTime);
    ensembleContainer.appendChild(nouvelInputText);
    ensembleContainer.appendChild(nouvelInputCheckbox);
    ensembleContainer.appendChild(boutonSuppression);


    // Ajouter l'ensemble au conteneur principal
    var conteneur = document.getElementById(capteurID);
    conteneur.appendChild(ensembleContainer);
}



function suppTransbo(capteurID, capteurTransbo){
    var divtransbo= document.getElementById('champs'+capteurTransbo);
    var supp = document.getElementById(capteurID);
    var transboajoutheure = document.getElementById(capteurTransbo+'ajoutheure');
        divtransbo.style.display='none';
        supp.style.display='none';
        transboajoutheure.style.display='none';
}