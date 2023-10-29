             //JE RECUPERE TOUT LES ELEMENTS 
var article = document.querySelectorAll('.objet');
var BambaArticle = document.querySelector('.Bamba');
var prixTotal = document.getElementById('total-prix'); 

//TOUT LES BOUTTONS
for (var i = 0; i < article.length; i++) {

//RECUPERATION DES BOUTONS ET DES PRIX
    let moins = article[i].children[1]; //boutons -
    let plus = article[i].children[3]; //bouton +
    let btnDelete = article[i].children[4];// bouton supprimer
    let articleNum = article[i].children[2];//nombre d article
    let quantiteproduit = parseInt(articleNum.innerText);//la quantite
    let prix = article[i].children[7].children[0];//prix total tout les articles
    let prixUnit = article[i].children[6];//prix unitaire
    let prixdelarticle = parseInt(prixUnit.innerText);//prix de l article en texte
    let Fav = article[i].children[5];//bouton favoris


//DIMINUER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
    moins.addEventListener('click', function () {
        if (quantiteproduit > 0) {
            quantiteproduit--;
            articleNum.innerHTML = quantiteproduit;
            prix.innerText = quantiteproduit * prixdelarticle;
            calSum(); 
        }
    });


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
    plus.addEventListener('click', function () {
        quantiteproduit++;
        articleNum.innerHTML = quantiteproduit;
        prix.innerText = quantiteproduit * prixdelarticle;
        calSum(); 
    });

    // Pour le boutton suprimer
    btnDelete.addEventListener('click', function (e) {
        var BambaItem = e.target.BambaElement;
        BambaItem.remove();
        calSum(); 
    });
    

//AJOUTER FAVORIS ET CHANGER LE COULEUR QUAND J APPUIE DESSUS 
    const colors = ['red']; 
    let currentIndex = 0;

    Fav.addEventListener('click', function () {
        Fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert(`Added to favorite`)
    });
}

//CALCUL DES PRIX prixprixprixtotaux
function calSum() {
    let total = 0;

    // Parcourez chaque article pour calculer le total
    for (var i = 0; i < article.length; i++) {
        total += parseInt(article[i].querySelector('.prix').innerText.replace('FCFA', '')) * parseInt(article[i].querySelector('.quantiteproduit').innerText);
    }

    prixTotal.textContent = total.toFixed(2) + ' FCFA';   
}

    /*FIN DU CODE*/   

  

  
