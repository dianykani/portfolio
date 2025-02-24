document.addEventListener('DOMContentLoaded', function() {
    const buttonIds=['navButton1','navButton2','navButton3','navButton4','navButton5'];
    
    for (let i=0;i<buttonIds.length;i++) {
        const button=document.getElementById(buttonIds[i]);
        if (button) {
            button.addEventListener('click',function() {

                for (let j=0;j<buttonIds.length;j++) {
                    const btn=document.getElementById(buttonIds[j]);
                    if (btn) btn.classList.remove('active');
                }
                this.classList.add('active'); //pour attirer l'attention sur l'élément quand on clique
            });
        }
    }                  //cette partie c'est pour les boutons de navigation (ceux de l'en-tête)

    const ongletIds=['buttonPresentation','buttonLangues','buttonCompetences'];   //onglets
    const panneauIds=['contenuPresentation','contenuLangues','contenuCompetences'];

    for (let i=0;i<ongletIds.length;i++) {
        const ongletButton=document.getElementById(ongletIds[i]);
        const panneau=document.getElementById(panneauIds[i]);

        if (ongletButton && panneau) {
            ongletButton.addEventListener('click', function() {
                for (let j=0;j<ongletIds.length;j++) {
                    const btn=document.getElementById(ongletIds[j]);
                    const pnl=document.getElementById(panneauIds[j]);
                    if (btn) btn.classList.remove('active');
                    if (pnl) pnl.classList.remove('active');
                }
                this.classList.add('active') ;
                panneau.classList.add('active');
            });
        }
    }
})

