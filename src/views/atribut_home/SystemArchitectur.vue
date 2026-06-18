<template>
    <section class="mb-section-gap">
        <div class="flex items-center gap-4 mb-12">
            <span class="material-symbols-outlined text-primary text-4xl">architecture</span>
            <h2 class="font-headline-lg text-headline-lg text-primary">System Architectures</h2>
            <div class="grow h-px bg-linear-to-r from-outline-variant/50 to-transparent ml-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <!-- Languages -->
            <div
                class="glass-panel ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary/30 transition-colors bg-surface-container">
                <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="material-symbols-outlined text-6xl">code</span>
                </div>
                <h3 class="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">Languages</h3>
                <div class="flex flex-wrap gap-3 relative z-10">
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-primary text-primary bg-primary/5">Python
                        Expert</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">JavaScript</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">SQL</span>
                </div>
            </div>
            <!-- Frameworks -->
            <div
                class="glass-panel ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-secondary/30 transition-colors bg-surface-container">
                <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="material-symbols-outlined text-6xl">memory</span>
                </div>
                <h3 class="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">Frameworks</h3>
                <div class="flex flex-wrap gap-3 relative z-10">
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-secondary text-secondary bg-secondary/5">Langchain</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-secondary text-secondary bg-secondary/5">PyTorch</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">Keras</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">TensorFlow</span>
                </div>
            </div>
            <!-- Specialties -->
            <div
                class="glass-panel ghost-border rounded-xl p-8 relative overflow-hidden group hover:border-primary-container/30 transition-colors bg-surface-container">
                <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span class="material-symbols-outlined text-6xl">psychology</span>
                </div>
                <h3 class="font-headline-md text-headline-md text-on-surface mb-6 relative z-10">Specialties</h3>
                <div class="flex flex-wrap gap-3 relative z-10">
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-primary-container text-primary-container bg-primary-container/5">NLP</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-primary-container text-primary-container bg-primary-container/5">Computer
                        Vision</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">VLM</span>
                    <span
                        class="font-label-md text-label-md px-3 py-1 rounded border border-outline text-on-surface-variant">ML
                        / DL</span>
                </div>
            </div>
        </div>
    </section>
</template>