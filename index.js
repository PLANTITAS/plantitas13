let iconobarra=document.getElementById('icono');
let cajazul=document.querySelector('#menumodocel');

iconobarra.addEventListener('click', function () {
    iconobarra.classList.toggle("active")

    if(iconobarra.className=="active"){
        cajazul.style.display="block"
    } else if(iconobarra.className==""){

        cajazul.style.display="none"
    }

})