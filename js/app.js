window.onload=function() {
    var board =document.querySelector('.board-js');/*haciendo referencia a un objeto de html que es una tabla*/

                                                   /*solo se modifica una clase*/
board.addEventListener('click',addX);
};    /*agregando un evento ,se puede agregar varios eventos*/
   var centinel= true;
   function addX(event) {
    if(centinel){
        event.target.textContent = 'x'; 
    }else 
        event.target.textContent = 'o'; 
     centinel=!centinel;
    /* es igual a innerHTML.....se puede agregar etiquetas <strong></strong>*/
}
