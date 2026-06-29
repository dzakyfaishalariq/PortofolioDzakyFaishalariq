<script setup lang="ts">
import { supabase } from '@/data/conect_supabase';
import { computed, onMounted, ref } from 'vue';

const data_blog_vew = ref<any>(null)
const loading = ref(true)

const aksesDataUtama = async () => {
    try {
        loading.value = true

        const { data: featurPost, error: errorFeaturd } = await supabase
            .from('blog_tabel')
            .select(`*`)
            .eq('id', 1)
            .single()

        if (errorFeaturd) throw errorFeaturd
        data_blog_vew.value = featurPost
    } catch (error: any) {
        console.log("Gagal memuat data")
    } finally {
        loading.value = false
    }
}

const publisAt = computed(() => {
    const tanggalPublis = data_blog_vew.value?.published_at
    if (!tanggalPublis) return '-'

    return new Date(tanggalPublis).toLocaleDateString('id-ID', {
        month: 'long',
        year: 'numeric'
    })
})

onMounted(() => {
    aksesDataUtama()
})
</script>
<template>
    <section class="mb-section-gap">
        <a class="block group" href="#">
            <div class="glass-card inner-glow rounded-xl overflow-hidden flex flex-col md:flex-row gap-0">
                <div class="w-full md:w-3/5 image-overlay-wrapper min-h-75 md:min-h-100">
                    <img alt="Featured Post Image" class="w-full h-full object-cover"
                        data-alt="A highly detailed, macro shot of a complex circuit board illuminated by striking, high-contrast cyan and deep violet neon lights. The aesthetic is extremely high-tech, corporate modern, and futuristic, perfectly reflecting a sophisticated machine learning and AI engineering environment. The background is a stark, absolute black, emphasizing the intricate metallic traces and glowing components. The composition is asymmetrical, focusing on a central processor chip that seems to pulsate with artificial intelligence processing power."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAekaOqOKHnyVTr7z00FJDKcZgkDJkxF84jej71oXu30-QkAhrTyQTiKLw2RUXi89xYBgnzyvplp_vx34RI7yKeUBnsjLPMZ66d40banFTtguNiEjxGFXRYra0vyuJ3ITj92gt_bp0TeIU0aH6KL0G6ywr392xGrF9A5wftItlvByh9DEen9FkbJv14vxMOeOJHgy7B3rPsHpCc4_xWC4G5jFWNLMM36in5rfa9mGD2LRMjI95sWw_w-AVHu74k22vO21np9lRdlYU">
                    <div class="image-overlay"></div>
                    <div class="absolute top-4 left-4 z-20 flex gap-2">
                        <span class="tag-chip bg-background/80 backdrop-blur-sm">LLM</span>
                        <span class="tag-chip bg-background/80 backdrop-blur-sm">Ecosystem</span>
                    </div>
                </div>
                <div class="w-full md:w-2/5 p-8 flex flex-col justify-center bg-surface-container-low/50 ">
                    <div class="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-4">
                        <span class="material-symbols-outlined text-[18px]">calendar_today</span>
                        <span>{{ publisAt }}</span>
                    </div>
                    <h2
                        class="font-headline-lg text-headline-lg text-on-background mb-4 group-hover:text-primary transition-colors">
                        {{ data_blog_vew?.title }}
                    </h2>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
                        {{ data_blog_vew?.excerpt }}
                    </p>
                    <router-link v-if="data_blog_vew?.id" :to="{ name: 'blog_view', params: { id: data_blog_vew.id } }">
                        <div class="mt-auto flex items-center gap-2 font-label-md text-label-md text-primary">
                            <span>Baca Selengkapnya</span>
                            <span
                                class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </a>
    </section>
</template>