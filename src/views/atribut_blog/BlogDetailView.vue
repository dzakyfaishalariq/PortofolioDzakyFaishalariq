<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it'
import { supabase } from '@/data/conect_supabase';

const data_blog_view = ref<any>(null)
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})
const route = useRoute()
const paramID = Number(route.params.id as string)
const loading = ref(true)

const rendereMarkdwon = computed(() => {
    if (!data_blog_view.value?.content) return '<p>Memuat konten...</p>'
    return md.render(data_blog_view.value.content)
})

const blogViewAkses = async () => {
    try {
        loading.value = true
        if (isNaN(paramID)) {
            console.error("id tidak valid")
        }
        const { data: viewBlog, error: viewError } = await supabase
            .from('blog_tabel')
            .select('*')
            .eq('id', paramID)
            .single()

        if (viewError) throw viewError
        data_blog_view.value = viewBlog
    } catch (error: any) {
        console.error("Gagal memuat data")
    } finally {
        loading.value = false
    }
}


onMounted(() => {
    blogViewAkses()
})

</script>
<template>
    <main class="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto relative">
        <!-- Article Header -->
        <header class="mb-12">
            <div class="flex items-center gap-4 mb-6 font-label-md text-label-md text-on-surface-variant">
                <span class="text-primary/90">12 Okt 2023</span>
                <span class="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span class="flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                    8 min read
                </span>
                <span class="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span
                    class="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[11px] tracking-widest uppercase">AI
                    &amp; ML</span>
            </div>
            <h1 class="font-display-lg-mobile md:font-display-lg text-on-surface mb-6 leading-tight">{{
                data_blog_view?.title }}</h1>
            <p class="font-body-lg text-on-surface-variant/90 mb-8 max-w-2xl">{{ data_blog_view?.excerpt }}</p>
        </header>
        <!-- Featured Image -->
        <figure class="mb-16 rounded-xl overflow-hidden glass-panel ghost-border inner-glow relative aspect-video">
            <div class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10 opacity-60">
            </div>
            <img alt="Featured Image" class="w-full h-full object-cover mix-blend-luminosity opacity-70"
                data-alt="A macro shot of a complex, glowing neural network and microchip structure, illuminated by bright cyan and deep violet light trails against a pitch-black background. The intricate pathways of the chip pulse with data, conveying a high-tech, cyber-intelligence aesthetic typical of advanced AI systems. The mood is futuristic and precise, with sharp focus on the central node."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoQRR1kO-yHMkv7Ut__g6W4VaRJ3jYX3qkKZK8MJVvdZUDjE6ZMNf8jIOpXtNuzZv_6D7hAtqPfSkIpOR9rzIy3XMhRZm3MoLLnXejPp6quTW9v7-7QF1IW9DCbuvJn8QfxI7H08KU4bZBMY7gZMo0oxp-RuplGXF_ewp9I6Sf9J_8wL5mEkWnyMZ__6oMumHM9ElrHoVPcYns4NGE3TBtrp1dTooMevtU-FV-EwsH1IlbWpCLcn1l16l5oLTFf5gupU3n1WpSDPc" />
        </figure>
        <!-- Article Body -->
        <article class=" p-3 article-content prose max-w-none bg-surface-container-lowest/30 backdrop-blur-md 
           border border-primary/10 rounded-2xl shadow-xl 
           prose-headings:mt-12 prose-headings:mb-6 
           prose-headings:font-headline-lg-mobile md:prose-headings:font-headline-lg 
           prose-h2:text-primary/90 prose-p:text-on-surface-variant 
           prose-pre:bg-transparent prose-pre:p-0" v-html="rendereMarkdwon">
        </article>
        <!-- Bento Grid style takeaways -->
        <h2 class="mt-16 mb-8 font-headline-lg-mobile md:font-headline-lg text-on-surface">Key Takeaways</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
                class="glass-panel ghost-border inner-glow p-8 rounded-xl flex items-start gap-5 transition-all hover:bg-primary/5">
                <div class="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <span class="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <div>
                    <h3 class="font-headline-md text-headline-md text-on-surface text-[18px] mb-2">Demokratisasi
                        Akses</h3>
                    <p class="font-body-md text-on-surface-variant mb-0">Model sumber terbuka telah menurunkan
                        hambatan masuk, memungkinkan developer independen membangun aplikasi berbasis AI tingkat
                        lanjut.</p>
                </div>
            </div>
            <div
                class="glass-panel ghost-border inner-glow p-8 rounded-xl flex items-start gap-5 transition-all hover:bg-secondary/5">
                <div class="p-3 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 shrink-0">
                    <span class="material-symbols-outlined" data-icon="memory">memory</span>
                </div>
                <div>
                    <h3 class="font-headline-md text-headline-md text-on-surface text-[18px] mb-2">Inovasi Perangkat
                        Keras</h3>
                    <p class="font-body-md text-on-surface-variant mb-0">Optimalisasi seperti GGUF memungkinkan
                        komputasi AI berat berjalan pada perangkat komersial standar.</p>
                </div>
            </div>
        </div>
        <!-- Share Section -->
        <div
            class="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="font-label-md text-label-md text-on-surface-variant">Bagikan artikel ini:</div>
            <div class="flex gap-4">
                <button
                    class="w-11 h-11 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all bg-surface/40">
                    <span class="material-symbols-outlined" data-icon="share">share</span>
                </button>
                <button
                    class="w-11 h-11 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all bg-surface/40">
                    <span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
                </button>
            </div>
        </div>
    </main>
</template>
<style scoped>
/* Menghidupkan kembali Style Heading dari Markdown */
:deep(.article-content h1) {
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #fff;
    /* Sesuaikan warna judul utama */
}

:deep(.article-content h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
    /* Sesuai text-primary/90 */
}

:deep(.article-content h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
}

/* Menghidupkan kembali List Angka (1, 2, 3) */
:deep(.article-content ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

:deep(.article-content li) {
    margin-bottom: 0.25rem;
}

/* Menghidupkan bentuk Code Block */
:deep(.article-content pre) {
    background-color: #1e1e1e;
    /* Warna gelap background code */
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}

:deep(.article-content code) {
    font-family: monospace;
    color: #e0e0e0;
}
</style>
