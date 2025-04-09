<template>
    <div id="topbar">
        <div id="title">
            <p id="titleText">3D-BL0CKS</p>
        </div>
        <div id="buttonHolder">
            <div class="buttonTitle" id="allBtn">
                <p>allBtn</p>
            </div>
            <div class="buttonTitle" id="gamesBtn">
                <p>games</p>
            </div>
            <div class="buttonTitle" id="appsBtn">
                <p>apps</p>
            </div>
            <div class="buttonTitle" id="NSFWBtn">
                <p>NSFW</p>
            </div>
            <div class="buttonTitle" id="otherBtn">
                <p>other</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
    }
</script>

<style scoped>

    @font-face {
        font-family: glitch;
        src: url(./assets/fonts/sdglitchdemo.zip);
    }

    :root {
        --green1: #04EC00;
        --green2: #005200;
        --green3: #003000;
        --green4: #002113;
        --green5: #003113;
        --green6: #003811;
        --green7: #0B380D;
        --green8: #154509;
        --green9: #155D07;
        --green10: #087700;
        --green11: #00A804;
        --green12: #00B200;
        --green13: #00AE00;
        --green14: #039C03;
    }
    /*use var() to assign a color to a element*/

    #topbar {
        display: flex;
        position: absolute;
        width: absolute 100%;
        background-color: var(--green4);
        opacity: 0.7;
    }

    .buttonTitle {
        width: 230px;
        height: 60px; 
        border: 0;
        outline: none;
        background-color: var(--green1);
        cursor: pointer;
        position: relative;
        font-family: Tomorrow, sans-serif;
        font-size: .85rem;
        text-transform: uppercase;
        color: var(--green4);
        opacity: 0.7;
        clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0); 
    }

    .buttonTitle__content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background-color: var(--green4);
        clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    }

    #buttonHolder {
        display: flex;
        gap: 25px;
        align-items: center;
        justify-content: center;
    }

    #titleText {
        font-size: 60px;
        font-family: glitch;
    }

    p {
        margin: 0px;
        color: var(--green1);
    }
</style>