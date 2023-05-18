window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var initialOffset = header.offsetTop;
  
  if (window.scrollY > initialOffset) {
    header.classList.add('header--sombra');
  } else {
    header.classList.remove('header--sombra');
  }
});

 // JavaScript para hacer scroll suave al hacer clic en el enlace "Back to Top"
        document.addEventListener('DOMContentLoaded', function() {
          var backToTopLink = document.querySelector('.back-to-top');
          
          backToTopLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          });
        });

        
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

document.addEventListener('DOMContentLoaded', function() {
function adjustMarginsAndTypography() {
    var windowWidth = window.innerWidth;

    // Calcular los valores proporcionales según el ancho de la ventana
    var marginPercentage = (windowWidth >= 1000) ? 20 : (windowWidth > 1000) ? 50 : 20;
    var fontSizePercentage = (windowWidth >= 900) ? 120 : (windowWidth > 600) ? 80 : 70;

    // Aplicar los estilos dinámicamente
    var textoElement = document.querySelector('.contenedor__texto');
    textoElement.style.marginLeft = marginPercentage + '%';
    textoElement.style.marginRight = marginPercentage + '%';
    textoElement.style.fontSize = fontSizePercentage + '%';
}

// Llamar a la función inicialmente y en cada cambio de tamaño de la ventana
window.addEventListener('resize', adjustMarginsAndTypography);
adjustMarginsAndTypography();
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustMarginsAndTypography() {
        var windowWidth = window.innerWidth;
    
        // Calcular los valores proporcionales según el ancho de la ventana
        var marginPercentage = (windowWidth >= 1000) ? 20 : (windowWidth > 1000) ? 10 : 10;
        var fontSizePercentage = (windowWidth >= 900) ? 400 : (windowWidth > 600) ? 400 : 200;
    
        // Aplicar los estilos dinámicamente
        var textoElement = document.querySelector('.contenedor__titulo');
        textoElement.style.marginLeft = marginPercentage + '%';
        textoElement.style.marginRight = marginPercentage + '%';
        textoElement.style.fontSize = fontSizePercentage + '%';
    }
    
    // Llamar a la función inicialmente y en cada cambio de tamaño de la ventana
    window.addEventListener('resize', adjustMarginsAndTypography);
    adjustMarginsAndTypography();
    });

