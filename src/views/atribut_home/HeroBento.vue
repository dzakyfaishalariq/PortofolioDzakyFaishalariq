<template>
    <div class="grid grid-cols-12 gap-gutter mb-section-gap">
        <!-- Main Title & Terminal (Spans 8 cols) -->
        <div class="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
            <div
                class="glass-panel ghost-border rounded-xl p-10 flex flex-col justify-center min-h-[400px] relative overflow-hidden group">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <h2 class="font-label-md text-label-md text-primary mb-4 uppercase tracking-widest">System
                    Initialization...</h2>
                <h1 class="font-display-lg text-display-lg text-on-surface mb-2">
                    Dzaky Faishalariq, <span class="gradient-text">S.T.</span>
                </h1>
                <h3 class="font-headline-md text-headline-md text-on-surface-variant mb-8 glow-cyan">AI &amp; Software
                    Engineer</h3>
                <!-- Terminal Window -->
                <div
                    class="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden font-label-md text-label-md mt-auto shadow-2xl">
                    <!-- macOS style header -->
                    <div
                        class="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant/30">
                        <div class="w-3 h-3 rounded-full bg-error"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        <div class="ml-4 text-on-surface-variant/50 text-xs">dzaky@dev-env:~</div>
                    </div>
                    <div class="p-6 text-on-surface flex flex-col gap-2">
                        <div class="flex">
                            <span class="text-primary-container mr-2">➜</span>
                            <span class="text-secondary mr-2">~</span>
                            <span class="">cat education.json</span>
                        </div>
                        <div class="text-on-surface-variant pl-4">
                            {<br>
                            &nbsp;&nbsp;"S1": "Informatica, Universitas Bengkulu",<br>
                            &nbsp;&nbsp;"S2": "Artificial Intelligence, FMIPA UGM",<br>
                            &nbsp;&nbsp;"status": "Active"<br>
                            }
                        </div>
                        <div class="flex mt-2">
                            <span class="text-primary-container mr-2">➜</span>
                            <span class="text-secondary mr-2">~</span>
                            <span class="terminal-text">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Side Image/Visual (Spans 4 cols) -->
        <div class="col-span-12 lg:col-span-4">
            <div class="glass-panel ghost-border rounded-xl h-full min-h-100 relative overflow-hidden group">
                <img alt="Abstract representation of artificial intelligence"
                    class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-700"
                    data-alt="A macro shot of a complex circuit board illuminated by striking cyan and deep blue neon lights, conveying a high-tech, artificial intelligence theme. The lighting is cinematic and moody, set against a dark background, emphasizing the intricate metallic traces and microchips. The aesthetic is futuristic and technical, perfectly aligning with a dark-mode UI style."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4avfRJv9WAvu-kk_s6b7DTVsdDHLnrgU0HerJ_qy_r5v4pSSbKVZN4d5F5EydqqeazJy1sS5jmAjzA94OdlpmaeN649wBFHuM3ZRae6V1SLlQFMAlJI91C3m2vgoUNEHJN5et-88ZIqxzGHV6yLFoE_WUO_m-khDTVllBFG5znqatJ00OklXymX-fhF1RPNLeGSAGkqqDlhAOgY4D8T0WU5TtsXT0Wr3OFRj24Incc5dAhQ6rIIsgZ3ahJ-CWtbSpMJ2AAlnU0Vg">
                <div class="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-8 w-full">
                    <div class="flex justify-between items-end">
                        <div>
                            <p class="font-label-md text-label-md text-primary mb-1">Location</p>
                            <p class="font-body-md text-body-md text-on-surface">Indonesia</p>
                        </div>
                        <span class="material-symbols-outlined text-primary text-3xl">public</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>