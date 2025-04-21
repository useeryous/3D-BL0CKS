//hide holder and setup
let holder = document.getElementById('screenHolder');
let settingHolder = document.getElementById('settingHolder');
let otherScreen = document.getElementById('other');

let main = document.getElementById('main');

let games = document.getElementsByClassName('game');
let apps = document.getElementsByClassName('app');
let NSFW = document.getElementsByClassName('NSFW');
let others = document.getElementsByClassName('other');

//sets the screen to be the main screen

let googleBtn = document.getElementById("google").addEventListener("click", () => {
    main.style.display = "none";
    holder.style.display = "none";
    settingHolder.style.display = "none";
    otherScreen.style.display = "flex";
}); 

//the setup for webpage
holder.style.display = 'none';
settingHolder.style.display = 'none';

//gets all the buttons to be clicked and when clicked swicthes

let exitScreen = document.getElementById('exitSSS').addEventListener('click', () => {
    holder.style.display = 'none';
    settingHolder.style.display = 'none';
    otherScreen.style.display = 'none';
    main.style.display = 'flex';
});

let settingButton = document.getElementById('SB').addEventListener('click', () => {
    settingHolder.style.display = 'block';
    holder.style.display = 'none';
    main.style.display = 'none';
    otherScreen.style.display = 'none';
})
let XButtonS = document.getElementById('exitS').addEventListener('click', () => {
    settingHolder.style.display = 'none';
    holder.style.display = 'none';
    otherScreen.style.display = 'none';
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