document.addEventListener('DOMContentLoaded', function() {
    // Gestion des boutons de navigation dans l'en-tête
    const buttonIds = ['navButton1', 'navButton2', 'navButton3', 'navButton4', 'navButton5'];

    for (let i = 0; i < buttonIds.length; i++) {
        const button = document.getElementById(buttonIds[i]);
        if (button) {
            button.addEventListener('click', function() {
                // Supprimer la classe active de tous les boutons
                for (let j = 0; j < buttonIds.length; j++) {
                    document.getElementById(buttonIds[j])?.classList.remove('active');
                }
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');
            });
        }
    }

    // Gestion des onglets (Présentation, Langues, Compétences)
    const ongletIds = ['buttonPresentation', 'buttonLangues', 'buttonCompetences'];
    const panneauIds = ['contenuPresentation', 'contenuLangues', 'contenuCompetences'];

    for (let i = 0; i < ongletIds.length; i++) {
        const ongletButton = document.getElementById(ongletIds[i]);
        const panneau = document.getElementById(panneauIds[i]);

        if (ongletButton && panneau) {
            ongletButton.addEventListener('click', function() {
                // Supprimer la classe active de tous les onglets et panneaux
                for (let j = 0; j < ongletIds.length; j++) {
                    document.getElementById(ongletIds[j])?.classList.remove('active');
                    document.getElementById(panneauIds[j])?.classList.remove('active');
                }

                // Ajouter la classe active au bouton et au panneau correspondant
                this.classList.add('active');
                panneau.classList.add('active');
            });
        }
    }
});
