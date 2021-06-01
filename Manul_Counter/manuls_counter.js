let counterDisplayElem=document.querySelector('.counter-display');
let manulCounter=document.querySelector('.manuls-plus')

let manulsAmmount=0;

// updateDisplay();
var gifka = document.getElementById("gif")
var counter = document.getElementById("manul")


manulCounter.addEventListener("click",()=>{
    manulsAmmount++;
    updateDisplay()
});

function updateDisplay(){
    counter.innerHTML = manulsAmmount + " Manul"
    gifka.src = "manul2.gif"

};
