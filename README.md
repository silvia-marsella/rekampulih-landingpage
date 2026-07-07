# rekampulih — Landing Page (Next.js + Tailwind CSS)

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Yang berubah di versi ini

- Seluruh halaman ditulis ulang pakai **Tailwind CSS** (`className`), bukan lagi `style` inline + `dangerouslySetInnerHTML`. Jadi sekarang kodenya JSX asli, gampang diedit langsung lewat className.
- Padding atas-bawah setiap `<section>` diseragamkan jadi **`py-16` (4rem)**.
- Efek hover tombol/link sekarang pakai class `hover:` bawaan Tailwind (mis. `hover:bg-[#16805E]`) — trik `style-hover` + `useEffect` yang lama sudah dihapus karena tidak diperlukan lagi.
- Kode yang sudah tidak dipakai (`rootRef`, `useEffect` untuk hover manual, `dangerouslySetInnerHTML`) sudah dibuang.
- Ditambahkan `tailwind.config.js` dan `postcss.config.js` karena project sebelumnya belum pakai Tailwind.

## Yang perlu diperhatikan

- **Gambar hero**: ganti `src="/41d73459-cb61-461b-8923-f16c10553877.webp"` di `app/page.tsx` dengan foto Anda sendiri di folder `public/`.
- **Form "Minta Akses"**: tetap 100% interaktif dengan React state, validasi sama seperti sebelumnya.
- **Kirim data form ke backend**: ada komentar `TODO` di `app/page.tsx` dalam fungsi `onSubmit` untuk disambungkan ke Supabase/API Anda.
- **Animasi**: `rpFloat` (kartu melayang di hero) dan `rpFade` (transisi form sukses) didefinisikan di `app/globals.css`, dipanggil lewat `animate-[rpFloat_6s_ease-in-out_infinite]` di Tailwind.
