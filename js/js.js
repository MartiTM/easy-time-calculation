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

function depassementHeure(tempsReference, elementPrecedent, elementAVerifier) {

    // Récupérer la valeur de l'élément d'entrée
    var heureRecuperePrecedent = elementPrecedent.value;

    // Extraction des heures et des minutes
    var heurePrecedent = parseInt(heureRecuperePrecedent.substring(0, 2), 10);
    var minutesPrecedent = parseInt(heureRecuperePrecedent.substring(3), 10);


    // Récupérer la valeur de l'élément d'entrée
    var heureRecupereAVerifier = elementAVerifier.value;

    // Extraction des heures et des minutes
    var heureAVerifier = parseInt(heureRecupereAVerifier.substring(0, 2), 10);
    var minutesAVerifier = parseInt(heureRecupereAVerifier.substring(3), 10);

    // Ajoute le temps en minutes et ajuste les heures si nécessaire
    minutesPrecedent += tempsReference;
    heurePrecedent += Math.floor(minutesPrecedent / 60); // Ajoute le nombre d'heures entières dans les minutes
    minutesPrecedent = minutesPrecedent % 60; // Garde seulement le reste, c'est-à-dire les minutes restantes après avoir ajouté les heures

    // Assurez-vous que les heures restent dans la plage de 0 à 23
    heurePrecedent = heurePrecedent % 24;

    if (heureAVerifier > heurePrecedent || minutesAVerifier > minutesPrecedent) {
        elementAVerifier.classList.add("fond-rouge");
    } else {
        elementAVerifier.classList.remove("fond-rouge");
    }

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


        nouvelInputTime.addEventListener('change', function () {
            depassementHeure(ajoutMinutes, elementPrecedent.getElementsByClassName('heure')[0], nouvelInputTime)
        });


    }

    // Créer un nouvel élément input de type texte
    var nouvelInputText = document.createElement("input");
    nouvelInputText.type = "text";
    nouvelInputText.value = texte;
    nouvelInputText.maxLength = 80;

    var avertissement = document.createElement("div");
    var pAvertissement = document.createElement("p");
    avertissement.appendChild(pAvertissement);
    pAvertissement.textContent = "80 caractères maximum";
    avertissement.style.display="none";
    pAvertissement.style.margin=0;
    pAvertissement.style.textAlign="center";
    pAvertissement.style.color="orange";
    
    //fonction pour avertir qu'on est à 75 caractère
    nouvelInputText.addEventListener('input', function () {
        if (nouvelInputText.value.length == 80) {
            nouvelInputText.classList.remove("orangeborder");
            nouvelInputText.classList.add("redborder");
            avertissement.style.display="inline";
            pAvertissement.style.color="red";
        } else if (nouvelInputText.value.length > 75) {
            nouvelInputText.classList.add("orangeborder");
            nouvelInputText.classList.remove("redborder");
            avertissement.style.display="inline";
            pAvertissement.style.color="orange";
        } else {
            nouvelInputText.classList.remove("orangeborder");
            nouvelInputText.classList.remove("redborder");
            avertissement.style.display="none";
        }
    });

    // Créer un bouton pour rajouter des étapes
    var nouveauBouton = document.createElement("button");
    nouveauBouton.textContent = "Ajoutez une étape";


    nouveauBouton.addEventListener('click', function () {
        var newDiv = ajouterUneEtape('à remplir', true)
        newDiv.classList.add("nouvelleEtape");
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
    div.appendChild(avertissement);
    div.appendChild(nouvelInputTime);
    div.append(":")
    div.appendChild(nouvelInputText);
    div.appendChild(nouvelInputCheckbox);
    if (estSupprimable == true) {
        div.appendChild(boutonSuppression);
    };
    div.appendChild(br);
    div.appendChild(nouveauBouton);

    return div;

}


function listeDEtape(ensemble) {

    var premiereDiv = null
    var divPrecedente = null
    var conteneur = document.getElementById('listehorraire');

    for (const element of ensemble.liste) {
        divUtilise = divPrecedente
        if (element.estIndependant) {
            divUtilise = premiereDiv
        }

        var div = ajouterUneEtape(element.texte, element.estSupprimable, element.ajoutMinutes, divUtilise)

        // Ajouter l'ensemble au conteneur principal
        conteneur.appendChild(div);
        if (!element.estIndependant) {
            divPrecedente = div;
        }
        if (premiereDiv == null) {
            premiereDiv = divPrecedente
        }
    }

    const conteneurhorraireHRE = document.createElement("div");
    conteneurhorraireHRE.id = "conteneurHRE";
    const horraireHRE = document.createElement("h2");
    const textHRE = document.createElement('h2');
    const texthorraireHRE = document.createTextNode('');
    const texteHRE = document.createTextNode('HRE : ');
    horraireHRE.appendChild(texthorraireHRE);
    textHRE.appendChild(texteHRE);
    conteneur.appendChild(conteneurhorraireHRE);
    conteneurhorraireHRE.appendChild(textHRE);
    conteneurhorraireHRE.appendChild(horraireHRE);

    divPrecedente.getElementsByClassName('heure')[0].addEventListener('change', function (event) {
        horraireHRE.innerText = event.target.value;
    });
}

function LancerPage(cheminJSON) {
    fetch(cheminJSON)
        .then(response => response.json())
        .then(json => listeDEtape(json))
        .catch(err => console.log(err))
}

path = document.currentScript.getAttribute('config');

LancerPage(path)


const button = document.querySelector("button");
const div = document.querySelector("main");

button.addEventListener("click", function () {

    const nom = prompt('Quel nom pour le document?');
    if (nom != null) {
        html2canvas(div).then((canvas) => {

            const imageDataURL = canvas.toDataURL("image/jpg");

            // Create a download link for the image
            const a = document.createElement("a");
            a.href = imageDataURL;
            a.download = nom;
            a.click();

        });
    };
});