<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { supabase } from '@/data/conect_supabase';
import { generatePaginationPages } from '@/utils/paginattion';

interface project_table {
    id: number;
    project_name: string;
    Description: string;
    source_code: string;
    documentation: string;
    start_date: string;
    end_date: string;
    created_at: string;
}

const projects = ref<project_table[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const currentPage = ref<number>(1)
const itemsPerPage = ref<number>(6)
const totalItems = ref<number>(0)

const totalPages = computed(() => {
    return Math.ceil(totalItems.value / itemsPerPage.value)
})

const fatchProject = async () => {
    try {
        loading.value = true
        error.value = null
        // hitung baris
        const from = (currentPage.value - 1) * itemsPerPage.value
        const to = from + itemsPerPage.value - 1
        // get data
        const { data, error: supabaseError, count } = await supabase
            .from('project_table')
            .select('*', { count: 'exact' })
            .range(from, to)
            .order('id', { ascending: true })

        if (supabaseError) throw supabaseError;
        projects.value = data as project_table[]
        if (count !== null) {
            totalItems.value = count
        }

        projects.value = data;

    } catch (err) {
        if (err instanceof Error) {
            error.value = err.message
        } else {
            error.value = String(err)
        }
    } finally {
        loading.value = false
    }
}

// fungsi navigasi halaman
const keHalamanSelanjutnya = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        fatchProject()
    }
}

const keHalamanSebelumnya = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        fatchProject()
    }
}

const goToPage = (pageNumber: number | string) => {
    if (typeof pageNumber !== 'number') return
    if (pageNumber < 1 || pageNumber > totalPages.value) return
    currentPage.value = pageNumber
    fatchProject()
}

const visiblePages = computed(() => {
    return generatePaginationPages(currentPage.value, totalPages.value)
})

onMounted(() => {
    fatchProject()
})

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <!-- Project Card 1: Medical Imaging -->
        <article v-for="value in projects"
            class="bg-surface-container-low/60 backdrop-blur-md border border-outline-variant/50 rounded-xl overflow-hidden flex flex-col group relative glass-glow transition-all duration-500 hover:border-primary/50 hover:bg-surface-container-high/80">
            <div class="h-56 relative overflow-hidden bg-black/50">
                <img alt="Medical Imaging AI"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
                    data-alt="A high-tech digital visualization of a medical X-ray scan being analyzed by an artificial intelligence system. The scan is displayed on a dark, sleek computer interface with glowing cyan and neon blue overlay grids and bounding boxes highlighting structural anomalies. The aesthetic is futuristic and clinical, utilizing a deep space background palette with high-contrast, luminous medical data points. The mood is analytical and precise, reflecting advanced healthcare technology and computer vision capabilities in a modern dark-mode environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClJGuGSUzed2snaB6xVmpPUUoxgqPGMFTGO0RRXEA7Wze08etsQOo84Mmth_HqB5OlTqyYP2rnUXrIldEmfnsrUGAILk8VbTjMpcg5Icgxgpo2kj54eiUieht0vPviUnLr4avbSsrzV4GyrSmP-ruymwSU3GcyehrYCfgRllDezbwo1qnHiP5IoTg7Le5rxfVRqi0BrrZnSnpQjPOBYQtdZLmjnOd1UfgX837sfElhatrSfA8huz2J-vaZRn_V12biKokiQdSz_U0" />
                <div class="absolute inset-0 bg-linear-to-t from-surface-container-low/90 to-transparent"></div>
                <!-- macOS style window controls -->
                <div class="absolute top-4 left-4 flex gap-1.5 opacity-50">
                    <div class="w-2.5 h-2.5 rounded-full bg-error"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-1 relative z-10">
                <div class="flex flex-wrap gap-2 mb-4">
                    <span
                        class="font-label-md text-[11px] text-primary border border-primary/30 bg-primary/5 px-2 py-1 rounded">Computer
                        Vision</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">PyTorch</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">ResNet</span>
                </div>
                <h3
                    class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                    {{ value.project_name }}</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                    {{ value.Description.substring(0, 80) + " ..." }}
                </p>
                <a class="mt-auto inline-flex items-center justify-between w-full border border-outline-variant/50 text-on-surface hover:text-primary hover:border-primary/50 font-label-md text-label-md px-4 py-3 rounded-lg transition-all duration-300 bg-surface/30"
                    href="#">
                    <span>Lihat Detail</span>
                    <span
                        class="material-symbols-outlined text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
        </article>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-2 mt-8 w-full">
        <div class="glass-panel ghost-border rounded-lg flex items-center p-1">
            <button
                class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <div class="flex items-center gap-1 px-2">
                <template v-for="page in visiblePages" :key="page">
                    <button v-if="typeof page == 'number'" @click="goToPage(page)" :class="[
                        // 1. Gaya Dasar Tombol Anda + Efek Saat Tombol Mati (Disabled)
                        'w-10 h-10 rounded font-label-md transition-all duration-200 flex items-center justify-center disabled:opacity-40 disabled:border-transparent disabled:shadow-none disabled:cursor-default',

                        // 2. Kondisi Halaman Aktif vs Halaman Tidak Aktif
                        page === currentPage
                            ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                            : 'bg-primary/10 text-primary border-primary/30 hover:border-primary/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                    ]">{{
                        page }}</button>
                </template>
            </div>
            <button class=" w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary
                        transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>
</template>