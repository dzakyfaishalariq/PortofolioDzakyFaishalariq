<script setup lang="ts">
import { supabase } from '@/data/conect_supabase';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const paramID = Number(route.params.id as string)

const project_detail = ref<any>(null)
const loading = ref(true)

const fatchProjectDetail = async () => {
    try {
        loading.value = true
        if (isNaN(paramID)) {
            throw new Error('ID proyek tidak valid')
        }

        const { data, error } = await supabase
            .from('project_table')
            .select(`
                id,
                project_name,
                Description,
                source_code,
                documentation,
                start_date,
                end_date,
                projek_keahlian(
                    keahlian (
                        id,
                        stack
                    )
                )
            `)
            .eq('id', paramID)
            .single()
        if (error) throw error
        project_detail.value = data
    } catch (error: any) {
        console.error("Gagal memuat detail proyek")
    } finally {
        loading.value = false
    }
}

const bulanTahunAktif = computed(() => {
    const tanggalAsli = project_detail.value?.start_date
    if (!tanggalAsli) return '-'

    return new Date(tanggalAsli).toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric'
    })
})

const bulanTahunEnd = computed(() => {
    const tanggalEnd = project_detail.value?.end_date
    if (!tanggalEnd) return '-'
    return new Date(tanggalEnd).toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric'
    })
})

onMounted(() => {
    fatchProjectDetail()
})

</script>
<template>
    <main class="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-desktop">
        <!-- Hero Section -->
        <section class="mb-16">
            <div class="relative h-100 rounded-xl overflow-hidden glass-card">
                <div class="absolute inset-0 bg-surface/40 z-10"></div>
                <div class="absolute inset-0 z-0 hero-mask"
                    data-alt="A futuristic medical imaging interface showing a 3D cerebral cortex scan with glowing cyan neural pathways. The aesthetic is clinical yet high-tech, featuring floating data points and diagnostic overlays in a dark, atmospheric laboratory setting. Soft violet ambient light reflects off glass surfaces, creating a deep cyber-intelligence mood."
                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDIu_88pFc5ABPvUvjWtmvkZMe61QRMu7UtFQ-U3q1uXKD6yoo_qLKSsClXutQyn-btgU4hXK1wV0zI6rTASF7HpsFnIMVLXoW2nVzmiUTcM3F3-0oZw-PRXDiFIsMnSQADCmH7NS0C1Xvp6_VvBErgjttl0rJUuh_W48B4ESo1_YG7hBsne3MTM0LKd7zr8gublIzOt7QLdQGd_gV4d1kXOtnr4zWjBafjQsW-nBwFPX8T2hlHBMnuO12mXrDIeLmlSp-o2JwoVY')">
                </div>
                <div class="absolute bottom-12 left-12 z-20 max-w-2xl">
                    <!-- <div
                        class="inline-block px-3 py-1 rounded bg-primary/20 text-primary font-label-md text-label-md mb-4 border border-primary/30">
                        INTELLIGENCE_DEPLOYED</div> -->
                    <h1 class="font-display-lg text-display-lg text-white mb-2 leading-none">
                        {{ project_detail?.project_name }}</h1>
                    <!-- <p class="text-on-surface-variant font-headline-md text-headline-md">Automated neural diagnostic
                        framework for high-precision pathology detection.</p> -->
                </div>
            </div>
        </section>
        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <!-- Description Column -->
            <div class="lg:col-span-8 space-y-12">
                <section>
                    <h2 class="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-3">
                        <span class="material-symbols-outlined"
                            style="font-variation-settings: 'FILL' 1;">description</span>
                        Ringkasan Proyek
                    </h2>
                    <div class="glass-card p-8 rounded-xl space-y-4 text-on-surface/90 leading-relaxed">
                        <p>
                            {{ project_detail?.Description }}
                        </p>
                        <!-- <div class="grid grid-cols-2 gap-4 mt-8">
                            <div class="p-4 border border-outline-variant/30 rounded bg-surface-container-low">
                                <div class="text-primary font-bold text-2xl mb-1">98.4%</div>
                                <div class="text-on-surface-variant font-label-md text-label-md">ACCURACY_SCORE</div>
                            </div>
                            <div class="p-4 border border-outline-variant/30 rounded bg-surface-container-low">
                                <div class="text-secondary font-bold text-2xl mb-1">&lt; 120ms</div>
                                <div class="text-on-surface-variant font-label-md text-label-md">LATENCY_RATE</div>
                            </div>
                        </div> -->
                    </div>
                </section>
                <!-- <section>
                    <h2 class="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-3">
                        <span class="material-symbols-outlined">analytics</span>
                        Metodologi Teknis
                    </h2>
                    <div class="glass-card p-8 rounded-xl">
                        <ul class="space-y-6">
                            <li class="flex gap-4">
                                <div class="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#8aebff]"></div>
                                <div>
                                    <h4 class="font-bold text-white mb-1">Arsitektur ResNet-50 Optimized</h4>
                                    <p class="text-on-surface-variant">Modifikasi residual layers untuk penangkapan
                                        fitur spasial mikro pada gambar resolusi tinggi.</p>
                                </div>
                            </li>
                            <li class="flex gap-4">
                                <div class="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#8aebff]"></div>
                                <div>
                                    <h4 class="font-bold text-white mb-1">Visualisasi Grad-CAM</h4>
                                    <p class="text-on-surface-variant">Implementasi peta panas (heatmaps) untuk
                                        menunjukkan area fokus keputusan AI bagi ahli radiologi.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> -->
            </div>
            <!-- Sidebar Column -->
            <aside class="lg:col-span-4 space-y-gutter">
                <!-- Timeline Card -->
                <div class="glass-card p-6 rounded-xl">
                    <h3 class="font-label-md text-label-md text-primary-fixed-dim mb-4 tracking-widest uppercase">
                        Project Timeline</h3>
                    <div class="flex items-center gap-4 py-2">
                        <span class="material-symbols-outlined text-secondary">calendar_today</span>
                        <div>
                            <div class="text-white font-medium">{{ bulanTahunAktif }}</div>
                            <div class="text-on-surface-variant text-sm">Deployment Start</div>
                        </div>
                    </div>
                    <div class="ml-3 my-2 h-8 border-l border-outline-variant/50 border-dashed"></div>
                    <div class="flex items-center gap-4 py-2">
                        <span class="material-symbols-outlined text-primary">verified</span>
                        <div>
                            <div class="text-white font-medium">{{ bulanTahunEnd }}</div>
                            <div class="text-on-surface-variant text-sm">System Finalization</div>
                        </div>
                    </div>
                </div>
                <!-- Tech Stack Card -->
                <div class="glass-card p-6 rounded-xl">
                    <h3 class="font-label-md text-label-md text-primary-fixed-dim mb-4 tracking-widest uppercase">
                        Technology Stack</h3>
                    <div class="flex flex-wrap gap-2">
                        <template v-for="value in project_detail?.projek_keahlian">
                            <span class="tech-chip px-3 py-1 rounded text-primary text-xs">{{
                                value.keahlian.stack }}</span>
                        </template>
                    </div>
                </div>
                <!-- Actions Card -->
                <div class="glass-card p-6 rounded-xl space-y-4">
                    <button
                        class="cyber-button-primary w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 group">
                        <span>Lihat Kode Sumber</span>
                        <span
                            class="material-symbols-outlined text-[18px] group-hover:rotate-12 transition-transform">code</span>
                    </button>
                    <button
                        class="cyber-button-ghost w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2">
                        <span>Dokumentasi</span>
                        <span class="material-symbols-outlined text-[18px]">menu_book</span>
                    </button>
                </div>
                <!-- System Integrity Status -->
                <!-- <div class="p-6 rounded-xl border border-primary/20 bg-primary/5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-label-md text-on-surface-variant">SYSTEM_STATUS</span>
                        <span class="text-xs font-label-md text-primary animate-pulse">● OPERATIONAL</span>
                    </div>
                    <div class="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                        <div class="bg-primary h-full w-[94%] shadow-[0_0_8px_#8aebff]"></div>
                    </div>
                </div> -->
            </aside>
        </div>
    </main>
</template>