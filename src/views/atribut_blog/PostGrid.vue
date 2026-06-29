<script setup lang="ts">
import { supabase } from '@/data/conect_supabase';
import { onMounted, ref } from 'vue';


const data_blog = ref<any[]>([])
const loading = ref(true)

const aksesDataUtama = async () => {
    try {
        loading.value = true

        const { data: blogList, error: errorList } = await supabase
            .from('blog_tabel')
            .select(`*`)
            .range(1, 5)

        if (errorList) throw errorList
        data_blog.value = blogList
    } catch (error: any) {
        console.log("Gagal memuat data")
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    aksesDataUtama()
})

</script>
<template>
    <section>
        <div class="flex justify-between items-end mb-8 border-b border-outline-variant/30 pb-4">
            <h3 class="font-headline-md text-headline-md text-on-background">Arsip Jurnal</h3>
            <div class="flex gap-4">
                <button
                    class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">filter_list</span> Filter
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <!-- Post 1 -->
            <template v-for="post in data_blog">
                <div v-if="post?.status === 'published'">
                    <a class="block group bg-slate-900/40" href="#">
                        <div class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col">
                            <div class="flex justify-between items-start mb-6">
                                <div class="flex gap-2">
                                    <template v-for="tag in post?.tags">
                                        <span class="tag-chip">{{ tag }}</span>
                                    </template>
                                </div>
                                <span class="font-label-md text-label-md text-on-surface-variant">Sept 12, 2024</span>
                            </div>
                            <h4
                                class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                                {{ post?.title }}
                            </h4>
                            <p class="font-body-md text-body-md text-on-surface-variant mb-6 grow">
                                {{ post?.excerpt }}
                            </p>
                            <router-link :to="{ name: 'blog_view', params: { slug: post?.slug } }"
                                class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 font-label-md text-label-md text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                <span>Buka Catatan</span>
                                <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                            </router-link>
                        </div>
                    </a>
                </div>
            </template>
            <!-- Dummy Post 4 for Grid Balance -->
            <!-- <div
                class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col justify-center items-center border-dashed border-2 border-outline-variant/40 hover:border-primary/50 transition-colors cursor-pointer group">
                <span
                    class="material-symbols-outlined text-[48px] text-outline-variant group-hover:text-primary/70 mb-4 transition-colors">history</span>
                <span
                    class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary/90 transition-colors">Muat
                    Tulisan Terdahulu</span>
            </div> -->
        </div>
    </section>
</template>