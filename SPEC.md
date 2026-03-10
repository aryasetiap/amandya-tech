# Spesifikasi Pengembangan Produk (Spec-Driven Development)

**Proyek:** Amandya Tech - Marketing Landing Page  
**Versi:** 1.1.0  
**Tujuan:** Cetak biru komprehensif untuk tim Desain (UI/UX) dan Pengembang (Frontend/Backend) guna membangun landing page premium bergaya SaaS Modern / Web3.

---

## 1. Product Overview
Amandya Tech adalah Smart Interactive Photobooth System generasi berikutnya. Berbeda dengan perangkat lunak tradisional yang kaku, Amandya Tech menawarkan ekosistem perangkat lunak berbasis cloud dan on-premise hybrid yang memberdayakan pemilik bisnis photobooth, Event Organizer (EO), dan studio kreatif untuk mengelola operasional dengan lancar, menciptakan pengalaman interaktif bagi pengguna akhir (seperti Live Mode, Sticker, Dual Camera), dan melipatgandakan pendapatan mereka melalui sistem dashboard yang terpusat dan cerdas.

## 2. Brand Positioning
Amandya Tech diposisikan sebagai **"The Vercel/Linear of Photobooth Software"**.

* **Kompetitor (Contoh: Photolab):** Fungsional, desain standar, berfokus pada fitur dasar.
* **Amandya Tech:** Premium, estetika tinggi, sangat cepat (*ultra-fast*), inovatif, dan berfokus pada User Experience (UX) baik bagi pemilik bisnis maupun pelanggan akhir. Kesan yang ditimbulkan adalah teknologi canggih, mahal, namun sangat mudah digunakan (*effortless*).

## 3. Target Market
* Pemilik Bisnis Photobooth / Photobox Mandiri
* Event Organizer (EO) & Wedding Organizer (WO)
* Pemilik Studio Kreatif & Fotografi
* Agensi Pemasaran Digital (untuk aktivasi brand)

## 4. Value Proposition
* **Seamless Automation:** Satu orang dapat mengelola puluhan titik photobooth secara real-time melalui satu dashboard.
* **Modern Interactive Experience:** Fitur Live Mode, Dual Camera, dan efek kustom yang meningkatkan engagement pelanggan akhir.
* **Zero-Friction Operations:** Integrasi pembayaran instan (QRIS/Online), auto-update tanpa intervensi teknisi, dan manajemen template berbasis cloud.

## 5. Website Architecture
Struktur aliran (*flow*) halaman dirancang menggunakan prinsip AIDA (Attention, Interest, Desire, Action):

1.  **Top Navigation (Navbar):** Lengket (Sticky), transparan dengan efek blur (*glassmorphism*).
2.  **Hero Section:** Pukulan visual pertama. Menyampaikan value utama dengan animasi halus.
3.  **Social Proof (Client Logos):** Membangun kepercayaan seketika di *above the fold*.
4.  **Problem vs. Solution Section:** Pendekatan visual yang menunjukkan kekacauan sistem lama vs. kerapian Amandya Tech.
5.  **Core Features Showcase (Bento Grid):** Menampilkan fitur unggulan dalam layout grid asimetris bergaya Apple/Linear.
6.  **Interactive Workflow / Dashboard Preview:** Simulasi interaktif bagaimana dashboard bekerja.
7.  **Add-on Ecosystem:** Menampilkan fitur tambahan (Flipbook, Consent Sharing) dengan desain kartu melayang.
8.  **Pricing Table:** Tabel harga bergaya SaaS modern dengan opsi toggle (Bulan/Tahun).
9.  **Testimonial / Success Stories:** Carousel berbasis teks besar dan profil klien.
10. **FAQ:** Akordeon minimalis.
11. **Bottom CTA Section:** Ajakan bertindak yang masif dengan latar belakang dinamis.
12. **Footer:** Tautan navigasi, legal, dan media sosial yang rapi.

## 6. Landing Page Wireframe (Conceptual)

### 6.1. Hero Section
* **Purpose:** Menarik perhatian dalam 3 detik pertama.
* **Content:** Headline berani, Sub-headline pendukung, dua tombol CTA (Coba Gratis & Lihat Demo).
* **Components:** Animasi glow di belakang teks, mockup dashboard isometrik yang melayang secara perlahan.
* **UX Notes:** Latar belakang gelap (sesuai tema logo Amandya Tech), teks putih. Mockup merespons pergerakan mouse pengguna secara halus (parallax).

### 6.2. Features Showcase (Bento Grid)
* **Purpose:** Menjelaskan fitur teknis tanpa teks yang membosankan.
* **Content:** Kartu untuk Live Mode, Dual Camera, Payment, Custom Branding.
* **Components:** Kartu bergaya Glassmorphism, ikon duotone, micro-video looping di dalam kartu.
* **UX Notes:** Menggunakan efek reveal saat di-scroll. Jika kursor diarahkan (*hover*) ke kartu, efek border glow (mengikuti kursor) akan aktif.

### 6.3. Interactive Dashboard Preview
* **Purpose:** Membuktikan bahwa software mudah digunakan.
* **Content:** Antarmuka dashboard miniatur.
* **Components:** Tab navigasi yang bisa diklik (Transactions, Templates, Devices) yang mengubah grafik di sebelahnya.
* **UX Notes:** Tidak memerlukan transisi halaman. Interaksi terjadi seketika (*instant feedback*) untuk menonjolkan kesan cepat.

### 6.4. Pricing Section
* **Purpose:** Konversi dan perbandingan paket.
* **Content:** 3 Kolom (Lite, Basic, Pro).
* **Components:** Toggle Bulan/Tahun. Kartu paket "Pro" sedikit diperbesar dengan lencana "Most Popular" dan efek gradient border.
* **UX Notes:** Saat toggle ditekan, angka berubah dengan animasi rolling (seperti odometer).

## 7. UI Design System

### Color Palette (Berdasarkan Logo Amandya Tech)
* **Background (Dark Mode Default):** `#0B111A` (Deepest Navy) hingga `#15202E` (Dark Slate).
* **Foreground / Text:** `#F7F4ED` (Warm Cream / Off-white dari logo).
* **Brand Primary:** `#1A365D` (Navy solid) & `#EBE3D5` (Cream solid).
* **Accent (Untuk Glow & Action):** `#4F83CC` (Subtle Blue) & Kecerahan emas/kuning sangat halus untuk aksen bintang.

### Typography
* **Headings:** Outfit atau Plus Jakarta Sans (Geometris, modern, tegas).
* **Body:** Inter (Tingkat keterbacaan tinggi untuk UI teknis).
* **Code/Tech Elements:** JetBrains Mono (Menambah kesan developer/tech-savvy).
* **Spacing System:** Basis 8px (8, 16, 24, 32, 64, 128) untuk menjaga proporsi geometris yang presisi.

### Component Style (Glassmorphism + Web3)
* Kartu menggunakan latar belakang transparan (rgba putih 5%), `backdrop-filter: blur(16px)`.
* Border sangat tipis (1px solid rgba putih 10%).
* **Icon Style:** Ikon outline tipis (1.5px), menggunakan pustaka Lucide atau Phosphor Icons.
* **Button Style:**
    * **Primary:** Latar belakang solid Cream, teks gelap (Navy), sudut melengkung sedang (radius 8px).
    * **Secondary:** Outline tipis transparan, latar belakang blur, berubah cerah saat hover.

## 8. UI/UX Interaction
* **Mouse Spotlight:** Kartu fitur memiliki gradien radial transparan yang mengikuti posisi X/Y kursor, memberikan kesan material yang nyata.
* **Scroll Animations:** Menggunakan prinsip *staggered fade-up*. Elemen tidak muncul sekaligus, melainkan berurutan (jarak 100ms) saat masuk ke area pandang (*viewport*).
* **Micro Interactions:**
    * Ikon panah pada tombol bergeser 4px ke kanan saat hover.
    * Garis bawah navigasi animasi dari tengah ke luar.
* **Smooth Scroll:** Menggunakan Lenis atau Locomotive Scroll untuk pengalaman scrolling selembut mentega.

## 9. Component Breakdown
Daftar komponen untuk diisolasi dalam storybook/UI kit:
* **Navbar:** Sticky, transisi latar belakang saat di-scroll melewati 50px.
* **HeroTypography:** Penanganan gradient text dan animasi pengetikan/kemunculan kata.
* **BentoCard:** Container dengan properti penanganan mouse-move untuk efek glow.
* **PricingToggle:** Komponen switch komposit dengan animasi pegas (*spring*).
* **TestimonialMarquee:** Slider bergerak konstan secara horizontal tanpa jeda (*infinite loop*).
* **AccordionFAQ:** Penanganan ekspansi tinggi dinamis untuk pertanyaan umum.

## 10. Copywriting (SaaS Premium Style)

### Hero Section
* **Headline:** Tingkatkan Level Bisnis Photobooth Anda. Tanpa Batas.
* **Subheadline:** Sistem photobooth interaktif yang mengubah setiap event menjadi pengalaman digital premium. Kelola perangkat, desain, dan analitik dari satu dashboard cerdas.
* **CTA Primary:** Mulai Ekspansi Bisnis
* **CTA Secondary:** Lihat Cara Kerjanya (Ikon Play)

### Problem/Solution
* **Title:** Tinggalkan Sistem Lama yang Menguras Waktu.
* **Desc:** Lupakan instalasi rumit dan pengaturan manual di lokasi. Saatnya beralih ke otomatisasi penuh berbasis cloud.

### Feature Titles
* **Control Center:** Manajemen Multidimensi.
* **Live Action:** Live Mode & Integrasi Dual Camera.
* **Fluid Transactions:** Pembayaran Otomatis & Analitik Instan.

### Pricing Header
* **Title:** Investasi Terukur. Skalabilitas Tanpa Batas.

## 11. Pricing Section Structure
Struktur harga dirancang untuk mendorong pengguna ke paket "Pro" melalui *decoy pricing*.

1.  **LITE (Untuk Pemula) - Rp 650.000/bln**
    * Target: Pemilik 1 device yang baru memulai.
    * Fitur Kunci: 1 Device, Maksimum 100 Frame, Dashboard Basic.
2.  **BASIC (Untuk Bisnis Berkembang) - Rp 1.000.000/bln**
    * Target: Bisnis dengan volume medium.
    * Fitur Kunci: Tambahan Live Mode, Extra Print, Advanced Print Size.
3.  **PRO (Disarankan - Skala Penuh) - Rp 1.500.000/bln**
    * Target: Event Organizer profesional & agensi.
    * Fitur Kunci: Unlimited Frames, Full Custom UI/UX, Consent Sharing, Bebas pilih semua Add-on.

## 12. SEO Strategy
* **Keywords Primary:** Software photobooth Indonesia, sistem photobox interaktif, aplikasi photobooth untuk event, manajemen photobox cloud, vendor software photobooth.
* **Meta Title:** Amandya Tech | Smart Interactive Photobooth Software System
* **Meta Description:** Revolusi bisnis photobooth Anda dengan perangkat lunak interaktif Amandya Tech. Dilengkapi fitur Live Mode, Dual Camera, dan manajemen dashboard cloud terpusat.
* **Heading Structure:**
    * **H1:** Tingkatkan Level Bisnis Photobooth Anda. Tanpa Batas.
    * **H2:** Mengapa Amandya Tech? / Paket Harga / Integrasi Fitur
    * **H3:** Nama-nama fitur individu dalam grid

## 13. Tech Stack & Architecture Recommendation
Sistem ini dirancang menggunakan arsitektur JAMstack (JavaScript, API, Markup) dan prinsip *Decoupled Architecture* untuk memisahkan logika antarmuka (frontend) dari pengelolaan data (backend).

### 13.1. Frontend Framework: Next.js 14 (App Router)
* **Teknologi:** React.js framework dengan fitur Server-Side Rendering (SSR) dan Static Site Generation (SSG).
* **Masalah yang Diselesaikan:** Menyelesaikan isu SEO pada aplikasi Single Page Application (SPA).
* **Metode:** Routing berbasis direktori (App Router) untuk pemisahan halaman yang terstruktur.

### 13.2. Styling & UI Components: Tailwind CSS + Shadcn UI
* **Teknologi:** Utility-first CSS framework dan kumpulan komponen UI dasar unstyled.
* **Masalah yang Diselesaikan:** Menghindari file CSS global yang membengkak.
* **Metode:** Implementasi class utilitas langsung pada file komponen (.tsx).

### 13.3. Animation Engine: Framer Motion & GSAP
* **Teknologi:** Pustaka animasi deklaratif (Framer Motion) dan scroll-based animation (GSAP).
* **Masalah yang Diselesaikan:** Mewujudkan micro-interactions tanpa penurunan performa rendering.
* **Metode:** Manipulasi CSS transform dan opacity pada level GPU.

### 13.4. Content Management System (CMS): Sanity.io
* **Teknologi:** Headless CMS berbasis cloud.
* **Masalah yang Diselesaikan:** Memisahkan manajemen konten dari basis kode.
* **Metode:** Next.js mengambil data melalui GraphQL atau GROQ API.

### 13.5. Deployment & CI/CD: Vercel
* **Teknologi:** Platform as a Service (PaaS) untuk pengerahan aplikasi frontend.
* **Masalah yang Diselesaikan:** Mengotomatiskan alur kerja pengiriman perangkat lunak.
* **Metode:** Integrasi langsung dengan repositori GitHub.

## 14. Performance Optimization
* **Image Optimization:** Wajib menggunakan komponen `<Image />` dari Next.js untuk format WebP/AVIF.
* **Lazy Loading:** Komponen *below-the-fold* di-load secara dinamis menggunakan `next/dynamic`.
* **Font Loading:** Gunakan `next/font` untuk menghindari Layout Shift (CLS).
* **Core Web Vitals Target:**
    * LCP (Largest Contentful Paint) < 2.5s.
    * FID (First Input Delay) < 100ms.
    * CLS (Cumulative Layout Shift) < 0.1.

## 15. Future Expansion (Fase 2)
* **Product Deep-Dive Pages:** Halaman terpisah (misal: `/features/live-mode`) untuk SEO spesifik.
* **Interactive Playground / Sandbox:** Simulasi mengatur frame secara interaktif.
* **Resource Hub & Blog:** Sistem CMS untuk pemasaran konten.
* **Developer API Documentation:** Akses API untuk integrasi CRM pihak ketiga.