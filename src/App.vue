<script setup lang="ts"></script>

<template>
  <nav
    class="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
    <div class="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
      <div class="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
        FAISHALARIQ.AI
      </div>
      <div class="hidden md:flex items-center gap-8">
        <router-link to="/" class="pb-1 font-label-md text-label-md hover:bg-primary/10 transition-colors"
          active-class="text-primary border-b-2 border-primary">Home</router-link>
        <router-link to="/project"
          class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary/10"
          active-class="text-primary border-b-2 border-primary">Projects</router-link>
        <router-link to="/blog"
          class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary/10"
          active-class="text-primary border-b-2 border-primary">Blog</router-link>
      </div>
      <div class="hidden md:flex">
        <button
          class="font-label-md text-label-md bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
          Contact
        </button>
      </div>
      <button class="md:hidden text-on-surface-variant hover:text-primary">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>

  <main class="flex-grow pt-32 pb-section-gap px-margin-desktop max-w-container-max mx-auto w-full">
    <router-view></router-view>
  </main>

  <footer class="bg-surface-container-lowest w-full py-base border-t border-outline-variant/20 mt-auto">
    <div
      class="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 max-w-container-max mx-auto gap-gutter">
      <div class="font-headline-md text-headline-md text-primary">
        FAISHALARIQ.AI
      </div>
      <div class="font-label-md text-label-md text-on-surface-variant">
        © 2024 Dzaky Faishalariq. Engineered for Intelligence.
      </div>
      <div class="flex gap-6">
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100"
          href="#">LinkedIn</a>
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100"
          href="#">Instagram</a>
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100"
          href="#">Facebook</a>
        <a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100"
          href="#">WhatsApp</a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
