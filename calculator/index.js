const input = document.querySelector('.text');
function result(){
     const question  = input.value;
     input.value = eval(question);
}
function remove(){
     const question  = input.value;
     input.value = question.slice(0,question.length-1)
}
function clear(){
     const question  = input.value;
     input.value ="";
}
function keys(key){
    const i  = input.value;

    switch(key) {
        case '=':
            result()
            break;
        case 'X':
             remove()
             break;
         case 'clr':
             clear()
             break;
        default :
           input.value += key;
    }
}