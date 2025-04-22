function matrixGreen() {
    //color vars
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

    con.style.width = "auto";
    con.style.height = "auto";

}