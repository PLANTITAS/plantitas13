var grover=document.querySelector(".grover")
var marcelo=document.querySelector(".marcelo")
var diego=document.querySelector(".diego")
var rai=document.querySelector(".rai")

grover.addEventListener("click", function () {
    alert("GROVER PEREIRA")
    alert("JEFE DEL PROYECTO Y PROGRAMADOR FULL STACK")
})
marcelo.addEventListener("click", function () {
    alert("MARCELO MAMANGUEÑO")
    alert("ARQUITECTO,DESAROLLADOR DE SOFTWARE")
})
diego.addEventListener("click", function () {
    alert("DIEGO ESCALERA")
    alert("TESTER DE LA PAGINA WEB")
})
rai.addEventListener("click", function () {
    alert("RAI SOLIZ")
    alert("ANALISTA DE SOFTWARE")
})







document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("show-menu");
    });
});



