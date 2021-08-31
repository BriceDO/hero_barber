let nav = document.getElementById('navigation');
let liens = document.getElementsByClassName('liensNav');
let icon = document.getElementById('icon');

window.onresize = colorHeader;
window.onload = colorHeader;

// Lorsqu'on va resize ou load la page, on va appeler la fonction colorHeader
function colorHeader() { 

    let myWidth = window.innerWidth;

    window.onscroll = function() {

            // Si la largeur est supérieur à 768px alors on change le background de notre menu...
            if(myWidth > 768) {
                
            // En écran large, si on scroll a plus de 980px, on change les couleurs de la nav
            if(document.documentElement.scrollTop > 980) {
                nav.style.background = '#373737';
                liens[0].style.color = "white";
                liens[1].style.color = "white";
                liens[2].style.color = "white";
                liens[3].style.color = "white";
            } else {
                nav.style.background = '#F0EAd6';
                liens[0].style.color = "#373737";
                liens[1].style.color = "#373737";
                liens[2].style.color = "#373737";
                liens[3].style.color = "#373737";
            }

        // ... sinon si on est en dessous de 768px, on laisse la couleur beige
        } else {
            nav.style.background = '#F0EAd6';
            liens[0].style.color = "#373737";
            liens[1].style.color = "#373737";
            liens[2].style.color = "#373737";
            liens[3].style.color = "#373737";
        }
    } 
}

function toggleNav() {
    // Si la className de nav est vide, alors on lui rajoute la classe responsive
    if(nav.className === "") {
        nav.className += "responsive";
    // Si elle a une classe, on lui enlève
    } else {
        nav.className = "";
    }
}

// JQUERY

// Si la nav est ouverte, alors on lui enlève la classe responsive
$('html').click(function(){
    if (nav.className += "responsive"){
        nav.className = "";
    }
});

// Quand on va cliquer sur l'icone hamburger,
// ça va stopper la propagation de la function du click html
// et va nous permettre d'utiliser la fonction toggleNav
$('#icon').click(function(event){
    event.stopPropagation();
});

/* Smooth Scroll */

// L'icone amène à "nos valeurs"
$('#arrow').click(function(){
    $('html, body').animate({
        scrollTop: $('#section-about').offset().top -50
    }, 'slow')
})

// Nav Accueil amène à "accueil"
$('.liensNav:nth-child(1)').click(function(){
    $('html, body').animate({
        scrollTop: $('#accueil').offset().top +50
    }, 'slow')
})

// Nav Nos Valeurs amène à "nos valeurs"
$('.liensNav:nth-child(2)').click(function(){
    $('html, body').animate({
        scrollTop: $('#section-about').offset().top -50
    }, 'slow')
})

// Nav tarifs amène à tarifs
$('.liensNav:nth-child(3)').click(function(){
    $('html, body').animate({
        scrollTop: $('#tarifs').offset().top -50
    }, 'slow')
})

// Nav contact amène à contact
$('.liensNav:nth-child(4)').click(function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top -50
    }, 'slow')
})