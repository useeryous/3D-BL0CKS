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

/*
 *      .... NO! ...                  ... MNO! ...
 *    ..... MNO!! ...................... MNNOO! ...
 *  ..... MMNO! ......................... MNNOO!! .
 * ..... MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!! .
 *  ... !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO! ....
 *     ...... ! MMMMMMMMMMMMMPPPPOOOOIII! ! ...
 *    ........ MMMMMMMMMMMMPPPPPOOOOOOII!! .....
 *    ........ MMMMMOOOOOOPPPPPPPPOOOOMII! ...
 *     ....... MMMMM..    OPPMMP    .,OMI! ....
 *      ...... MMMM::   o.,OPMP,.o   ::I!! ...
 *          .... NNM:::.,,OOPM!P,.::::!! ....
 *           .. MMNNNNNOOOOPMO!!IIPPO!!O! .....
 *          ... MMMMMNNNNOO:!!:!!IPPPPOO! ....
 *            .. MMMMMNNOOMMNNIIIPPPOO!! ......
 *           ...... MMMONNMMNNNIIIOO!..........
 *        ....... MN MOMMMNNNIIIIIO! OO ..........
 *     ......... MNO! IiiiiiiiiiiiI OOOO ...........
 *   ...... NNN.MNO! . O!!!!!!!!!O . OONO NO! ........
 *    .... MNNNNNO! ...OOOOOOOOOOO .  MMNNON!........
 *    ...... MNNNNO! .. PPPPPPPPP .. MMNON!........
 *       ...... OO! ................. ON! .......
 *          ................................
 */

function matrixGreen() {

    /*setup for webpage*/


    //custom fonts

    let cyberPunk = new FontFace('cyberPunk', 'url(https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap)')

    document.fonts.add(cyberPunk);

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
    let topbarLabel = document.getElementById('topbarLabel');
    let topbarContent = document.getElementById('topbarContent');
    let title = document.getElementById('title');
    let TT = document.getElementsByClassName('TT');
    let logo = document.getElementById('logo');
    let skull = document.getElementById('skull');

    //button holder
    let btnHolder = document.getElementById('btnHolder');
    let btn = document.getElementsByClassName('btn');
    let btn__content = document.getElementsByClassName('btn__content');
    let btn__label = document.getElementsByClassName('btn__label');

    //the setting button set up
    let SB = document.getElementById('SB');

    /*the main area*/

    let main = document.getElementById('main');
    let mainContent = document.getElementById('mainContent');
    let mainLabel = document.getElementById('mainLabel');

    let MBtn = document.getElementsByClassName('MBtn');
    let MBtnG = document.getElementsByClassName('MBtnG');
    let MBtnL = document.getElementsByClassName('MBtnL');

    let MI = document.getElementsByClassName('MI');

    /*the screen holder*/

    let screenHolder = document.getElementById('screenHolder');
    let screen = document.getElementById('screen');
    let bottomRow = document.getElementById('bottomRow');
    let gameScreen = document.getElementById('gameScreen');
    let exitSS = document.getElementById('exitS');

    /* the setting page thing*/

    let settingHolder = document.getElementById('settingHolder');
    let content = document.getElementById('content');
    let titleHolder = document.getElementById('titleHolder');
    let exitS = document.getElementById('exitS');

    /* the other tab for the proxy and webpages */

    let other = document.getElementById('other');
    let proxyScreen = document.getElementById('ProxyScreen');
    let otherTopbar = document.getElementById('otherTopbar');
    let smallThing = document.getElementsByClassName('smallThing');
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
    topbar.style.justifyContent = "space-around";
    topbar.style.position = "absolute";
    topbar.style.top = "15px";
    topbar.style.left = "15px";
    topbar.style.paddingTop = "15px";
    topbar.style.paddingLeft = "40px";
    topbar.style.opacity = "0.7";
    topbar.style.display = "flex";
    topbar.style.width = "95%";
    topbar.style.height = "125px";
    topbar.style.border = "0";
    topbar.style.outline = "none";
    topbar.style.backgroundColor = green1;
    topbar.style.opacity = "0.7";
    topbar.style.cursor = "default";
    topbar.style.color = green1;
    topbar.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    topbarContent.style.display = "flex";
    topbarContent.style.alignItems = "center";
    topbarContent.style.justifyContent = "space-around";
    topbarContent.style.position = "absolute";
    topbarContent.style.top = "2px";
    topbarContent.style.left = "2px";
    topbarContent.style.right = "2px";
    topbarContent.style.bottom = "2px";
    topbarContent.style.backgroundColor = green4;
    topbarContent.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    topbarLabel.style.height = "10px";
    topbarLabel.style.fontSize = ".40rem";
    topbarLabel.style.position = "absolute";
    topbarLabel.style.bottom = "-4px";
    topbarLabel.style.right = "8%";
    topbarLabel.style.padding = "0 5px";
    topbarLabel.style.backgroundColor = green4;
    topbarLabel.style.opacity = "0.7";
    topbarLabel.style.zIndex = "3";
    topbarLabel.style.fontFamily = 'cyberPunk';
    

    link.style.textDecoration = "none";

    title.style.display = "block";
    title.style.marginBottom = "15px";

    //52N 3PX

    for (let i = 0; i < TT.length; i++) {
        TT[i].style.color = green1;
        TT[i].style.fontSize =  "11px";
        TT[i].style.margin = "0px";
    }

    logo.style.textAlign = "left";
    logo.style.widthm = "260px";

    skull.style.width = "75px";
    skull.style.height = "75px";

    btnHolder.style.width = "max-content";
    btnHolder.style.display = "flex";
    btnHolder.style.alignItems = "center";
    btnHolder.style.gap = "10px";

    for (let i = 0; i < btn.length; i++) {
        btn[i].style.width = "80px";
        btn[i].style.height = "40px";
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
    //btn__content[i].style.fontFamily = "cyberPunk";
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
    btn__label[i].style.fontFamily = "cyberPunk";
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

    main.style.width = "95%", "absolute";
    main.style.height = "max-content";
    main.style.position = "absolute";
    main.style.top = "175px";
    main.style.left = "15px";
    main.style.display = "flex";
    main.style.backgroundColor = green4;
    main.style.paddingTop = "15px";
    main.style.paddingLeft = "50px";
    main.style.opacity = "0.7";
    main.style.paddingBottom = "15px";

    main.style.backgroundColor = green4;
    main.style.justifyContent = "space-around";
    main.style.position = "absolute";
    main.style.paddingTop = "15px";
    main.style.paddingLeft = "40px";
    main.style.opacity = "0.7";
    main.style.display = "flex";
    main.style.width = "95%";
    main.style.height = "56%";
    main.style.border = "0";
    main.style.outline = "none";
    main.style.backgroundColor = green1;
    main.style.opacity = "0.7";
    main.style.cursor = "default";
    main.style.color = green1;
    main.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    mainContent.style.display = "flex";
    mainContent.style.padding = "15px";
    mainContent.style.position = "absolute";
    mainContent.style.top = "2px";
    mainContent.style.left = "2px";
    mainContent.style.right = "2px";
    mainContent.style.bottom = "2px";
    mainContent.style.backgroundColor = green4;
    mainContent.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    mainLabel.style.height = "10px";
    mainLabel.style.fontSize = ".40rem";
    mainLabel.style.position = "absolute";
    mainLabel.style.bottom = "-4px";
    mainLabel.style.right = "8%";
    mainLabel.style.padding = "0 5px";
    mainLabel.style.backgroundColor = green4;
    mainLabel.style.opacity = "0.7";
    mainLabel.style.zIndex = "3";
    mainLabel.style.fontFamily = cyberPunk;

    for (let i = 0; i < MBtn.length; i++) {
        MBtn[i].style.display = "flex";
        MBtn[i].style.width = "85px";
        MBtn[i].style.height = "85px";
        MBtn[i].style.border = "0";
        MBtn[i].style.outline = "none";
        MBtn[i].style.backgroundColor = green1;
        MBtn[i].style.opacity = "0.7";
        MBtn[i].style.cursor = "pointer";
        MBtn[i].style.position = "relative";
        MBtn[i].style.fontFamily = "Tomorrow, sans-serif";
        MBtn[i].style.fontSize = ".85rem";
        MBtn[i].style.textTransform = "uppercase";
        MBtn[i].style.color = green1;
        MBtn[i].style.clipPath = "polygon(70% 0, 100% 25%, 100% 100%, 30% 100%, 0% 75%, 0 0)";
        MBtn[i].style.yindex = "100"
    }
    for (let i = 0; i < MBtnG.length; i++) {
        MBtnG[i].style.display = "flex";
        MBtnG[i].style.alignItems = "center";
        MBtnG[i].style.justifyContent = "center";
        MBtnG[i].style.position = "absolute";
        MBtnG[i].style.top = "2px";
        MBtnG[i].style.left = "2px";
        MBtnG[i].style.right = "2px";
        MBtnG[i].style.bottom = "2px";
        MBtnG[i].style.backgroundColor = green4;
        MBtnG[i].style.clipPath = "polygon(70% 0, 100% 25%, 100% 100%, 30% 100%, 0% 75%, 0 0)";
    }
    for (let i = 0; i < MBtnL.length; i++) {
        MBtnL[i].style.height = "10px";
        MBtnL[i].style.fontSize = ".40rem";
        MBtnL[i].style.position = "absolute";
        MBtnL[i].style.bottom = "-4px";
        MBtnL[i].style.right = "8%";
        MBtnL[i].style.padding = "0 5px";
        MBtnL[i].style.backgroundColor = green4;
        MBtnL[i].style.opacity = "0.7";
        MBtnL[i].style.zIndex = "3";
    }
    for (let i = 0; i < MI.length; i++) {
        MI[i].style.marginLeft = "auto";
        MI[i].style.marginRight = "auto";
        MI[i].style.marginTop = "100%" - "25%";
        MI[i].style.opacity = "1";
        MI[i].style.zIndex = "3";
        MI[i].style.width = "75px";
        MI[i].style.height = "75px";
    }

    exitSS.style.width = "35px";
    exitSS.style.height = "35px";

    screen.style.width = "95%";
    screen.style.height = "max-content";

    gameScreen.style.width = "100%";
    gameScreen.style.height = "85%";

    bottomRow.style.width = "100%";
    bottomRow.style.height = "15%";
    bottomRow.style.display = "flex";

    settingHolder.style.width = "95%";
    settingHolder.style.height = "max-content";
    settingHolder.style.position = "absolute";
    settingHolder.style.top = "175px";
    settingHolder.style.left = "15px";

    settingHolder.style.backgroundColor = green4;
    settingHolder.style.justifyContent = "space-around";
    settingHolder.style.position = "absolute";
    settingHolder.style.paddingTop = "15px";
    settingHolder.style.paddingLeft = "40px";
    settingHolder.style.opacity = "0.7";
    settingHolder.style.display = "flex";
    settingHolder.style.width = "95%";
    settingHolder.style.height = "56%";
    settingHolder.style.border = "0";
    settingHolder.style.outline = "none";
    settingHolder.style.backgroundColor = green1;
    settingHolder.style.opacity = "0.7";
    settingHolder.style.cursor = "default";
    settingHolder.style.color = green1;
    settingHolder.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    content.style.padding = "15px";
    content.style.position = "absolute";
    content.style.top = "2px";
    content.style.left = "2px";
    content.style.right = "2px";
    content.style.bottom = "2px";
    content.style.backgroundColor = green4;
    content.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    titleHolder.style.display = "flex";
    titleHolder.style.padding = "15px";
    titleHolder.style.alignItems = "center";

    exitS.style.marginLeft = "80%";

    for (let i = 0; i < hr.length; i++) {
        hr[i].style.borderColor = green1;
        hr[i].style.color = green1;
        hr[i].style.backgroundColor = green1;
    }
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = green1;
        label[i].style.fontFamily = cyberPunk;
    }
    for (let i = 0; i < smallCyberButton.length; i++) {
        smallCyberButton[i].style.backgroundColor = green4;
        smallCyberButton[i].style.position = "absolute";
        smallCyberButton[i].style.padding = "5px";
        smallCyberButton[i].style.opacity = "0.7";
        smallCyberButton[i].style.width = "70px";
        smallCyberButton[i].style.height = "30px";
        smallCyberButton[i].style.border = "0";
        smallCyberButton[i].style.outline = "none";
        smallCyberButton[i].style.backgroundColor = green1;
        smallCyberButton[i].style.opacity = "0.7";
        smallCyberButton[i].style.cursor = "default";
        smallCyberButton[i].style.color = green4;
        smallCyberButton[i].style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";
        smallCyberButton[i].style.textAlign = "center";
    }
    for (let i = 0; i < form.length; i++) {
        form[i].style.display = "flex";
        form[i].style.alignItems = "center";
        form[i].style.color = green1;
        form[i].style.fontFamily = cyberPunk;
        form[i].style.marginBottom = "10px";
    }
    for (let i = 0; i < select.length; i++) {
        select[i].style.padding = "5px";
        select[i].style.opacity = "0.7";
        select[i].style.display = "flex";
        select[i].style.marginLeft = "10px";
        select[i].style.width = "150px";
        select[i].style.height = "40px";
        select[i].style.border = "0";
        select[i].style.outline = "none";
        select[i].style.backgroundColor = green1;
        select[i].style.opacity = "0.7";
        select[i].style.cursor = "default";
        select[i].style.color = green4;
        select[i].style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";
    }
    for (let i = 0; i < option.length; i++) {
        option[i].style.color = green1;
        option[i].style.fontFamily = cyberPunk;
        option[i].style.backgroundColor = green4;

    }

    other.style.width = "95%";
    other.style.height = "max-content";
    other.style.position = "absolute";
    other.style.top = "175px";
    other.style.left = "15px";
    other.style.backgroundColor = green4;
    other.style.flexDirection = "column";

    other.style.backgroundColor = green4;
    other.style.position = "absolute";
    other.style.paddingTop = "15px";
    other.style.opacity = "0.7";
    other.style.display = "static";
    other.style.width = "95%";
    other.style.height = "70%";
    other.style.border = "0";
    other.style.outline = "none";
    other.style.backgroundColor = green2;
    other.style.opacity = "0.7";
    other.style.cursor = "default";
    other.style.color = green1;

    otherTopbar.style.display = "flex";
    otherTopbar.style.height = "10%";
    otherTopbar.style.width = "80%";
    
    for (let i = 0; i < smallThing.length; i++) {
        smallThing[i].style.width = "35px";
        smallThing[i].style.height = "35px";
    }

    searchBar.style.width = "250px";
    searchBar.style.height = "35px";
    searchBar.style.backgroundColor = green4;
    searchBar.style.opacity = "0.7";
    searchBar.style.color = green1;
    searchBar.style.border = "3", green1, "solid";

    searchBar.style.clipPath = "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)";

    proxyScreen.style.width = "100%";
    proxyScreen.style.height = "100%";
    proxyScreen.style.backgroundColor = green4;
    proxyScreen.style.opacity = "0.7";
    proxyScreen.style.color = green1;
    proxyScreen.style.border = "0";
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


//the topn row buttons for putting different categories of apps and games
let allBtn = document.getElementById('allBtn').addEventListener('click', () => {
    for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'block';
    }
    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'block';
    }
    for (let i = 0; i < NSFW.length; i++) {
        NSFW[i].style.display = 'block';
    }
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'block';
    }
});
let gamesBtn = document.getElementById('gamesBtn').addEventListener('click', () => {
    for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'block';
    }
    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'none';
    }
    for (let i = 0; i < NSFW.length; i++) {
        NSFW[i].style.display = 'none';
    }
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }
});
let appsBtn = document.getElementById('appsBtn').addEventListener('click', () => {
    for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'none';
    }
    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'block';
    }
    for (let i = 0; i < NSFW.length; i++) {
        NSFW[i].style.display = 'none';
    }
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }
});
let NSFWBtn = document.getElementById('NSFWBtn').addEventListener('click', () => {
    for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'none';
    }
    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'none';
    }
    for (let i = 0; i < NSFW.length; i++) {
        NSFW[i].style.display = 'block';
    }
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }
});
let otherBtn = document.getElementById('otherBtn').addEventListener('click', () => {
    for (let i = 0; i < games.length; i++) {
        games[i].style.display = 'none';
    }
    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'none';
    }
    for (let i = 0; i < NSFW.length; i++) {
        NSFW[i].style.display = 'none';
    }
    for (let i = 0; i < others.length; i++) {
        others[i].style.display = 'block';
    }
});