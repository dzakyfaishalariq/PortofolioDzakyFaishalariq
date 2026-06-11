<script setup lang="ts">
import FiturPostHero from './atribut_blog/FiturPostHero.vue';
import PostGrid from './atribut_blog/PostGrid.vue';

</script>
<template>
    <header class="mb-16">
        <h1 class="font-display-lg text-display-lg text-on-background mb-4">Tulisan &amp; Insight</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Catatan teknis, eksplorasi eksperimental dalam Machine Learning, dan observasi mengenai rekayasa perangkat
            lunak. Sebuah arsip pemikiran terstruktur.
        </p>
    </header>
    <!-- Fitur Post Hero -->
    <FiturPostHero />
    <!-- Post Grid -->
    <PostGrid />
</template>