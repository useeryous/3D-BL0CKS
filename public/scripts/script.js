function matricCoderGreen() {
    const matrixCodeSpace = document.getElementById( "matrixCodeSpace" );
    const matrixContext = matrixCodeSpace.getContext( "2d" );
    // Setting the canvas width same as the page width
    matrixCodeSpace.width = document.body.offsetWidth;
    // Getting the canvas width and height to now work with them from now on
    const width = matrixCodeSpace.width;
    const height = matrixCodeSpace.height;
    // Filling the background with pure black
    matrixContext.fillStyle = "#000";
    matrixContext.fillRect( 0, 0, width, height );
    // Setting 20 columns and all y positions on 0
    const columns = Math.floor( width / 5 ) + 1;
    const yPosition = Array( columns ).fill( 0 );
    
    function matrix()
    {   // Painting the canvas background with black but on a really low opacity, just 1 as value, and these paintings are gonna stack and very progressively hidding the one underneath
        matrixContext.fillStyle = "#0001";
        matrixContext.fillRect( 0, 0, width, height );
        // Choosing the green color for the emerging appearing chars and setting a font
        matrixContext.fillStyle = "#0f0";
        matrixContext.font = "8pt monospace";
        
        yPosition.forEach( ( y, index ) =>
        {   // For every 'y' position of every column, generate a random char and set it on the right spot
            const text = String.fromCharCode( Math.random() * 126 );
            const x = index * 20;
            matrixContext.fillText( text, x, y );
            // Now, if y position is > 100 the cursor returns on 0
            if( y > 100 + Math.random() * 10000 )
                yPosition[index] = 0;
            else // otherwise, it increments by 20
                yPosition[index] = y + 20;
        } );
    }
    // Finally, setting the matrix function to execute every 50 milliseconds in a loop
    setInterval( matrix, 76 );
}

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
    let matrixCodeSpace = document.getElementById('matrixCodeSpace');

    /*topbar and other elements selector*/

    //title
    let link = document.getElementById('link');
    let topbar = document.getElementById('topbar');
    let title = document.getElementById('title');
    let TT = document.getElementsByClassName('TT');

    //button holder
    let btnHolder = document.getElementById('btnHolder');
    let btn = document.getElementsByClassName('btn');
    let btn__content = document.getElementsByClassName('btn__content');
    let btn__label = document.getElementsByClassName('btn__label');

    //the setting button set up
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
    body.style.paddingRight = "3%";
    body.style.margin = "0px";
    body.style.backgroundColor = black;

    con.style.width = "auto";
    con.style.height = "auto";
    con.style.position = "relative";

    matrixCodeSpace.style.width = "auto";
    matrixCodeSpace.style.height = "auto";
    matrixCodeSpace.style.position = "relative";

    topbar.style.backgroundColor = green4;
    topbar.style.height = "max-content";
    topbar.style.width = "100%", "absolute";
    topbar.style.position = "absolute";
    topbar.style.top = "15px";
    topbar.style.left = "15px";
    topbar.style.borderRadius = "100px";
    topbar.style.paddingTop = "15px";
    topbar.style.paddingLeft = "75px";
    topbar.style.opacity = "0.7";
    topbar.style.display = "flex";

    link.style.textDecoration = "none";

    title.style.display = "block";
    title.style.marginBottom = "15px";

    for (let i = 0; i < TT.length; i++) {
        TT[i].style.color = green1;
        TT[i].style.margin = "0px";
    }

    btnHolder.style.width = "max-content";
    btnHolder.style.display = "flex";
    btnHolder.style.gap = "10px";

    for (let i = 0; i < btn.length; i++) {
        btn[i].style.width = "130px";
        btn[i].style.height = "60px";
        btn[i].style.border = "0";
        btn[i].style.outline = "none";
        btn[i].style.backgroundColor = green1;
        btn[i].style.opacity = "0.7";
        btn[i].style.cursor = "pointer";
        btn[i].style.position = "relative";
        btn[i].style.fontFamily = "Tomorrow, sans-serif";
        btn[i].style.fontSize = ".85rem";
        btn[i].style.textTransform = "uppercase";
        btn[i].style.color = green1;
        btn[i].style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";
    }


    for (let i = 0; i < btn__content.length; i++) {
    btn__content[i].style.display = "flex";
    btn__content[i].style.alignItems = "center";
    btn__content[i].style.justifyContent = "center";
    btn__content[i].style.position = "absolute";
    btn__content[i].style.top = "2px";
    btn__content[i].style.left = "2px";
    btn__content[i].style.right = "2px";
    btn__content[i].style.bottom = "2px";
    btn__content[i].style.backgroundColor = green4;
    btn__content[i].style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";
    }

    for (let i = 0; i < btn__label.length; i++) {
    btn__label[i].style.height = "10px";
    btn__label[i].style.fontSize = ".40rem";
    btn__label[i].style.position = "absolute";
    btn__label[i].style.bottom = "-4px";
    btn__label[i].style.right = "8%";
    btn__label[i].style.padding = "0 5px";
    btn__label[i].style.backgroundColor = green4;
    btn__label[i].style.opacity = "0.7";
    btn__label[i].style.zIndex = "3";
    }

    SB.style.width = "35px";
    SB.style.height = "35px";
    SB.style.marginLeft = "10px";
    SB.onmouseover = () => {
        SB.style.transition = "0.2s";
        SB.style.transform = "scale(1.2)";
    }
    SB.onmouseout = () => {
        SB.style.transition = "0.2s";
        SB.style.transform = "scale(1)";
    }
}


//LOADING WEBPAGE
matricCoderGreen();
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