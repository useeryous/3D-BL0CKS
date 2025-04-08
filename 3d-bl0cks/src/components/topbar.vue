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
        position: absolute;
        width: absolute 100%;
        background-color: var(--green4);
        opacity: 0.7;
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