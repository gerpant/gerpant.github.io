// funcion para hacer el menu responsivo 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // funcion del boton ir arriba

  window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})