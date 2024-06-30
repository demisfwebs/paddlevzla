//PRELOADER

window.onload = function(){
    var contenedor = document.getElementById('contenedor-carga')
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';}

var swiper = new Swiper(".mySwiper", {
     effect: "cube",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "1.1",
      cubeEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".ctn-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){

    width = sliderIndividual[0].clientWidth;

})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform ease-in-out .7s"
    contador++;

    if(contador == sliderIndividual.length){

        setTimeout(function(){

            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s"
            contador=1;

        },1500)}}