<template>
    <div id="main">
        <img id="background" alt="matrix backgrounf" src="./assets/Matrix wallpaper gif.gif">
        <TopBar/>
    </div>
</template>

<script>
    import TopBar from './topbar.vue'; 
    import MainPageOne from './mainpage.vue';

    export default {
        name: 'MainPage',
        components: {
            TopBar,
            MainPageOne
        }
    }
</script>

<style>
    #background {
        height: auto;
        max-width: 100%;
    }
</style>