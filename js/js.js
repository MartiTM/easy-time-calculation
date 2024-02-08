// Fonction pour ajouter un zéro devant les chiffres < 10
function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function calculTemps(temps, elementHeureAvant, elementHeureMaintenant) {
    // Récupérer la valeur de l'élément d'entrée
    var heureRecupere = elementHeureAvant.value;

    // Extraction des heures et des minutes
    var heures = parseInt(heureRecupere.substring(0, 2), 10);
    var minutes = parseInt(heureRecupere.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutes += temps;
    heures += Math.floor(minutes / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutes = minutes % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heures = heures % 24;

    // Réinsérer les nouvelles heures dans le champ de saisie de temps destination
    elementHeureMaintenant.value = padZero(heures) + ":" + padZero(minutes);

    // Create a new 'change' event
    var event = new Event('change');

    // Dispatch it.
    elementHeureMaintenant.dispatchEvent(event);

}


// Fonction pour ajouter une étape
function ajouterUneEtape(texte = 'oui', estSupprimable = false, ajoutMinutes = 0, elementPrecedent = null) {
    // Créer un nouvel ensemble de conteneurs
    var div = document.createElement("div");



    // Créer un nouvel élément input de type time
    var nouvelInputTime = document.createElement("input");
    nouvelInputTime.type = "time";
    nouvelInputTime.className = "heure";

    if (elementPrecedent != null) {

        elementPrecedent.getElementsByClassName('heure')[0].addEventListener('change', function (event) {

            calculTemps(ajoutMinutes, event.target, nouvelInputTime)

        });



    }

    // Créer un nouvel élément input de type texte
    var nouvelInputDesciption = document.createElement("textarea");
    nouvelInputDesciption.placeholder = 'Description';

    // Créer le bouton de suppression de description
    var boutonSuppressionDescription = document.createElement("button");
    boutonSuppressionDescription.textContent = "Supprimer la description";
    boutonSuppressionDescription.addEventListener("click", function () {
        // Supprimer l'ensemble lors du clic sur le bouton
        nouvelInputDesciption.remove();
        boutonSuppressionDescription.remove();
    });


    // Créer un nouvel élément input de type texte
    var nouvelInputText = document.createElement("input");
    nouvelInputText.type = "text";
    nouvelInputText.placeholder = texte;

    // Créer un bouton pour rajouter des étapes
    var nouveauBouton = document.createElement("button");
    nouveauBouton.textContent = "Ajoutez une étape";

    nouveauBouton.addEventListener('click', function () {
        var newDiv = ajouterUneEtape('à remplir', true)
        div.insertAdjacentElement('afterend', newDiv);
    });

    // passer à la ligne
    var br = document.createElement("br");




    if (estSupprimable == true) {
        // Créer le bouton de suppression
        var boutonSuppression = document.createElement("button");
        boutonSuppression.textContent = "Supprimer";
        boutonSuppression.addEventListener("click", function () {
            // Supprimer l'ensemble lors du clic sur le bouton
            div.remove();
        });
    }

    // Créer un nouvel élément input de type time
    var nouvelInputCheckbox = document.createElement("input");
    nouvelInputCheckbox.type = "checkbox";
    nouvelInputCheckbox.addEventListener("click", function () {
        if (nouvelInputCheckbox.checked) {
            nouvelInputText.classList.add("fond-vert");
            nouvelInputTime.classList.add("fond-vert");
        } else {
            nouvelInputText.classList.remove("fond-vert");
            nouvelInputTime.classList.remove("fond-vert");
        }
    });
    // Ajouter les éléments au conteneur
    div.appendChild(nouvelInputTime);
    div.append(":")
    div.appendChild(nouvelInputText);
    div.appendChild(nouvelInputCheckbox);
    if (estSupprimable == true) {
        div.appendChild(boutonSuppression);
    };
    div.appendChild(br);
    div.appendChild(nouvelInputDesciption);
    div.appendChild(boutonSuppressionDescription);
    div.appendChild(nouveauBouton);

    return div
}

function listeDEtape(ensemble) {

    var divPrecedente = null

    for (const element of ensemble.liste) {
        var div = ajouterUneEtape(element.texte, element.estSupprimable, element.ajoutMinutes, divPrecedente)

        // Ajouter l'ensemble au conteneur principal
        var conteneur = document.getElementById('listehorraire');
        conteneur.appendChild(div);
        divPrecedente = div
    }
}

function LancerPage(cheminJSON) {
    fetch(cheminJSON)
        .then(response => response.json())
        .then(json => listeDEtape(json))
        .catch(err => console.log(err))
}

export { LancerPage }