window.onload=function() {
    var board =document.querySelector('.board-js');/*haciendo referencia a un objeto de html que es una tabla*/                                         
    board.addEventListener('click',addX);

    var btn =document.querySelector('.btn');
    btn.addEventListener('click',clear);

  
var centinel= true;
var mov = 0;
function addX(event) {
    if(event.target.textContent === ''){
        if( centinel){
          event.target.textContent = 'X';
          event.target.style.color='yellow'; /* es igual a innerHTML.....se puede agregar etiquetas <strong></strong>*/
        }else{
           event.target.textContent = 'O'; 
           event.target.style.color='purple';
        }
        mov++;

        if (mov >= 5 && mov < 10){
            if (winner(event.target.textContent)) {
                document.querySelector('#msg').textContent = 'EL GANADOR ES ' +''+ event.target.textContent;
            }else if(winner(event.target.textContent) == false && mov == 9){
                document.querySelector('#msg').textContent = 'NO HAY GANADOR';
            }
        }
        centinel = !centinel;
    }
}

function winner(play) {
    var centinel =false;
    if (rowP(1,2,3,play) || 
        rowP(4,5,6,play) ||  
        rowP(7,8,9,play) ||
        rowP(1,5,9,play) || 
        rowP(3,5,7,play) || 
        rowP(1,4,7,play) ||
        rowP(2,5,8,play) ||
        rowP(3,6,9,play)){
        centinel= true;
        board.removeEventListener('click',addX);
    }
    return centinel;
}

function rowP(a,b,d,play) {
    var centinel = false;
    if(box(a) == play && box(b) == play && box(d) == play){
     centinel = true;
    }return centinel;
    
}

function box(num){
    return document.getElementById('c' + num).textContent;

}

 /*evento para limpiar el juego*/
function clear(event) {
       location.reload();
}
};  