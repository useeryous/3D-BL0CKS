//hide holder and setup
let holder = document.getElementById('screenHolder');
let settingHolder = document.getElementById('settingHolder');

let main = document.getElementById('main');

let games = document.getElementsByClassName('game');
let apps = document.getElementsByClassName('app');
let NSFW = document.getElementsByClassName('NSFW');
let others = document.getElementsByClassName('other');

//the setup for webpage
holder.style.display = 'none';
settingHolder.style.display = 'none';
holder.style.display = 'none';

//gets all the buttons to be clicked and when clicked swicthes

let settingButton = document.getElementById('SB').addEventListener('click', () => {
    settingHolder.style.display = 'block';
    main.style.display = 'none';
})
let XButtonS = document.getElementById('exitS').addEventListener('click', () => {
    settingHolder.style.display = 'none';
    main.style.display = 'flex';
})

let allBtn = document.getElementById('allBtn').addEventListener('click', () => {
    games.style.display = 'block';
    apps.style.display = 'block';
    NSFW.style.display = 'block';
    others.style.display = 'block';
});
let gamesBtn = document.getElementById('gamesBtn').addEventListener('click', () => {
    games.style.display = 'block';
    apps.style.display = 'none';
    NSFW.style.display = 'none';
    others.style.display = 'none';
});
let appsBtn = document.getElementById('appsBtn').addEventListener('click', () => {
    games.style.display = 'none';
    apps.style.display = 'block';
    NSFW.style.display = 'none';
    others.style.display = 'none';
});
let NSFWBtn = document.getElementById('NSFWBtn').addEventListener('click', () => {
    games.style.display = 'none';
    apps.style.display = 'none';
    NSFW.style.display = 'block';
    others.style.display = 'none';
});
let otherBtn = document.getElementById('otherBtn').addEventListener('click', () => {
    games.style.display = 'none';
    apps.style.display = 'none';
    NSFW.style.display = 'none';
    others.style.display = 'block';
});