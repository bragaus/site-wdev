<template>
    <header>
        <nav class="container">
            <a href="/"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="logo"></a>
            <img v-on:click="lidarComMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="menu-botton">
            <div v-on:click="lidarComMenu" id="menu-overlay" v-if="menuActive"></div>

            <!-- :class é uma indicação de codigo javascript pode passar uma função, objeto, etc para ser processado.
            :class="{active:menuActive} se menuActive for verdadeiro, sera adicionado a classe active"-->
            <div id="menu-items" :class="{active:menuActive}">

                <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="menu-logo">

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/videos">Videos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>

            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MainHeader',
    data() {
        return {
            menuActive: false 
        }
    },
    methods: {
        lidarComMenu: function(){
            this.menuActive = !this.menuActive;
        }
    }
}
</script>

<!--scoped = Tudo que for escrito de css aqui estara restrito apenas para essa pagina-->
<style scoped>
    header {
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    #logo {
        width: 130px;
    }

    #menu-botton{
        width: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
    }

    #menu-logo {
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active {
        display: flex;
    }

    ul {
        list-style: none;
        text-align: center;
    }

    ul li a {
        color: var(--color-text-light);
    }

    ul li {
        margin: 20px 0px;
    }

    @media (min-width: 700px) {
        #menu-botton,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            height: 60px;
            align-items: center;
        }

        ul li {
            margin: 0;
            margin-left: 10px;
        }
    }
</style>