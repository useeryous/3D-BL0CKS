//hide holder and setup
let holder = document.getElementById('holder');
holder.hidden = true;

//gets all the buttons to be clicked and when clicked swicthes

let allBtn = document.getElementById('allBtn').addEventListener('click', showAll());
let gamesBtn = document.getElementById('gamesBtn').addEventListener('click', showGames());
let appsBtn = document.getElementById('appsBtn').addEventListener('click', showApps());
let NSFWBtn = document.getElementById('NSFWBtn').addEventListener('click', showNSFW());
let otherBtn = document.getElementById('otherBtn').addEventListener('click', showOthers());

//all the apps ti be show or hiden
const games = document.getElementsByClassName('game');
const apps = document.getElementsByClassName('app');
const NSFW = document.getElementsByClassName('NSFW');
const others = document.getElementsByClassName('other');



//all functions to hide the apps and the rest of other functions
function showAll() {
    games.hidden = false;
    apps.hidden = false;
    NSFW.hidden = false;
    others.hidden = false;
}

function showGames() {
    games.hidden = false;
    apps.hidden = true;
    NSFW.hidden = true;
    others.hidden = true;
}

function showApps() {
    games.hidden = true;
    apps.hidden = false;
    NSFW.hidden = true;
    others.hidden = true;
}

function showNSFW() {
    ggames.hidden = true;
    apps.hidden = true;
    NSFW.hidden = false;
    others.hidden = true;
}

function showOthers() {
    games.hidden = true;
    apps.hidden = true;
    NSFW.hidden = true;
    others.hidden = false;
}

