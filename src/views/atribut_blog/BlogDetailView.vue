<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it'
import { supabase } from '@/data/conect_supabase';
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'

const data_blog_view = ref<any>(null)
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str: string, lang: string): string => {
        // Memastikan parameter lang valid dan bahasanya didukung oleh highlight.js (seperti python, js, bash/cmd)
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre><code class="hljs language-${lang}">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
                    }</code></pre>`
            } catch (e) {
                console.error(e)
            }
        }
        // Fallback jika kode berupa teks polos atau terminal/cmd yang tidak spesifik
        return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`
    }
})
const route = useRoute()
const paramSlug = String(route.params.slug)
const loading = ref(true)

const rendereMarkdwon = computed(() => {
    if (!data_blog_view.value?.content) return '<p>Memuat konten...</p>'
    return md.render(data_blog_view.value.content)
})

const blogViewAkses = async () => {
    try {
        loading.value = true
        // if (isNaN(paramID)) {
        //     console.error("id tidak valid")
        // }
        const { data: viewBlog, error: viewError } = await supabase
            .from('blog_tabel')
            .select('*')
            .eq('slug', paramSlug)
            .single()

        if (viewError) throw viewError
        data_blog_view.value = viewBlog
    } catch (error: any) {
        console.error("Gagal memuat data", error.message || error)
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

/* --- PERBAIKAN CODE BLOCK UNTUK HIGHLIGHT.JS --- */
:deep(.article-content pre) {
    background-color: #1a1b26;
    /* Menyesuaikan warna latar gelap tema Tokyo Night */
    padding: 1.25rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

:deep(.article-content code) {
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    line-height: 1.6;
}

/* Menghapus pewarnaan statis pada teks di dalam pre agar warna syntax highlighting menyala */
:deep(.article-content pre code) {
    color: inherit;
    background: transparent;
    padding: 0;
}

/* Gaya tambahan untuk inline-code (kode pendek di dalam kalimat paragraf, contoh: `npm run dev`) */
:deep(.article-content :not(pre) > code) {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ff9e64;
    /* Warna orange kontras mencerahkan teks inline */
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.85rem;
}

:deep(.article-content img) {
    max-width: 100%;
    /* Gambar tidak akan pernah keluar dari card */
    height: auto;
    /* Menjaga rasio foto agar tidak gepeng */
    display: block;
    margin: 2rem auto;
    /* Posisi otomatis di tengah dengan jarak atas-bawah */
    border-radius: 0.75rem;
    /* Sudut melengkung halus agar senada dengan card */
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* Garis tepi tipis tipuan kaca */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
    /* Efek bayangan dalam */
}

:deep(.article-content code) {
    font-family: monospace;
    color: #e0e0e0;
}
</style>
