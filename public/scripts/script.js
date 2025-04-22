function matrixGreen() {
    //color vars
    let black = "#000000";
    let green1 = "#42B124";
    let green2 = "#004800";
    let green3 = "#004100";
    let green4 = "#140710";
    let green5 = "#005E00";

    //setup
    let label = document.getElementsByTagName('label');
    let smallCyberButton = document.getElementsByClassName('smallCyberButton');
    let form = document.getElementsByTagName('form');
    let select = document.getElementsByTagName('select');
    let option = document.getElementsByTagName('option');
    let hr = document.getElementsByTagName('hr');

    //background
    let body = document.body;
    let con = document.getElementById('con');
    let matrixCodeSpace =  document.getElementById('matrixCodeSpace');

    /*topbar and other elements selector*/

    //title
    let a = document.getElementsByTagName('a');
    let topbar = document.getElementById('topbar');
    let title = document.getElementById('title');
    let TT = document.getElementById('TT');

    //button holder
    let btnHolder = document.getElementById('btnHolder');
    let btn = document.getElementsByClassName('btn');
    let btn__content = document.getElementsByClassName('btn__content');
    let btn__label = document.getElementsByClassName('btn__label');

    //the setting button set up
    let settingButton = document.getElementById('settingButton');
    let SB = document.getElementById('SB');


    /*the main area*/

    let main = document.getElementById('main');

    let MBtn = document.getElementsByClassName('MBtn');
    let MBtnG = document.getElementsByClassName('MBtnG');
    let MBtnL = document.getElementsByClassName('MBtnL');

    /*the screen holder*/

    let screenHolder = document.getElementById('screenHolder');
    let screen = document.getElementById('screen');
    let bottomRow = document.getElementById('bottomRow');
    let exitSS = document.getElementById('exitS');


    /* the setting page thing*/

    let settingHolder = document.getElementById('settingHolder');
    let content = document.getElementById('content');
    let titleHolder = document.getElementById('titleHolder');
    let exitS = document.getElementById('exitS');


    /* the other tab for the proxy and webpages */

    let other = document.getElementById('other');
    let proxyScreen = document.getElementById('proxyScreen');
    let otherTopbar = document.getElementById('otherTopbar');
    let smallThing = document.getElementById('smallThing');
    let searchBar = document.getElementById('searchBar');

    //styling the webpage

    body.style.padding = "0px";
    body.style.margin = "0px";
    body.style.backgroundColor = black;

    con.style.width = "auto";
    con.style.height = "auto";
    con.style.position = "relative";

    matrixCodeSpace.style.width = "auto";
    matrixCodeSpace.style.height = "auto";

    topbar.style.backgroundColor = green4;
    topbar.style.height = "50px";
    topbar.style.width = "100%";
    topbar.style.position = "absolute";
    topbar.style.top = "15PXpx";
    topbar.style.left = "15px";
    topbar.style.borderRadius = "100px";
    topbar.style.paddingLeft = "50ox";
}



//LOADING WEBPAGE
matrixGreen();

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

let exit = document.getElementById('exitP').addEventListener('click', () => {
    holder.style.display = 'none';
    settingHolder.style.display = 'none';
    otherScreen.style.display = 'none';
    main.style.display = 'flex';
});

let googleBtn = document.getElementById("google").addEventListener("click", () => {
    main.style.display = "none";
    holder.style.display = "none";
    settingHolder.style.display = "none";
    otherScreen.style.display = "flex";
}); 

//the setup for webpage
holder.style.display = 'none';
settingHolder.style.display = 'none';
otherScreen.style.display = 'none';

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