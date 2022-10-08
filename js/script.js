const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const white = document.getElementById('white');
    const green = document.getElementById('green');
    const pink = document.getElementById('pink');
    const aqua = document.getElementById('aqua');

    console.log(red, blue, white,green,pink);
    const changeColorRed = function() {
        document.body.style.background = '#ff9999';
        document.body.style.transition = '1s';
    }
    red.addEventListener('click', changeColorRed);

    const changeColorBlue = function() {
        document.body.style.background = '#66ccff';
        document.body.style.transition = '1s';
    }
    blue.addEventListener('click', changeColorBlue);

    const changeColorwhite = function() {
        document.body.style.background = 'white';
        document.body.style.transition = '1s';
    }
    white.addEventListener('click', changeColorwhite);

    const changeColorGreen = function() {
        document.body.style.background = '#99ff66';
        document.body.style.transition = '1s';
    }
    green.addEventListener('click', changeColorGreen);

    const changeColorPink = function() {
        document.body.style.background = '#ff99ff';
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












    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active');
        $('.content').toggleClass('content_active');
      })








