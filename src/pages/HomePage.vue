<template>
    <main>
        <div class="text-top">A Wired e o mundo real são a mesma coisa</div>
        <a href="https://br.pinterest.com/lugaracidental/_saved/" target="_blank">
            <img id="exodus" src="https://i.pinimg.com/originals/90/df/05/90df05c56feffe48d9fc42ff17c9af82.png" alt="a um passo da abdução">
        </a>
        <div class="text-bottom">Deitado na lua; afundado nas projeções; vi que tudo é passageiro.</div>
    </main>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {

    }
}
</script>

<style scoped>

   main {
       background-color: var(--color-background-home);
       justify-content: center;
       align-items: center;
   }     

    .text-top {
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    #exodus {
        width: 100px;
    }

    @media (min-width: 700px) {
        #exodus {
            width: 300px;
        }
    }
</style>