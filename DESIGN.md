# DESIGN.md — Erles Bakery (App Publik)

> Draft arah desain berdasarkan materi promosi Instagram @erles_donut.mlg dan karakter usaha (rumahan, dikelola satu pemilik, berbasis di Malang). Hex code & font di bawah adalah **usulan**, bukan keputusan final dari pemilik — sesuaikan kalau ada preferensi brand yang beda.

## Identity
Erles Bakery adalah produsen roti manis & donat rumahan di Malang, dikelola sendiri oleh satu pemilik — bukan toko besar/korporat. Produk utama: roti manis, donat (termasuk varian premium topping almond/cokelat), dan kategori Hampers (parsel hadiah, kesan lebih spesial). Kesan yang mau dibangun: **hangat, personal, dan bisa dipercaya**, seperti beli langsung dari dapur rumah tangga, bukan dari e-commerce besar.

## Personality
- Hangat (warm), bukan dingin/steril
- Personal — terasa ada orang di baliknya, bukan brand korporat
- Jujur & sederhana (homemade), bukan "mewah" berlebihan — kecuali di bagian Hampers yang boleh terasa sedikit lebih premium
- **Anti-contoh** (hindari): korporat/SaaS, minimalis dingin ala startup tech, glassmorphism, dark-mode default, "elegant luxury brand" yang kaku

## Palette
| Peran | Warna | Hex |
|---|---|---|
| Background utama | Krem hangat | `#FFF8F0` |
| Teks utama | Cokelat tua (roasted coffee) | `#3D2817` |
| Aksen utama | Terracotta / warna kerak roti panggang | `#D97748` |
| Aksen sekunder (promo, CTA) | Pink hangat (senada flyer promo IG) | `#E85D75` |
| Aksen Hampers (kesan spesial) | Emas pudar | `#C89B3C` |
| Netral/garis | Krem lebih gelap | `#E8D9C5` |

Jangan pakai gradient biru-ungu default atau palet biru korporat — itu gak merepresentasikan brand ini sama sekali.

## Typography
- **Heading/Display:** `Fraunces` (Google Fonts) — serif hangat yang terasa "dibuat dengan tangan", bukan serif formal/korporat
- **Body/UI:** `Work Sans` (Google Fonts) — bersih dan mudah dibaca, tapi tidak sedingin Inter
- Hindari pakai Inter sebagai satu-satunya font di seluruh halaman — itu salah satu ciri paling gampang dikenali sebagai "AI banget"

## Mood
Reading this as: small home-bakery storefront untuk pelanggan lokal Malang, dengan bahasa visual hangat & handmade, dial **ENERGY 2 / RHYTHM 2 / MOTION 1**.

(Alasan dial: ini bukan brand yang "teriak" — energinya hangat-mengundang, bukan flat/datar tapi juga bukan agresif. Layout boleh sedikit asimetris/bervariasi antar section, tapi motion dibuat minim karena mayoritas pelanggan akses dari HP dengan koneksi yang mungkin terbatas.)

**Implementasi MOTION 1 (ketentuan, bukan opsional):**
- Fade-in / slide-up ringan saat elemen pertama kali masuk viewport (sekali jalan per elemen, bukan diulang tiap scroll naik-turun)
- Transisi halus (±150-200ms) pada hover/tap tombol dan kartu produk
- **Tidak boleh** scroll-scrubbing/animasi yang progress-nya terikat posisi scroll (seperti GSAP ScrollTrigger scrubbing) — terlalu berat untuk mobile dan terasa seperti template portfolio/SaaS, bukan toko roti rumahan

## Do Not Use (anti-pattern yang pernah ketemu di repo ini)
- Data placeholder palsu (alamat/nomor karangan) — selalu pakai data asli Erles Bakery
- Emoji dekoratif nempel di nama brand (🍞 dsb.)
- Icon sosial media berupa karakter unicode mentah — pakai icon library yang konsisten (`lucide-react`)
- Copy generik "artisan/premium quality" ala template bakery mana pun
- Tagline bahasa Inggris yang nyempil di tengah halaman berbahasa Indonesia
- Grid fitur 3-kolom simetris generik ala landing page SaaS
