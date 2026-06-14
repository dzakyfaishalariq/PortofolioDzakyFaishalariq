<script setup lang="ts">
import { all_certificat } from '@/data/cetification';
import { computed, ref, type ComputedRef } from 'vue';
import CardInfo from './atribut_certfication/CardInfo.vue';

interface Certificate {
    id: number;
    name: string;
    organization: string;
    tanggal: string;
    credential: string;
    urlcredential: string;
}

const curentPage = ref(1);
const itemsPerPage = ref(6);

// untuk tampilan modal
const isModalOpen = ref(false);
const selectCertificate = ref<Certificate | null>(null)

const totalPages: ComputedRef<any> = computed(() => {
    return Math.ceil(all_certificat.value.length / itemsPerPage.value);
})

const displayedCertification = computed(() => {
    const start = (curentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return all_certificat.value.slice(start, end)
})

const nextPage = () => {
    if (curentPage.value < totalPages.value) {
        curentPage.value++
    }
}

const prevPage = () => {
    if (curentPage.value > 1) {
        curentPage.value--
    }
}

const goToPage = (pageNumber: number) => {
    curentPage.value = pageNumber;
}

const visiblePages = computed(() => {
    const total = totalPages.value
    const curent = curentPage.value

    if (total <= 7) {
        return Array.from({
            length: total
        }, (_, i) => i + 1)
    }

    const pages: (number | string)[] = []

    pages.push(1)

    if (curent <= 4) {
        pages.push(2, 3, 4, 5)
        pages.push("...")
        pages.push(total)
    } else if (curent >= total - 3) {
        pages.push("...")
        pages.push(total - 4, total - 3, total - 2, total - 1)
        pages.push(total)
    } else {
        pages.push("...")
        pages.push(curent - 1, curent, curent + 1)
        pages.push("...")
        pages.push(total)
    }
    return pages
})


const openDetail = (cert: Certificate) => {
    selectCertificate.value = cert;
    isModalOpen.value = true;
}

const closeDetail = () => {
    isModalOpen.value = false;
    selectCertificate.value = null;
}

</script>
<template>
    <section class="mb-section-gap">
        <div class="flex items-center gap-4 mb-12">
            <span class="material-symbols-outlined text-primary text-4xl">verified</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface text-primary">Certifications</h2>
            <div class="flex-grow h-px bg-gradient-to-r from-outline-variant/50 to-transparent ml-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div v-for="certificat_saya in displayedCertification" :key="certificat_saya.id">
                <!-- Cert 1 -->
                <div class="glass-panel ghost-border rounded-xl p-1 relative group cursor-pointer bg-surface-container"
                    @click="openDetail(certificat_saya)">
                    <div
                        class="bg-surface-container-high rounded-lg h-full p-6 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-y-2">
                        <div>
                            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <span class="material-symbols-outlined text-primary">school</span>
                            </div>
                            <h3 class="font-headline-md text-headline-md text-on-surface mb-2">{{ certificat_saya.name
                                }}</h3>
                            <p class="font-body-md text-body-md text-on-surface-variant mb-4">{{
                                certificat_saya.credential }}</p>
                            <a class=" mb-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-primary/10"
                                active-class="text-primary border-b-2 border-primary"
                                :href="certificat_saya.urlcredential" target="_blank">Klik</a>
                        </div>
                        <div class="mt-auto">
                            <p class="font-label-md text-label-md text-primary">{{ certificat_saya.organization }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center gap-4 mt-12">
            <div class="glass-panel ghost-border rounded-lg flex items-center p-1">
                <button @click="prevPage" :disabled="curentPage === 1"
                    class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <div class="flex items-center gap-1 px-2">
                    <template v-for="page in visiblePages" :key="page">
                        <button v-if="typeof page == 'number'" @click="goToPage(page)"
                            class="w-10 h-10 rounded bg-primary/10 text-primary font-label-md border border-primary/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">{{
                                page }}</button>
                        <span v-else class="text-on-surface-variant/50 px-2">...</span>
                    </template>
                </div>
                <button @click="nextPage" :disabled="curentPage === totalPages"
                    class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </section>
    <!-- card -->
    <CardInfo :is-open="isModalOpen" :certificate="selectCertificate" @close="closeDetail" />
</template>