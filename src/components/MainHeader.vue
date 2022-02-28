<template>
    <header>
        <nav class="container">
            <a href="/"><img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt="WDEV" id="logo"></a>
            <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="Abrir menu" id="menu-botton">
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MainHeader'
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
    }

    #logo {
        width: 130px;
    }

    #menu-botton{
        width: 30px;
    }
</style>