//hide holder and setup
let holder = document.getElementById('screenHolder');
let settingHolder = document.getElementById('settingHolder');
holder.style.display = 'none';
settingHolder.style.display = 'none';
holder.style.display = 'none';

//gets all the buttons to be clicked and when clicked swicthes

let allBtn = document.getElementById('allBtn').addEventListener('click', showAll);
let gamesBtn = document.getElementById('gamesBtn').addEventListener('click', showGames);
let appsBtn = document.getElementById('appsBtn').addEventListener('click', showApps);
let NSFWBtn = document.getElementById('NSFWBtn').addEventListener('click', showNSFW);
let otherBtn = document.getElementById('otherBtn').addEventListener('click', showOthers);

//all the apps ti be show or hiden
const games = document.getElementsByClassName('game');
const apps = document.getElementsByClassName('app');
const NSFW = document.getElementsByClassName('NSFW');
const others = document.getElementsByClassName('other');



//all functions to hide the apps and the rest of other functions

showAll = () => {
    games.style.display = 'block';
    apps.style.display = 'block';
    NSFW.style.display = 'block';
    others.style.display = 'block';
}

showGames = () => {
    games.style.display = 'block';
    apps.style.display = 'none';
    NSFW.style.display = 'none';
    others.style.display = 'none';
}

showApps = () => {
    games.style.display = 'none';
    apps.style.display = 'block';
    NSFW.style.display = 'none';
    others.style.display = 'none';
}

showNSFW = () => {
    games.style.display = 'none';
    apps.style.display = 'none';
    NSFW.style.display = 'block';
    others.style.display = 'none';
}

showOthers = () => {
    games.style.display = 'none';
    apps.style.display = 'none';
    NSFW.style.display = 'none';
    others.style.display = 'block';
}

/*function showAll() {
*    games.hidden = false;
*    apps.hidden = false;
*    NSFW.hidden = false;
*    others.hidden = false;
}*/


