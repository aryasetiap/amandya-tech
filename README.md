# Amandya Tech - Marketing Landing Page

**Versi:** 1.1.0 | **Status:** Dalam Pengembangan (Active)

Amandya Tech adalah ekosistem perangkat lunak *Smart Interactive Photobooth System* generasi berikutnya. Repositori ini berisi kode sumber untuk *landing page* pemasaran premium bergaya SaaS Modern / Web3 yang dirancang untuk mempresentasikan proposisi nilai Amandya Tech kepada target pasar, termasuk pemilik bisnis photobooth, Event Organizer (EO), dan agensi kreatif.

Proyek ini memposisikan Amandya Tech sebagai "The Vercel/Linear of Photobooth Software"—berfokus pada estetika tinggi, performa kilat (*ultra-fast*), dan Pengalaman Pengguna (UX) tanpa hambatan (*effortless*).

---

## 🏗 Arsitektur Sistem & Teknologi (Tech Stack)

Sistem ini dikembangkan menggunakan arsitektur **JAMstack** (JavaScript, API, Markup) dan prinsip **Decoupled Architecture**.

*   **Frontend Framework:** [Next.js 14 (App Router)](https://nextjs.org/) - SSR & SSG untuk optimasi SEO.
*   **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) - Desain *glassmorphism* premium.
*   **Animation Engine:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) - Animasi berbasis gulir performa tinggi.
*   **Content Management System (CMS):** [Sanity.io](https://www.sanity.io/) - *Headless CMS* untuk pengelolaan konten dinamis.
*   **Deployment & CI/CD:** [Vercel](https://vercel.com/) - Platform *edge global* untuk pengerahan otomatis.

---

## 🚀 Cara Menjalankan Proyek (Getting Started)

### Prasyarat
Pastikan Anda telah menginstal Node.js (versi 18.x atau terbaru) dan pengelola paket (`npm`, `yarn`, `pnpm`, atau `bun`).

### Instalasi
1.  Kloning repositori:
    ```bash
    git clone https://github.com/aryasetiap/amandya-tech.git
    cd amandya-tech
    ```
2.  Instal semua dependensi:
    ```bash
    npm install
    ```
3.  Atur variabel lingkungan. Buat file `.env.local` di root direktori:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

### Mode Pengembangan
Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```
Buka [http://localhost:3000](http://localhost:3000) di peramban Anda.

---

## 📂 Struktur Direktori
Pengorganisasian kode menggunakan prinsip *Separation of Concerns*:

```text
amandya-tech/
├── src/
│   ├── app/              # Routing Next.js App Router
│   ├── components/       
│   │   ├── ui/           # Komponen dasar Shadcn UI
│   │   ├── bento/        # Komponen spesifik Bento Grid
│   │   ├── animations/   # Wrapper animasi
│   │   └── shared/       # Komponen global (Navbar, Footer)
│   ├── lib/              # Utilitas & Client Sanity
│   └── styles/           # Global CSS & Tailwind config
├── sanity/               # Skema data Sanity Studio
└── public/               # Aset statis (Logo, Ikon, Gambar)
```

---

## ⚡ Target Performa (Core Web Vitals)
*   **LCP (Largest Contentful Paint):** < 2.5 detik.
*   **FID (First Input Delay):** < 100 milidetik.
*   **CLS (Cumulative Layout Shift):** < 0.1.
*   **Lazy Loading:** Komponen *below-the-fold* dimuat secara dinamis via `next/dynamic`.

---

## 🌐 Publikasi (Deployment)
Setiap *commit* ke cabang `main` akan memicu proses *build* dan *deployment* otomatis di **Vercel**. Pastikan Environment Variables telah dikonfigurasi di dasbor Vercel.

---

## 📚 Pelajari Lebih Lanjut
*   [Dokumentasi Next.js](https://nextjs.org/docs)
*   [Sanity Next.js Toolkit](https://www.sanity.io/docs/nextjs)
*   [Shadcn UI Docs](https://ui.shadcn.com/docs)