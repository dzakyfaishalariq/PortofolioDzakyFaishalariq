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
            <a class="block group bg-slate-900/40" href="#">
                <div class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="flex gap-2">
                            <span class="tag-chip">Machine Learning</span>
                            <span class="tag-chip">Roadmap</span>
                        </div>
                        <span class="font-label-md text-label-md text-on-surface-variant">Sept 12, 2024</span>
                    </div>
                    <h4
                        class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                        Roadmap Belajar Machine Learning
                    </h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                        Rute terstruktur dari probabilitas dasar hingga transformer. Membedah kurikulum yang optimal
                        untuk transisi dari rekayasa perangkat lunak tradisional menuju kecerdasan buatan.
                    </p>
                    <div
                        class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 font-label-md text-label-md text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>Buka Catatan</span>
                        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                    </div>
                </div>
            </a>
            <!-- Post 2 -->
            <a class="block group bg-slate-900/40" href="#">
                <div class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="flex gap-2">
                            <span class="tag-chip">Academics</span>
                            <span class="tag-chip">UGM</span>
                        </div>
                        <span class="font-label-md text-label-md text-on-surface-variant">Agustus 05, 2024</span>
                    </div>
                    <h4
                        class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                        Pengalaman S2 MTI UGM
                    </h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                        Refleksi kritis tentang kurikulum Magister Teknologi Informasi Universitas Gadjah Mada.
                        Menyeimbangkan antara teori komputasi tingkat lanjut dan kebutuhan industri modern.
                    </p>
                    <div
                        class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 font-label-md text-label-md text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>Buka Catatan</span>
                        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                    </div>
                </div>
            </a>
            <!-- Dummy Post 3 for Grid Balance -->
            <a class="block group bg-slate-900/40" href="#">
                <div class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col">
                    <div class="flex justify-between items-start mb-6">
                        <div class="flex gap-2">
                            <span class="tag-chip">Data Engineering</span>
                            <span class="tag-chip">Pipelines</span>
                        </div>
                        <span class="font-label-md text-label-md text-on-surface-variant">Juli 20, 2024</span>
                    </div>
                    <h4
                        class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                        Membangun Data Pipeline Resilien
                    </h4>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                        Strategi arsitektur untuk memproses aliran data bervolume tinggi. Studi kasus optimasi
                        throughput dan latensi dalam sistem terdistribusi.
                    </p>
                    <div
                        class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 font-label-md text-label-md text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>Buka Catatan</span>
                        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                    </div>
                </div>
            </a>
            <!-- Dummy Post 4 for Grid Balance -->
            <div
                class="glass-card inner-glow rounded-lg p-6 h-full flex flex-col justify-center items-center border-dashed border-2 border-outline-variant/40 hover:border-primary/50 transition-colors cursor-pointer group">
                <span
                    class="material-symbols-outlined text-[48px] text-outline-variant group-hover:text-primary/70 mb-4 transition-colors">history</span>
                <span
                    class="font-label-md text-label-md text-on-surface-variant group-hover:text-primary/90 transition-colors">Muat
                    Tulisan Terdahulu</span>
            </div>
        </div>
    </section>
</template>