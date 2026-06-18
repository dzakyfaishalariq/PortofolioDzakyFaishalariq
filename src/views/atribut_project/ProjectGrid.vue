<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <!-- Project Card 1: Medical Imaging -->
        <article
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
                    Sistem Deteksi Anomali Medis</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                    Implementasi arsitektur deep learning untuk menganalisis pemindaian X-Ray secara real-time,
                    mengidentifikasi pola anomali dengan tingkat akurasi tinggi menggunakan model klasifikasi gambar
                    yang dioptimalkan.
                </p>
                <a class="mt-auto inline-flex items-center justify-between w-full border border-outline-variant/50 text-on-surface hover:text-primary hover:border-primary/50 font-label-md text-label-md px-4 py-3 rounded-lg transition-all duration-300 bg-surface/30"
                    href="#">
                    <span>Lihat Detail</span>
                    <span
                        class="material-symbols-outlined text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
        </article>
        <!-- Project Card 2: Agentic AI -->
        <article
            class="bg-surface-container-low/60 backdrop-blur-md border border-outline-variant/50 rounded-xl overflow-hidden flex flex-col group relative glass-glow transition-all duration-500 hover:border-primary/50 hover:bg-surface-container-high/80">
            <div class="h-56 relative overflow-hidden bg-black/50">
                <img alt="Agentic AI Network"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
                    data-alt="A conceptual abstract representation of an agentic artificial intelligence network operating in cyberspace. The image features a complex web of glowing cyan and deep violet nodes connected by pulsing laser-like data streams against a pitch-black background. The nodes pulse with energy, suggesting autonomous communication and task execution. The overall aesthetic is cyber-intelligence and high-tech, with sharp glassmorphism elements and glowing particle effects that convey advanced logic, neural networks, and seamless data flow."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9bC0UjGIrU9BHsyNJ9M7F_tYTal-iOeJA_7mQvWtjHzI0zrus6MJYnyvxHuxVY2wh8fFTaMcm51CmSsOOMG-5gilG63_Elv6u6_5y3i65R0iQTDXo3KNTOziKnrpM7BXQVNPauR2ZMOLFXjSn7G2Pr_u9pjj7Y9TWOa8UZXGUFCGueyQEyG7Rjnp6ibHL-e5sTbXaSNSjGfwYKPK-srjhtLflxCsWUGTWa8KqkwXeJnnT0LOvv4eITC78BiLgg4q6NvV8bUAobMk" />
                <div class="absolute inset-0 bg-linear-to-t from-surface-container-low/90 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-1.5 opacity-50">
                    <div class="w-2.5 h-2.5 rounded-full bg-error"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-1 relative z-10">
                <div class="flex flex-wrap gap-2 mb-4">
                    <span
                        class="font-label-md text-[11px] text-primary border border-primary/30 bg-primary/5 px-2 py-1 rounded">NLP
                        / LLMs</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">LangChain</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">Python</span>
                </div>
                <h3
                    class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                    Orkestrasi Multi-Agen AI</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                    Pengembangan ekosistem agen otonom yang dapat berkomunikasi dan berkolaborasi untuk menyelesaikan
                    tugas analitis kompleks, memanfaatkan kapabilitas Large Language Models terpusat.
                </p>
                <a class="mt-auto inline-flex items-center justify-between w-full border border-outline-variant/50 text-on-surface hover:text-primary hover:border-primary/50 font-label-md text-label-md px-4 py-3 rounded-lg transition-all duration-300 bg-surface/30"
                    href="#">
                    <span>Lihat Detail</span>
                    <span
                        class="material-symbols-outlined text-lg transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
        </article>
        <!-- Project Card 3: Traffic Monitoring -->
        <article
            class="bg-surface-container-low/60 backdrop-blur-md border border-outline-variant/50 rounded-xl overflow-hidden flex flex-col group relative glass-glow transition-all duration-500 hover:border-primary/50 hover:bg-surface-container-high/80">
            <div class="h-56 relative overflow-hidden bg-black/50">
                <img alt="AI Traffic Monitoring"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
                    data-alt="A stylized, high-contrast night-time aerial view of a complex city highway interchange, viewed through the lens of an advanced AI traffic monitoring system. The moving vehicles are tracked with crisp, glowing cyan bounding boxes and trajectory lines overlaid on the dark, desaturated asphalt. The scene is illuminated by subtle streetlights that cast long, dramatic shadows, emphasizing a moody, dark-mode cyber-intelligence aesthetic. The visual focuses on edge computing and real-time computer vision processing in a futuristic urban environment."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtVBxzVaBN21BsnNtTTYsGuLqCuvc1OULT9JfJC_0GNP9X1Jpyr3yRiUQBOkqSf1I-5dJJ9Z3s7d8Z6AiMMOocsFnXauQK6ZBD_xO5XoxGqfa4jy_MV0sXnPH1ePzXZOhOFpYKjtu3U8-kjiHvxulJqlKVjKlDvmQjDVrespwNix_T5no7O6OaIh6ZKpo6fiq-GPHuX2Wh4gCQjyzQW_hXjUsdJchEPUY0RVuzedw4Wi8QNkq7fkaMBAqtq_U5DjQam0yNRPtGVvA" />
                <div class="absolute inset-0 bg-linear-to-t from-surface-container-low/90 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-1.5 opacity-50">
                    <div class="w-2.5 h-2.5 rounded-full bg-error"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-primary"></div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-1 relative z-10">
                <div class="flex flex-wrap gap-2 mb-4">
                    <span
                        class="font-label-md text-[11px] text-primary border border-primary/30 bg-primary/5 px-2 py-1 rounded">Edge
                        AI</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">YOLOv8</span>
                    <span
                        class="font-label-md text-[11px] text-on-surface-variant border border-outline-variant/50 px-2 py-1 rounded">OpenCV</span>
                </div>
                <h3
                    class="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors">
                    Sistem Pemantauan Lalu Lintas Real-Time</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                    Sistem inferensi edge untuk melacak dan menghitung volume kendaraan di persimpangan padat.
                    Dioptimalkan untuk berjalan pada perangkat keras berdaya rendah dengan latensi minimal.
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
                <button
                    class="w-10 h-10 rounded bg-primary/10 text-primary font-label-md border border-primary/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">1</button>
                <button
                    class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">2</button>
                <button
                    class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">3</button>
                <span class="text-on-surface-variant/50 px-2">...</span>
                <button
                    class="w-10 h-10 rounded text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-all font-label-md">8</button>
            </div>
            <button
                class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>
</template>