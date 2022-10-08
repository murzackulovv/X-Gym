const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const white = document.getElementById('white');
    const green = document.getElementById('green');
    const pink = document.getElementById('pink');
    const aqua = document.getElementById('aqua');

    console.log(red, blue, white,green,pink);
    const changeColorRed = function() {
        document.body.style.background = 'red';
        document.body.style.transition = '1s';
    }
    red.addEventListener('click', changeColorRed);

    const changeColorBlue = function() {
        document.body.style.background = 'blue';
        document.body.style.transition = '1s';
    }
    blue.addEventListener('click', changeColorBlue);

    const changeColorwhite = function() {
        document.body.style.background = 'white';
        document.body.style.transition = '1s';
    }
    white.addEventListener('click', changeColorwhite);

    const changeColorGreen = function() {
        document.body.style.background = 'green';
        document.body.style.transition = '1s';
    }
    green.addEventListener('click', changeColorGreen);

    const changeColorPink = function() {
        document.body.style.background = 'pink';
        document.body.style.transition = '1s';
    }
    pink.addEventListener('click', changeColorPink);

    const changeColorAqua = function() {
        document.body.style.background = 'aqua';
        document.body.style.transition = '1s';
    }
    aqua.addEventListener('click', changeColorAqua);


















    

let fontSize = 16;

if (localStorage.getItem( 'font-size' )) {
    fontSize = localStorage.getItem( 'font-size' );
}

document.querySelector( '.fonts-zoom__item' ).textContent = fontSize;
document.body.style.fontSize = fontSize + 'px';


document.querySelector( '.fonts-zoom__plus' ).onclick = () => {
    fontSize++;
    localStorage.setItem( 'font-size' , fontSize );
    document.querySelector( '.fonts-zoom__item' ).textContent = fontSize;
    document.body.style.fontSize = fontSize + 'px';
}

document.querySelector( '.fonts-zoom__minus' ).onclick = () => {
    fontSize--;
    localStorage.setItem( 'font-size' , fontSize );
    document.querySelector( '.fonts-zoom__item' ).textContent = fontSize;
    document.body.style.fontSize = fontSize + 'px';
}









let day = document.querySelector("#day");
let time = document.querySelector("#time");
let priority = document.querySelector("#priority");
let total = document.querySelector("#total");

let input_text = document.querySelector("#input__text");

let result = document.querySelector("#result")
let add = document.querySelector("#add")
let show_text = document.querySelector("#show")

let i = 0;

add.addEventListener("click", (e) =>{
    i++;

    if(input_text.value === "") return           
    createDeleteElements(i + '. Расписание на: '+ day.value + ' - '+ time.value + ' - ' + input_text.value + '. Приоритет ' + priority.value)
    input_text.value = "" ;
})

function createDeleteElements(value){
    let li = document.createElement("li")
    li.className = "lii"
    li.textContent = value;
    total.textContent = i

    result.appendChild(li);


}

result.style.display = "none";

show_text.addEventListener('click', function(){
    result.style.display = "block";
})