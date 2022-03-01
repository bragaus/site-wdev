<template>
    <footer>

        <!-- :key, :href, :alt... serve para passar um valor js para a propriedade -->
        <a class="socialLink" v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link">
            <img :title="socialLink.label" :src="socialLink.icon" :alt="socialLink.label">
        </a>

    </footer>
</template>

<script>
import api from '@/services/api.js';

// mounted é um evento que acontece no ciclo de vida da pagina, no caso esse é quando ela acabar de ser montada
export default {
    name: 'MainFooter',
    data() {
        return {
            socialLinks: []
        }
    },
    mounted() {
        api.get('/social-links.json').then(response => {
            this.socialLinks = response.data;
        });
    }
}
</script>

<style scoped>

    footer {
        height: 60px;
        width: 100%;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>