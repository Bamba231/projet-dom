              /*DEBUT DU SCRIPT*/
//JE RECUPERE TOUT LES ELEMENTS 
var article = document.querySelectorAll('.item');
var ParentArticle = document.querySelector('.parent');
var prixTotal = document.getElementById('total-price'); 

//AUGMENTATION , DIMINUTION , SUPRESSION ET FAVORITE
for (var i = 0; i < article.length; i++) {

//RECUPERATION DES BOUTONS ET DES PRIX
    let moins = article[i].children[1]; //boutons -
    let plus = article[i].children[3]; //bouton +
    let btnDelete = article[i].children[4];// bouton supprimer
    let articleNum = article[i].children[2];//nombre d article
    let quantity = parseInt(articleNum.innerText);//la quantite
    let prix = article[i].children[7].children[0];//prix total tout les articles
    let prixUnit = article[i].children[6];//prix unitaire
    let ArticlePrice = parseInt(prixUnit.innerText);//prix de l article en texte
    let Fav = article[i].children[5];//bouton favoris


//DECRIMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
    moins.addEventListener('click', function () {
        if (quantity > 0) {
            quantity--;
            articleNum.innerHTML = quantity;
            prix.innerText = quantity * ArticlePrice;
            calSum(); 
        }
    });


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
    plus.addEventListener('click', function () {
        quantity++;
        articleNum.innerHTML = quantity;
        prix.innerText = quantity * ArticlePrice;
        calSum(); 
    });

//SUPPRIMER UN ARTICLE ET METTRE A JOUR
    btnDelete.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        calSum(); 
    });

//AJOUT EN FAVORIS ET CHANGEMENT DE COULEUR
    const colors = ['red']; 
    let currentIndex = 0;

    Fav.addEventListener('click', function () {
        Fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert(`Added to favorite`)
    });
}

//CALCUL DES PRIX TOTAUX
function calSum() {
    let total = 0;

    // Parcourez chaque article pour calculer le total
    for (var i = 0; i < article.length; i++) {
        total += parseInt(article[i].querySelector('.price').innerText.replace('$', '')) * parseInt(article[i].querySelector('.quantity').innerText);
    }

    prixTotal.textContent = total.toFixed(2) + ' $';   
}

    /*FIN DU SCRIPT*/   

  