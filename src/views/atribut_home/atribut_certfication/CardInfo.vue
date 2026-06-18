<script setup lang="ts">
interface Certificate {
    id: number;
    name: string;
    organization: string;
    tanggal: string;
    credential: string;
    urlcredential: string;
}

defineProps<{
    isOpen: boolean;
    certificate: Certificate | null;
}>()

const emit = defineEmits<{
    (e: 'close'): void;
}>()

</script>

<template>
    <div :class="{ 'opacity-0 pointer-events-none invisible': !(isOpen && certificate) }"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300" id="cert-modal">
        <div class="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-md transition-opacity duration-300"
            :class="{ 'opacity-0': !(isOpen && certificate), 'opacity-100': isOpen && certificate }"></div>
        <div class="glass-panel ghost-border rounded-xl w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl">
            <div class="absolute top-4 right-4">
                <button class="text-on-surface-variant hover:text-primary transition-colors" @click="emit('close')">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <div class="p-8 md:p-10">
                <div class="flex flex-col md:flex-row gap-8 items-start">
                    <div class="w-20 h-20 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                        <span class="material-symbols-outlined text-secondary text-4xl">model_training</span>
                    </div>
                    <div class="grow">
                        <div class="flex items-center gap-3 mb-2">
                            <h2 class="font-headline-lg text-headline-lg text-on-surface">{{ certificate?.name }}
                            </h2>
                            <span
                                class="px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-primary text-xs font-label-md uppercase tracking-widest">Verified</span>
                        </div>
                        <p class="font-headline-md text-headline-md text-secondary mb-6">{{ certificate?.organization }}
                        </p>
                        <div class="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <p
                                    class="font-label-md text-label-md text-on-surface-variant/50 uppercase tracking-widest mb-1">
                                    Issue Date</p>
                                <p class="font-body-md text-body-md text-on-surface">{{ certificate?.tanggal }}</p>
                            </div>
                            <div>
                                <p
                                    class="font-label-md text-label-md text-on-surface-variant/50 uppercase tracking-widest mb-1">
                                    Credential ID</p>
                                <p class="font-body-md text-body-md text-on-surface">{{ certificate?.credential }}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-4">
                            <a :href="certificate?.urlcredential" target="_blank"
                                class=" bg-linear-to-r from-primary-container to-secondary-container text-on-primary-container px-6 py-3 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all font-label-md text-label-md">
                                View Original Certificate
                            </a>
                            <button
                                class="border border-outline-variant/30 text-on-surface px-6 py-3 rounded-lg font-bold hover:bg-surface-container-high transition-all font-label-md text-label-md"
                                @click="emit('close')">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>