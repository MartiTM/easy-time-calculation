// Tableaux contenant les IDs des titres et des textes associés
let titres = ['titre0', 'titre1','titre2','titre3','titre4','titre5','titre6','titre7','titre8','titre9','titre10','titre11','titre12','titre13','titre14','titre15'];
let textes = ['txt0', 'txt1', 'txt2', 'txt3', 'txt4', 'txt5', 'txt6', 'txt7', 'txt8', 'txt9', 'txt10', 'txt11', 'txt12', 'txt13', 'txt14', 'txt15'];

// Boucle pour ajouter les écouteurs d'événements
for (let i = 0; i < titres.length; i++) {
    let titre = document.getElementById(titres[i]);
    let texte = document.getElementById(textes[i]);

    // Vérification de l'existence des éléments
    if (titre && texte) {
        titre.addEventListener('click', () => {
            if (texte.style.display == 'block') {
                texte.style.display = 'none';
            } else {
                texte.style.display = 'block';
            }
        });
    }
}

