# Amandya Tech - Marketing Landing Page

[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/CMS-Sanity.io-F03E2F?logo=sanity)](https://www.sanity.io/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://vercel.com/)

**Versi:** 1.1.0-stable | **Status:** Production Ready

Amandya Tech adalah ekosistem perangkat lunak *Smart Interactive Photobooth System* generasi berikutnya. Repositori ini berisi kode sumber untuk *landing page* pemasaran premium bergaya SaaS Modern / Web3 yang dirancang untuk mempresentasikan proposisi nilai Amandya Tech: **"The Vercel of Photobooth Software"**.

---

## ✨ Fitur Utama

- **Premium UI/UX:** Desain *glassmorphism* modern dengan fokus pada estetika tinggi dan kegunaan.
- **Ultra-Fast Performance:** Skor Core Web Vitals yang dioptimalkan untuk pengalaman tanpa hambatan.
- **Interactive Bento Grid:** Presentasi fitur menggunakan layout asimetris bergaya Apple/Linear.
- **Dynamic Content:** Integrasi penuh dengan Sanity.io untuk pengelolaan konten yang fleksibel.
- **Smooth Animations:** Menggunakan Framer Motion dan GSAP untuk interaksi berbasis gulir yang halus.

---

## 🏗 Teknologi (Tech Stack)

Sistem ini dikembangkan menggunakan arsitektur **JAMstack** modern:

- **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- Node.js (versi 20.x ke atas)
- npm / pnpm / bun

### Instalasi
1.  **Kloning repositori:**
    ```bash
    git clone https://github.com/aryasetiap/amandya-tech.git
    cd amandya-tech
    ```
2.  **Instal dependensi:**
    ```bash
    npm install
    ```
3.  **Konfigurasi Variabel Lingkungan:**
    Buat file `.env.local` dan isi dengan kredensial Sanity Anda:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

### Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000).

---

## 📂 Struktur Direktori

```text
src/
├── app/              # Routing (Next.js App Router)
├── components/       # Komponen UI & Section
│   ├── ui/           # Radix/Shadcn Base
│   ├── sections/     # Page Sections (Hero, Features, etc.)
│   └── shared/       # Navbar & Footer
├── lib/              # Config & Sanity Client
└── styles/           # Global CSS (Tailwind v4)
```

---

## ⚡ Target Performa
- **LCP:** < 2.0 detik
- **CLS:** < 0.1
- **SEO Ready:** Metadata dinamis dan struktur heading semantik.

---

## 🌐 Deployment
Dideploy secara otomatis melalui **Vercel** setiap kali ada perubahan pada cabang `main`.

---

## 📚 Referensi
- [Dokumentasi Next.js](https://nextjs.org/docs)
- [Sanity Studio](https://www.sanity.io/docs)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs/v4-beta)