
const hideHeadingBtn = document.querySelector('.hide-h');
const hideParagraghBtn = document.querySelector('.hide-p');
const showHeadingBtn = document.querySelector('.show-h');
const showParagraghBtn = document.querySelector('.show-p');
const lightOnBtn = document.querySelector('.on-bulb');
const lightOffBtn = document.querySelector('.off-bulb');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const img = document.querySelector('img');

hideHeadingBtn.addEventListener('click', hide_H2)
hideParagraghBtn.addEventListener('click', hide_P)
showHeadingBtn.addEventListener('click', show_H2)
showParagraghBtn.addEventListener('click', show_P)
lightOffBtn.addEventListener('click', bulb_Off)
lightOnBtn.addEventListener('click', bulb_On)


function hide_H2() {
    h2.style.display = 'none';
}

function hide_P() {
    p.style.display = 'none';
}

function show_H2() {
    h2.style.display = 'block';
}

function show_P() {
    p.style.display = 'block';
}

function bulb_On() {
    img.src = "https://www.tutch.co.uk/assets/images/bulbon.gif";
}

function bulb_Off() {
    img.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}