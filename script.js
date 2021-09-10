
const display1 = document.querySelector('.kenzie1');
const display2 = document.querySelector('.kenzie2');
const display3 = document.querySelector('.kenzie3');

const bordaBox = document.querySelector('.bordaBox');
const bordaPlaca = document.querySelector('.bordaPlaca')

const botao = document.querySelector('.spinButton');


function spin(){

    display1.style.animation = '';
    display2.style.animation = '';
    display3.style.animation = '';
    display1.style.animationIterationCount = '';
    display2.style.animationIterationCount = '';
    display3.style.animationIterationCount = '';
    bordaBox.style.animation = "";
    bordaBox.style.animationIterationCount = "";
    bordaPlaca.style.animation = "";
    bordaPlaca.style.animationIterationCount = "";
   
    setTimeout(() => {
        display1.style.animation = `spinRoll 0.${Math.floor(Math.random()*(8-6)+6)}s`;
        display2.style.animation = `spinRoll 0.${Math.floor(Math.random()*(8-6)+6)}s`;
        display3.style.animation = `spinRoll 0.${Math.floor(Math.random()*(8-6)+6)}s`;
        display1.style.animationIterationCount = `${Math.floor(Math.random()*(7-3)+3)}`;
        display2.style.animationIterationCount = `${Math.floor(Math.random()*(7-3)+3)}`;
        display3.style.animationIterationCount = `${Math.floor(Math.random()*(7-3)+3)}`;
        bordaBox.style.animation = "blink 0.1s";
        bordaBox.style.animationIterationCount = "45";
        bordaPlaca.style.animation = "blink 0.1s";
        bordaPlaca.style.animationIterationCount = "45";
    }, 5);

    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    d1 = Math.floor(Math.random() *6)
    d2 = Math.floor(Math.random() *6)
    d3 = Math.floor(Math.random() *6)

    mostraResultado(d1);
    mostraResultado(d2);
    mostraResultado(d3);

    function mostraResultado(value){
        switch (value) {
            case 0:
                if(value == d1){
                    display1.style.marginTop = '0px';
                }else if(value ==d2){
                    display2.style.marginTop = '0px';    
                }else{
                    display1.style.marginTop = '0px';
                }
                break;
            case 1:
                if(value == d1){
                    display1.style.marginTop = '-105px';
                }else if(value ==d2){
                    display2.style.marginTop = '-105px';    
                }else{
                    display1.style.marginTop = '-105px';
                }
                break;
            case 2:
                if(value == d1){
                    display1.style.marginTop = '-210px';
                }else if(value ==d2){
                    display2.style.marginTop = '-210px';    
                }else{
                    display1.style.marginTop = '-210px';
                }
                break;
            case 3:
                if(value == d1){
                    display1.style.marginTop = '-315px';
                }else if(value ==d2){
                    display2.style.marginTop = '-315px';    
                }else{
                    display1.style.marginTop = '-315px';
                }
                break;
            case 4:
                if(value == d1){
                    display1.style.marginTop = '-420px';
                }else if(value ==d2){
                    display2.style.marginTop = '-420px';    
                }else{
                    display1.style.marginTop = '-420px';
                }
                break;
            case 5:
                if(value == d1){
                    display1.style.marginTop = '-525px';
                }else if(value ==d2){
                    display2.style.marginTop = '-525px';    
                }else{
                    display1.style.marginTop = '-525px';
                }
                break;
        
            default:
                break;
        }
    }
    
   
}


botao.addEventListener('click', function(){
    spin();
});