<template>
    <section class="mb-section-gap">
        <div class="flex items-center gap-4 mb-12">
            <span class="material-symbols-outlined text-primary text-4xl">verified</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface text-primary">Certifications</h2>
            <div class="flex-grow h-px bg-gradient-to-r from-outline-variant/50 to-transparent ml-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <!-- Cert 1 -->
            <div class="glass-panel ghost-border rounded-xl p-1 relative group cursor-pointer bg-surface-container">
                <div
                    class="bg-surface-container-high rounded-lg h-full p-6 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-2">
                    <div>
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <span class="material-symbols-outlined text-primary">school</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Prompt Engineering</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant mb-4">Advanced techniques for large
                            language models.</p>
                    </div>
                    <div class="mt-auto">
                        <p class="font-label-md text-label-md text-primary">Vanderbilt University</p>
                    </div>
                </div>
            </div>
            <!-- Cert 2 -->
            <div class="glass-panel ghost-border rounded-xl p-1 relative group cursor-pointer bg-surface-container">
                <div
                    class="bg-surface-container-high rounded-lg h-full p-6 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-2">
                    <div>
                        <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                            <span class="material-symbols-outlined text-secondary">model_training</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Deep Learning Specialization
                        </h3>
                        <p class="font-body-md text-body-md text-on-surface-variant mb-4">Neural Networks,
                            Hyperparameter Tuning, and CNNs.</p>
                    </div>
                    <div class="mt-auto">
                        <p class="font-label-md text-label-md text-secondary">DeepLearning.AI</p>
                    </div>
                </div>
            </div>
            <!-- Cert 3 -->
            <div class="glass-panel ghost-border rounded-xl p-1 relative group cursor-pointer bg-surface-container">
                <div
                    class="bg-surface-container-high rounded-lg h-full p-6 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-2">
                    <div>
                        <div
                            class="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center mb-6">
                            <span class="material-symbols-outlined text-primary-container">cloud</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">AWS Cloud Practitioner</h3>
                        <p class="font-body-md text-body-md text-on-surface-variant mb-4">Cloud computing fundamentals
                            and AWS infrastructure.</p>
                    </div>
                    <div class="mt-auto">
                        <p class="font-label-md text-label-md text-primary-container">Amazon Web Services</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center gap-4 mt-12">
            <div class="glass-panel ghost-border rounded-lg flex items-center p-1">
                <button
                    class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <div class="flex items-center gap-1 px-2">
                    <button
                        class="w-10 h-10 rounded bg-primary/10 text-primary font-label-md border border-primary/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">1</button>
                    <button
                        class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">2</button>
                    <button
                        class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">3</button>
                    <span class="text-on-surface-variant/50 px-2">...</span>
                    <button
                        class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">8</button>
                </div>
                <button
                    class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </section>
</template>