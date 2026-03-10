# Amandya Tech - Project Task Breakdown

## Phase 1: Inisiasi Proyek & Konfigurasi Dasar (Project Setup)
- [ ] **1.1 Inisialisasi Next.js 14:** Buat proyek Next.js dengan App Router, TypeScript, dan ESLint.
- [ ] **1.2 Instalasi Dependensi Inti:** Instal `tailwindcss`, `framer-motion`, `gsap`, icon library (Lucide/Phosphor), dan dependensi Sanity.
- [ ] **1.3 Konfigurasi Struktur Direktori:** Buat struktur sesuai dokumentasi (`src/components/ui`, `src/components/bento`, `src/components/animations`, `src/components/shared`, `src/lib`, `src/styles`, `sanity`).
- [ ] **1.4 Setup Environment Variables:** Buat `.env.local` untuk menyimpan `NEXT_PUBLIC_SANITY_PROJECT_ID` dan variabel lain yang dibutuhkan.
- [ ] **1.5 Integrasi Font & Optimasi (CLS):** Konfigurasi `next/font` untuk Outfit/Plus Jakarta Sans (Headings), Inter (Body), dan JetBrains Mono (Code/Tech element).

## Phase 2: Implementasi Sistem Desain (Design System)
- [ ] **2.1 Konfigurasi Tema (Tailwind):** Perbarui `tailwind.config.ts` untuk menyertakan palet warna brand (Deepest Navy, Dark Slate, Warm Cream, Accent Blue/Gold) dan sistem grid basis 8px.
- [ ] **2.2 Global CSS & Utility:** Buat class utilitas di `globals.css` khusus untuk efek *glassmorphism* (backdrop blur) dan border tipis ala Web3/SaaS modern.
- [ ] **2.3 Konfigurasi Tema Otomatis:** Set *Dark Mode default* pada keseluruhan antarmuka.
- [ ] **2.4 Instalasi & Modifikasi Shadcn UI:** Inisialisasi komponen dasar Shadcn UI (Button, Accordion) dan ubah gaya (radius 8px, *glassmorphism button*) agar cocok dengan referensi desain premium.

## Phase 3: Integrasi Content Management System (Sanity.io)
- [ ] **3.1 Inisialisasi Sanity Studio:** Pasang Sanity Studio di dalam folder `./sanity` atau sebagai workspace Next.js terintegrasi.
- [ ] **3.2 Desain Skema CMS:** Buat skema untuk konten dinamis: Testimonials, FAQs, dan *Pricing packages* (opsional).
- [ ] **3.3 Konfigurasi Sanity Client:** Buat modul abstrak di `src/lib/sanity.client.ts` untuk *data fetching*.
- [ ] **3.4 Implementasi GROQ Queries:** Siapkan fungsi *query* untuk menarik data ke komponen Next.js (SSR/BSS).

## Phase 4: Pembuatan Komponen Fundamental & Animasi Dasar
- [ ] **4.1 Shared Navigation (Navbar):** Buat navbar dengan efek *sticky*, transparan, dan *blur* (transisi saat d-scroll melewati 50px).
- [ ] **4.2 Shared Footer:** Buat rincian navigasi, tautan legal, dan logo/media sosial.
- [ ] **4.3 Smooth Scrolling Setup:** Integrasikan Lenis atau Locomotive Scroll.
- [ ] **4.4 Animation Wrappers:** Buat komponen pembungkus generik untuk *staggered fade-up scroll animations*.
- [ ] **4.5 HeroTypography Component:** Bangun pengelola teks bergradasi serta animasi kemunculan kata.

## Phase 5: Pengembangan Inti Landing Page (AIDA Flow)
- [ ] **5.1 Hero Section:** Bangun headline besar, subheadline, tombol CTA, dan efek 3D/Parallax isometrik pada mockup dashboard dengan *glow effect*.
- [ ] **5.2 Social Proof Section:** Tampilkan logo-logo klien dengan tata letak horizontal.
- [ ] **5.3 Problem vs Solution Section:** Rancang visualisasi komparatif antara sistem lama vs Amandya Tech.
- [ ] **5.4 Core Features Bento Grid:** Implementasikan grid asimetris dengan komponen `BentoCard` yang memiliki efek interaktif *mouse spotlight glow*.
- [ ] **5.5 Interactive Dashboard Preview:** Bangun simulasi dashboard *tab-based* (Transactions, Templates, Devices) dengan transisi state seketika (*instant feedback*).
- [ ] **5.6 Add-on Ecosystem:** Buat area daftar add-on (Flipbook, Consent Sharing) dengan tampilan *floating cards*.
- [ ] **5.7 Pricing Table Section:** Buat komponen `PricingToggle` (Bulan/Tahun) dan susun 3 kartu harga (Lite, Basic, Pro) menggunakan taktik *decoy pricing* pada card "Pro".
- [ ] **5.8 Testimonial Marquee Component:** Gunakan CSS infinite loop / GSAP untuk pergerakan barisan testimoni horizontal tanpa putus.
- [ ] **5.9 FAQ Accordion:** Integrasikan komponen Shadcn Accordion untuk section tanya jawab.
- [ ] **5.10 Bottom CTA Section:** Susun seksi ajakan bertindak final masif dengan *background* dinamis.

## Phase 6: Perakitan Halaman Utama & SEO
- [ ] **6.1 Perakitan Komponen:** Susun seluruh seksi dari Phase 5 ke dalam rute utama `src/app/page.tsx`.
- [ ] **6.2 Binding Data CMS:** Hubungkan komponen Testimoni dan FAQ ke data nyata dari Sanity fetching.
- [ ] **6.3 Konfigurasi SEO:** Terapkan metadata di `layout.tsx` (Title, Description, Keyword, OpenGraph) untuk menargetkan frasa kunci seperti "Software photobooth Indonesia".

## Phase 7: Optimasi Performa & Quality Assurance (QA)
- [ ] **7.1 Audit Performa Beban (Lazy Loading):** Terapkan `next/dynamic` pada bagian halaman yang berada *below-the-fold*.
- [ ] **7.2 Optimasi Gambar:** Pastikan aset logo dari folder `public` menggunakan komponen `next/image` dan dikonversi dengan efisien.
- [ ] **7.3 Micro-interactions Check:** Uji animasi saat *hover* panah CTA dan penyesuaian detail antarmuka (pointer, interaksi border glow).
- [ ] **7.4 Cross-Browser & Mobile Testing:** Periksa hasil *glassmorphism* di browser Safari, iOS, Chrome, dll.
- [ ] **7.5 Pengujian Web Vitals:** Audit skor LCP (< 2.5s), FID (< 100ms), dan CLS (< 0.1) menggunakan Lighthouse.

## Phase 8: Deployment & CI/CD
- [ ] **8.1 Push ke Repositori:** Commit seluruh basis kode awal yang siap ke Github `main` branch.
- [ ] **8.2 Konfigurasi Vercel:** Hubungkan Github ke Vercel dan sinkronisasi Environment Variables produksi.
- [ ] **8.3 Validasi Produksi:** Verifikasi fungsionalitas dan pengecekan akses Sanity GraphQL setelah dipublikasi.
- [ ] **8.4 Serah Terima Proyek:** Rilis versi 1.1.0-stable dengan status *live*.
