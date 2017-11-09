window.onload=function() {
    var board =document.querySelector('.board-js');/*haciendo referencia a un objeto de html que es una tabla*/
    var btn =document.querySelector('.btn');
                                                   
board.addEventListener('click',addX);
btn.addEventListener('click',clear);
};  

var centinel= true;
function addX(event) {
    if( centinel){
        event.target.textContent = 'x';  /* es igual a innerHTML.....se puede agregar etiquetas <strong></strong>*/
    }else 
        event.target.textContent = 'o'; 
     centinel=!centinel;
}

 /*evento para limpiar el juego*/
function clear(event) {
       location.reload();
}