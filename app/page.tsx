"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inputClass =
  "w-full rounded-[11px] border border-[#DCE7E2] bg-white px-3.5 py-3 text-[length:var(--fs-p)] text-[#15241E] font-[inherit] focus:outline-none focus:border-[#1D9E75] focus:ring-[3px] focus:ring-[#1D9E75]/[.14]";

// ---------------------------------------------------------------------
// TYPOGRAPHY SCALE
// Only 4 font sizes exist across the whole page, each fixed (no gradual
// shrinking — the size just switches once at max-width: 1024px):
//
//              Desktop (>1024px)   Tablet/Mobile (<=1024px)
//   --fs-h1  :   48px                36px
//   --fs-h2  :   36px                24px
//   --fs-p   :   16px                15px
//   --fs-sm  :   14px                13px
//
// To retune, just edit the px values below — the whole site follows.
// ---------------------------------------------------------------------
const typographyStyles = `
  :root {
    --fs-h1: 48px;
    --fs-h2: 36px;
    --fs-p: 16px;
    --fs-sm: 14px;
  }

  @media (max-width: 1024px) {
    :root {
      --fs-h1: 36px;
      --fs-h2: 24px;
      --fs-p: 15px;
      --fs-sm: 13px;
    }
  }
`;

export default function Page() {
  const [form, setForm] = useState({
    nama: "",
    gelar: "",
    tipe: "",
    email: "",
    whatsapp: "",
    subdomain: "",
    pesan: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedSub, setSubmittedSub] = useState("");

  const sanitizeSub = (v: string) =>
    (v || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9-]/g, "");

  const onField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setError("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.nama ||
      !form.gelar ||
      !form.tipe ||
      !form.email ||
      !form.whatsapp ||
      !form.subdomain
    ) {
      setError("Mohon lengkapi semua kolom yang wajib diisi (*).");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Format email belum valid.");
      return;
    }

    const sub = sanitizeSub(form.subdomain);

    // -------------------------------------------------------------------
    // TODO: Hubungkan ke backend Anda di sini (mis. Supabase, API route
    // Next.js, dsb.) untuk menyimpan data ke tabel `permintaan_akses`.
    //
    // Contoh (Supabase):
    //   const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    //   await supabase.from("permintaan_akses").insert({
    //     nama_lengkap: form.nama,
    //     gelar: form.gelar,
    //     tipe_profesi: form.tipe,
    //     email: form.email,
    //     whatsapp: form.whatsapp,
    //     subdomain: sub,
    //     pesan: form.pesan,
    //   });
    // -------------------------------------------------------------------

    setSubmitted(true);
    setError("");
    setSubmittedName(form.nama);
    setSubmittedSub(sub + ".rekampulih.com");
  };

  const onReset = () => {
    setForm({
      nama: "",
      gelar: "",
      tipe: "",
      email: "",
      whatsapp: "",
      subdomain: "",
      pesan: "",
    });
    setSubmitted(false);
    setError("");
    setSubmittedName("");
    setSubmittedSub("");
  };

  const subPreview = sanitizeSub(form.subdomain) || "nama";

  return (
    <div className={`${inter.className} bg-white text-[#15241E] leading-relaxed antialiased`}>
      <style jsx global>{typographyStyles}</style>

      {/* ============ NAVBAR ============ */}
      <header className="navbar sticky top-0 z-50 border-b border-[#EAF1EE] bg-white/85 backdrop-blur-md backdrop-saturate-150">
        <nav className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between gap-6">
          <a
            href="#top"
            className="flex items-center gap-0.5 text-[length:var(--fs-p)] font-bold tracking-[-.02em] no-underline"
          >
            <span className="text-[#15241E]">rekam</span>
            <span className="text-[#1D9E75]">pulih</span>
          </a>
          <div className="flex items-center gap-1">
            <a
              href="#fitur"
              className="hidden rounded-lg px-3.5 py-2 text-[length:var(--fs-p)] font-medium text-[#4A5A53] no-underline transition-colors hover:bg-[#F2F7F5] hover:text-[#15241E] min-[768px]:inline-block"
            >
              Fitur
            </a>
            <a
              href="#untuk-siapa"
              className="hidden rounded-lg px-3.5 py-2 text-[length:var(--fs-p)] font-medium text-[#4A5A53] no-underline transition-colors hover:bg-[#F2F7F5] hover:text-[#15241E] min-[768px]:inline-block"
            >
              Untuk Siapa
            </a>
            <a
              href="#harga"
              className="hidden rounded-lg px-3.5 py-2 text-[length:var(--fs-p)] font-medium text-[#4A5A53] no-underline transition-colors hover:bg-[#F2F7F5] hover:text-[#15241E] min-[768px]:inline-block"
            >
              Harga
            </a>
            <a
              href="#masuk"
              className="rounded-lg px-3.5 py-2 text-[length:var(--fs-p)] font-medium text-[#4A5A53] no-underline transition-colors hover:bg-[#F2F7F5] hover:text-[#15241E]"
            >
              Masuk
            </a>
            <a
              href="#form"
              className="ml-2 whitespace-nowrap rounded-[10px] bg-[#1D9E75] px-[18px] py-2.5 text-[length:var(--fs-p)] font-semibold text-white no-underline shadow-[0_2px_8px_rgba(29,158,117,.28)] transition-colors hover:bg-[#16805E]"
            >
              Minta Akses
            </a>
          </div>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <section
        id="top"
        className="hero-section relative overflow-hidden bg-gradient-to-b from-[#F4FAF7] to-white py-24"
      >
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DDEDE6] bg-white px-3.5 py-[7px] text-[length:var(--fs-sm)] font-semibold text-[#16805E] shadow-[0_1px_3px_rgba(20,40,30,.05)]">
              <span>🇮🇩</span>
              <span>Gratis untuk praktisi Indonesia</span>
            </div>
            <h1 className="mt-[22px] text-balance text-[length:var(--fs-h1)] font-extrabold leading-[1.08] tracking-[-.03em] text-[#15241E]">
              Satu platform untuk semua praktisi solo.
            </h1>
            <p className="mt-[22px] max-w-[520px] text-[length:var(--fs-p)] leading-[1.65] text-[#4A5A53]">
              Kelola pasien, catat rekam medis, dan terima booking online — dirancang khusus
              untuk{" "}
              <strong className="font-semibold text-[#15241E]">
                psikolog, terapis, dan dokter umum
              </strong>{" "}
              yang bekerja mandiri.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <a
                href="#form"
                className="rounded-xl bg-[#1D9E75] px-[26px] py-3.5 text-[length:var(--fs-p)] font-semibold text-white no-underline shadow-[0_6px_18px_rgba(29,158,117,.30)] transition-colors hover:bg-[#16805E]"
              >
                Minta Akses →
              </a>
              <a
                href="#fitur"
                className="rounded-xl border border-[#DDEDE6] bg-white py-3.5 px-[26px] text-[length:var(--fs-p)] font-semibold text-[#15241E] no-underline transition-colors hover:bg-[#F2F7F5]"
              >
                Pelajari fitur ↓
              </a>
            </div>
            <div className="mt-[30px] flex items-center gap-[18px] text-[length:var(--fs-sm)] font-medium text-[#7B8A84]">
              <span className="inline-flex items-center gap-[7px]">
                <span className="text-[#1D9E75]">✓</span> Tanpa kartu kredit
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <span className="text-[#1D9E75]">✓</span> Data terenkripsi
              </span>
            </div>
          </div>

          {/* split dual-audience card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-[18px] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(29,158,117,.12),transparent_70%)]" />
            <div className="card-section relative animate-[rpFloat_6s_ease-in-out_infinite] rounded-3xl border border-[#E6EFEB] bg-white p-[18px] shadow-[0_24px_60px_-20px_rgba(20,60,45,.22)]">
              <div className="grid grid-cols-2 gap-3.5">
                {/* psikolog card */}
                <div className="rounded-2xl border border-[#D8EFE4] bg-[#F1FAF6] p-4 px-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D9E75] text-[22px]">
                    🧠
                  </div>
                  <div className="mt-3 text-[length:var(--fs-p)] font-bold text-[#15241E]">
                    Psikolog / Terapis
                  </div>
                  <div className="mt-3 flex flex-col gap-[7px]">
                    <span className="rounded-lg border border-[#D8EFE4] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#16805E]">
                      📝 Catatan SOAP
                    </span>
                    <span className="rounded-lg border border-[#D8EFE4] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#16805E]">
                      🧩 Psikodinamika
                    </span>
                    <span className="rounded-lg border border-[#D8EFE4] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#16805E]">
                      🎯 Metode Terapi
                    </span>
                  </div>
                </div>
                {/* dokter card */}
                <div className="rounded-2xl border border-[#D6E5F2] bg-[#EFF5FB] p-4 px-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F7FB8] text-[22px]">
                    🩺
                  </div>
                  <div className="mt-3 text-[length:var(--fs-p)] font-bold text-[#15241E]">Dokter Umum</div>
                  <div className="mt-3 flex flex-col gap-[7px]">
                    <span className="rounded-lg border border-[#D6E5F2] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#2766A0]">
                      🗂️ Riwayat Medis
                    </span>
                    <span className="rounded-lg border border-[#D6E5F2] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#2766A0]">
                      ⚕️ Spesialisasi
                    </span>
                    <span className="rounded-lg border border-[#D6E5F2] bg-white px-2.5 py-1.5 text-[length:var(--fs-sm)] font-semibold text-[#2766A0]">
                      📝 Catatan SOAP
                    </span>
                  </div>
                </div>
              </div>
              {/* shared strip */}
              <div className="mt-3.5 rounded-2xl bg-[#15241E] px-4 py-3.5">
                <div className="text-[length:var(--fs-sm)] font-semibold uppercase tracking-[.08em] text-[#8FB9A9]">
                  Sama-sama dapat
                </div>
                <div className="mt-2 flex flex-wrap gap-x-3.5 gap-y-2">
                  <span className="text-[length:var(--fs-sm)] font-medium text-[#EAF6F1]">
                    🔗 Halaman Booking
                  </span>
                  <span className="text-[length:var(--fs-sm)] font-medium text-[#EAF6F1]">📅 Jadwal</span>
                  <span className="text-[length:var(--fs-sm)] font-medium text-[#EAF6F1]">
                    ✅ Informed Consent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HUMAN BAND ============ */}
      <section className="saved-notes-section bg-white py-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* photo */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[#EAF6F1]" />
            <img
              src="/41d73459-cb61-461b-8923-f16c10553877.webp"
              alt="Konselor mencatat sambil mendengarkan pasien"
              loading="lazy"
              className="relative block aspect-[4/3.2] w-full rounded-[22px] object-cover object-center shadow-[0_30px_60px_-28px_rgba(20,60,45,.4)]"
            />
            {/* floating chip */}
            <div className="absolute bg-[rgb(255_255_255_/_0.92)] bottom-[18px] left-[18px] flex items-center gap-[11px] rounded-2xl border border-[#E6EFEB] bg-white/92 px-3.5 py-[11px] shadow-[0_12px_28px_-14px_rgba(20,60,45,.32)] backdrop-blur-sm">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#1D9E75] text-base">
                📝
              </span>
              <div className="leading-[1.3]">
                <div className="text-[length:var(--fs-p)] font-bold text-[#15241E]">Catatan tersimpan</div>
                <div className="text-[length:var(--fs-sm)] text-[#7B8A84]">otomatis, real-time</div>
              </div>
            </div>
          </div>
          {/* copy */}
          <div>
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Tetap Hadir
            </div>
            <h2 className="mt-3 text-balance text-[length:var(--fs-h2)] font-extrabold leading-[1.18] tracking-[-.025em] text-[#15241E]">
              Lebih banyak mendengar, lebih sedikit menatap layar
            </h2>
            <p className="mt-4 max-w-[460px] text-[length:var(--fs-p)] leading-[1.65] text-[#4A5A53]">
              Catatan yang cepat dan rapi berarti pekerjaan administratif tidak mengganggu
              hubungan terapeutik. rekampulih dirancang agar Anda bisa tetap hadir penuh untuk
              pasien Anda.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-[11px] text-[length:var(--fs-p)] font-medium text-[#15241E]">
                <span className="text-[#1D9E75]">✓</span> Catat SOAP dalam hitungan detik, bukan
                menit
              </div>
              <div className="flex items-center gap-[11px] text-[length:var(--fs-p)] font-medium text-[#15241E]">
                <span className="text-[#1D9E75]">✓</span> Riwayat lengkap pasien dalam satu layar
              </div>
              <div className="flex items-center gap-[11px] text-[length:var(--fs-p)] font-medium text-[#15241E]">
                <span className="text-[#1D9E75]">✓</span> Booking &amp; jadwal terkelola
                otomatis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ UNTUK SIAPA ============ */}
      <section id="untuk-siapa" className="untuk-siapa-section bg-[#F6F9F8] py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Untuk Siapa
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Dibuat untuk siapa?
            </h2>
            <p className="mt-3.5 text-[length:var(--fs-p)] text-[#4A5A53]">
              Apa pun profesi Anda, rekampulih menyesuaikan diri dengan cara Anda bekerja.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🧠",
                title: "Psikolog solo",
                desc: "SOAP + Psikodinamika + Metode terapi",
                bg: "bg-[#EAF6F1]",
              },
              {
                icon: "💬",
                title: "Konselor independen",
                desc: "SOAP + Catatan sesi + Booking online",
                bg: "bg-[#EAF6F1]",
              },
              {
                icon: "🌿",
                title: "Terapis holistik",
                desc: "Jadwal + Rekam klien + Informed consent",
                bg: "bg-[#EAF6F1]",
              },
              {
                icon: "🩺",
                title: "Dokter umum solo",
                desc: "Riwayat medis + Spesialisasi + Booking online",
                bg: "bg-[#EAF2F9]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8EFEC] bg-white p-6 transition-all hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-18px_rgba(20,60,45,.22)]"
              >
                <div
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-[26px] ${item.bg}`}
                >
                  {item.icon}
                </div>
                <div className="mt-4 text-[length:var(--fs-p)] font-bold">{item.title}</div>
                <p className="mt-2 text-[length:var(--fs-sm)] leading-[1.55] text-[#5B6B65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SHOWCASE ============ */}
      <section className="showcase-section relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(29,158,117,.10),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[640px] text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Tampilan
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Antarmuka yang menenangkan
            </h2>
            <p className="mt-3.5 text-[length:var(--fs-p)] text-[#4A5A53]">
              Bersih, fokus, dan mudah dipakai sehari-hari — tanpa kurva belajar yang curam.
            </p>
          </div>

          {/* app mockup screenshot */}
          <div className="relative mx-auto mt-10 max-w-[940px]">
            <img
              src="/rekampulih-dashboard.webp"
              alt="Tampilan dashboard beranda rekampulih"
              loading="lazy"
              className="block w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ============ FITUR ============ */}
      <section id="fitur" className="fitur-section bg-white py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Fitur
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Semua yang Anda butuhkan
            </h2>
            <p className="mt-3.5 text-[length:var(--fs-p)] text-[#4A5A53]">
              Alat lengkap untuk menjalankan praktik mandiri Anda — tanpa ribet.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "👤",
                title: "Data Pasien",
                desc: "Profil lengkap klien — identitas, kontak, dan riwayat medis atau psikodinamika sesuai profesi Anda.",
              },
              {
                icon: "📝",
                title: "Catatan SOAP",
                desc: "Format catatan sesi standar klinis internasional — Subyektif, Objektif, Asesmen, Perencanaan.",
              },
              {
                icon: "🔢",
                title: "Nomor Rekam Otomatis",
                desc: (
                  <>
                    Setiap pasien mendapat nomor rekam unik otomatis. Format:{" "}
                    <span className="rounded-[5px] bg-[#EAF6F1] px-1.5 py-0.5 font-mono text-[length:var(--fs-sm)] text-[#16805E]">
                      RP-2026-00001
                    </span>
                  </>
                ),
              },
              {
                icon: "📅",
                title: "Jadwal Sesi",
                desc: "Kelola jadwal konsultasi dan pantau status setiap sesi dengan mudah.",
              },
              {
                icon: "🔗",
                title: "Halaman Booking Pribadi",
                desc: (
                  <>
                    Setiap praktisi punya halaman booking unik:{" "}
                    <span className="rounded-[5px] bg-[#EAF6F1] px-1.5 py-0.5 font-mono text-[length:var(--fs-sm)] text-[#16805E]">
                      nama.rekampulih.com
                    </span>
                  </>
                ),
              },
              {
                icon: "✅",
                title: "Informed Consent Digital",
                desc: "Klien menyetujui informed consent sebelum sesi — tersimpan otomatis dengan timestamp.",
              },
              {
                icon: "📧",
                title: "Notifikasi Email Otomatis",
                desc: "Terima notifikasi booking baru. Klien otomatis diberitahu saat sesi dikonfirmasi atau ditolak.",
              },
              {
                icon: "🔒",
                title: "Data Aman & Privat",
                desc: "Data tersimpan dengan enkripsi standar industri. Tidak dijual, tidak dibagikan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8EFEC] bg-[#FBFDFC] p-[24px]"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#EAF6F1] text-[22px]">
                  {item.icon}
                </div>
                <div className="mt-3.5 text-[length:var(--fs-p)] font-bold">{item.title}</div>
                <p className="mt-[7px] text-[length:var(--fs-p)] leading-[1.55] text-[#5B6B65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PERBEDAAN PER PROFESI ============ */}
      <section className="perbedaan-profesi-section bg-[#F6F9F8] py-24">
        <div className="mx-auto max-w-[1020px]">
          <div className="mx-auto max-w-[620px] text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Disesuaikan
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Disesuaikan dengan profesi Anda
            </h2>
            <p className="mt-3.5 text-[length:var(--fs-p)] text-[#4A5A53]">
              Inti platform sama untuk semua. Hanya bagian data klinis yang berbeda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* psikolog column */}
            <div className="overflow-hidden rounded-[20px] border border-[#D8EFE4] bg-white shadow-[0_12px_32px_-20px_rgba(20,60,45,.2)]">
              <div className="flex items-center gap-3 bg-[#1D9E75] py-6 px-6">
                <span className="text-2xl">🧠</span>
                <span className="text-[length:var(--fs-p)] font-bold text-white">Psikolog &amp; Terapis</span>
              </div>
              <div className="pb-2 pt-2 px-6">
                {[
                  { title: "Data Psikodinamika" },
                  { title: "Metode Terapi", sub: "CBT, EMDR, DBT, dll" },
                  { title: "Catatan SOAP" },
                  { title: "Booking online" },
                  { title: "Informed Consent" },
                  { title: "Jadwal Sesi" },
                  { title: "Nomor Rekam", last: true },
                ].map((row) => (
                  <div
                    key={row.title}
                    className={`flex items-start gap-2.5 py-[16px] ${
                      row.last ? "" : "border-b border-[#F0F5F2]"
                    }`}
                  >
                    <span className="font-bold text-[#1D9E75]">✅</span>
                    <div>
                      <div className="text-[length:var(--fs-p)] font-semibold">{row.title}</div>
                      {row.sub && (
                        <div className="mt-px text-[length:var(--fs-sm)] text-[#7B8A84]">{row.sub}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* dokter column */}
            <div className="overflow-hidden rounded-[20px] border border-[#D6E5F2] bg-white shadow-[0_12px_32px_-20px_rgba(20,40,70,.2)]">
              <div className="flex items-center gap-3 bg-[#2F7FB8] py-6 px-6">
                <span className="text-2xl">🩺</span>
                <span className="text-[length:var(--fs-p)] font-bold text-white">Dokter Umum</span>
              </div>
              <div className="px-6 pb-6 pt-2">
                {[
                  { title: "Riwayat Medis" },
                  { title: "Spesialisasi Medis", sub: "Penyakit Dalam, dll" },
                  { title: "Catatan SOAP" },
                  { title: "Booking online" },
                  { title: "Informed Consent" },
                  { title: "Jadwal Sesi" },
                  { title: "Nomor Rekam", last: true },
                ].map((row) => (
                  <div
                    key={row.title}
                    className={`flex items-start gap-2.5 py-[16px] ${
                      row.last ? "" : "border-b border-[#F0F4F8]"
                    }`}
                  >
                    <span className="font-bold text-[#2F7FB8]">✅</span>
                    <div>
                      <div className="text-[length:var(--fs-p)] font-semibold">{row.title}</div>
                      {row.sub && (
                        <div className="mt-px text-[length:var(--fs-sm)] text-[#7B8A84]">{row.sub}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-[length:var(--fs-p)] text-[#5B6B65]">
            Kedua kolom berbagi inti yang sama — hanya bagian{" "}
            <strong className="font-semibold text-[#15241E]">data klinis</strong> yang berbeda.
          </div>
        </div>
      </section>

      {/* ============ HARGA ============ */}
      <section id="harga" className="harga-section bg-white py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
            Harga
          </div>
          <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.12] tracking-[-.025em] text-[#15241E]">
            Gratis Sepenuhnya
          </h2>
          <p className="mx-auto mt-[18px] max-w-[600px] text-[length:var(--fs-p)] leading-[1.65] text-[#4A5A53]">
            rekampulih gratis untuk semua praktisi dengan kurang dari 50 pasien aktif. Jika
            aplikasi ini membantu praktik Anda, Anda bisa traktir kami kopi sebagai bentuk
            dukungan — tapi sama sekali tidak wajib.
          </p>
          <div className="mt-[34px] rounded-[22px] border border-[#D8EFE4] bg-gradient-to-br from-[#F1FAF6] to-[#EAF6F1] px-8 py-9 shadow-[0_16px_40px_-24px_rgba(20,60,45,.28)]">
            <div className="text-[length:var(--fs-h1)] font-extrabold tracking-[-.03em] text-[#15241E]">
              Rp 0
              <span className="text-[length:var(--fs-p)] font-semibold text-[#5B6B65]"> / selamanya</span>
            </div>
            <div className="mt-3.5 text-[length:var(--fs-p)] font-semibold leading-[1.6] text-[#16805E]">
              Gratis untuk ≤ 50 pasien aktif.
              <br />
              Traktir kopi kalau mau. 🙏
            </div>
            <a
              href="https://saweria.co/jwns"
              target="_blank"
              rel="noopener"
              className="mt-[26px] inline-block rounded-xl bg-[#1D9E75] px-[30px] py-3.5 text-[length:var(--fs-p)] font-semibold text-white no-underline shadow-[0_6px_18px_rgba(29,158,117,.30)] transition-colors hover:bg-[#16805E]"
            >
              Traktir Kopi ☕
            </a>
          </div>
        </div>
      </section>

      {/* ============ CARA KERJA ============ */}
      <section className="cara-kerja-section bg-[#F6F9F8] py-24">
        <div className="mx-auto max-w-[1020px]">
          <div className="mx-auto max-w-[600px] text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Cara Kerja
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Mulai dalam 3 langkah
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                n: 1,
                icon: "📋",
                title: "Minta akses",
                desc: "Isi form di bawah dengan data diri dan subdomain yang diinginkan.",
              },
              {
                n: 2,
                icon: "🔗",
                title: "Dapat halaman pribadi",
                desc: (
                  <>
                    Kami siapkan akun dan halaman booking Anda. Misal:{" "}
                    <span className="font-mono text-[length:var(--fs-sm)] text-[#16805E]">
                      nama.rekampulih.com
                    </span>
                  </>
                ),
              },
              {
                n: 3,
                icon: "🚀",
                title: "Mulai kelola praktik",
                desc: "Tambah pasien, catat SOAP, dan terima booking online langsung.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="relative rounded-2xl border border-[#E8EFEC] bg-white py-6 px-6"
              >
                <div className="absolute right-6 top-[22px] text-[length:var(--fs-h2)] font-extrabold leading-none text-[#EAF6F1]">
                  {step.n}
                </div>
                <div className="text-[30px]">{step.icon}</div>
                <div className="mt-3.5 text-[length:var(--fs-p)] font-bold">{step.title}</div>
                <p className="mt-2 text-[length:var(--fs-sm)] leading-[1.6] text-[#5B6B65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FORM MINTA AKSES ============ */}
      <section id="form" className="form-section bg-white py-24">
        <div className="mx-auto max-w-[620px]">
          <div className="text-center">
            <div className="text-[length:var(--fs-sm)] font-bold uppercase tracking-[.1em] text-[#1D9E75]">
              Mulai
            </div>
            <h2 className="mt-3 text-[length:var(--fs-h2)] font-extrabold leading-[1.15] tracking-[-.025em] text-[#15241E]">
              Minta Akses
            </h2>
            <p className="mt-3.5 text-[length:var(--fs-p)] text-[#4A5A53]">
              Isi form berikut dan kami akan hubungi Anda dalam 1–2 hari kerja.
            </p>
          </div>

          {submitted ? (
            <div className="animate-[rpFade_.4s_ease] mt-10 rounded-[20px] border border-[#D8EFE4] bg-[#F1FAF6] px-8 py-11 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1D9E75] text-3xl shadow-[0_8px_20px_rgba(29,158,117,.3)]">
                ✅
              </div>
              <h3 className="mt-5 text-[length:var(--fs-h2)] font-extrabold text-[#15241E]">
                Permintaan terkirim!
              </h3>
              <p className="mt-3 text-[length:var(--fs-p)] leading-[1.6] text-[#4A5A53]">
                Terima kasih, <strong className="text-[#15241E]">{submittedName}</strong>. Kami
                akan menghubungi Anda di{" "}
                <strong className="text-[#16805E]">{submittedSub}</strong> dalam 1–2 hari kerja.
              </p>
              <button
                type="button"
                onClick={onReset}
                className="mt-6 rounded-[10px] border border-[#DDEDE6] bg-white px-[22px] py-[11px] font-[inherit] text-[length:var(--fs-sm)] font-semibold text-[#15241E]"
              >
                Kirim permintaan lain
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-9 rounded-[22px] border border-[#E8EFEC] bg-[#FBFDFC] p-8 shadow-[0_16px_44px_-28px_rgba(20,60,45,.24)]"
            >
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div>
                  <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                    Nama Lengkap <span className="text-[#1D9E75]">*</span>
                  </label>
                  <input
                    name="nama"
                    value={form.nama}
                    onChange={onField}
                    placeholder="Dr. Andi Wijaya"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                    Gelar / Profesi <span className="text-[#1D9E75]">*</span>
                  </label>
                  <input
                    name="gelar"
                    value={form.gelar}
                    onChange={onField}
                    placeholder="M.Psi., Psikolog"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-[18px]">
                <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                  Tipe Profesi <span className="text-[#1D9E75]">*</span>
                </label>
                <select
                  name="tipe"
                  value={form.tipe}
                  onChange={onField}
                  className={`${inputClass} cursor-pointer ${
                    form.tipe ? "text-[#15241E]" : "text-[#9CABA4]"
                  }`}
                >
                  <option value="">Pilih tipe profesi…</option>
                  <option value="Psikolog">Psikolog</option>
                  <option value="Konselor">Konselor</option>
                  <option value="Terapis">Terapis</option>
                  <option value="Dokter Umum">Dokter Umum</option>
                </select>
              </div>

              <div className="mt-[18px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <div>
                  <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                    Email <span className="text-[#1D9E75]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onField}
                    placeholder="anda@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                    Nomor WhatsApp <span className="text-[#1D9E75]">*</span>
                  </label>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={onField}
                    placeholder="08xx-xxxx-xxxx"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-[18px]">
                <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                  Subdomain yang Diinginkan <span className="text-[#1D9E75]">*</span>
                </label>
                <div className="flex items-stretch overflow-hidden rounded-[11px] border border-[#DCE7E2] bg-white">
                  <input
                    name="subdomain"
                    value={form.subdomain}
                    onChange={onField}
                    placeholder="nama"
                    className="flex-1 border-none bg-transparent px-3.5 py-3 font-[inherit] text-[length:var(--fs-p)] text-[#15241E] focus:outline-none"
                  />
                  <span className="flex items-center border-l border-[#E8EFEC] bg-[#F2F7F5] px-3.5 font-mono text-[length:var(--fs-sm)] text-[#7B8A84]">
                    .rekampulih.com
                  </span>
                </div>
                <div className="mt-[9px] text-[length:var(--fs-sm)] text-[#7B8A84]">
                  Halaman Anda:{" "}
                  <span className="font-mono font-semibold text-[#16805E]">
                    {subPreview}.rekampulih.com
                  </span>
                </div>
              </div>

              <div className="mt-[18px]">
                <label className="mb-[7px] block text-[length:var(--fs-sm)] font-semibold text-[#15241E]">
                  Pesan / Pertanyaan{" "}
                  <span className="font-medium text-[#9CABA4]">(opsional)</span>
                </label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={onField}
                  rows={3}
                  placeholder="Ceritakan sedikit tentang praktik Anda…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {error && (
                <div className="mt-[18px] rounded-[11px] border border-[#FADBD8] bg-[#FEF2F2] px-3.5 py-3 text-[length:var(--fs-sm)] font-medium text-[#C0392B]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-[#1D9E75] py-[15px] font-[inherit] text-[length:var(--fs-p)] font-semibold text-white shadow-[0_6px_18px_rgba(29,158,117,.30)] transition-colors hover:bg-[#16805E]"
              >
                Kirim Permintaan →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="masuk" className="footer-section bg-[#15241E] py-16">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-start justify-between gap-8">
          <div className="max-w-[360px]">
            <div className="text-[length:var(--fs-h2)] font-bold tracking-[-.02em]">
              <span className="text-white">rekam</span>
              <span className="text-[#3FCB9C]">pulih</span>
            </div>
            <div className="mt-2.5 text-[length:var(--fs-p)] font-medium text-[#8FB9A9]">
              Catat. Pantau. Pulih.
            </div>
            <p className="mt-4 text-[length:var(--fs-sm)] leading-[1.6] text-[#6F9286]">
              © 2026 rekampulih. Dibuat dengan ❤️ untuk praktisi Indonesia.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#form"
              className="text-[length:var(--fs-sm)] font-medium text-[#C7DAD3] no-underline hover:text-white"
            >
              Minta Akses
            </a>
            <a
              href="#masuk"
              className="text-[length:var(--fs-sm)] font-medium text-[#C7DAD3] no-underline hover:text-white"
            >
              Masuk
            </a>
            <a
              href="#"
              className="text-[length:var(--fs-sm)] font-medium text-[#C7DAD3] no-underline hover:text-white"
            >
              Syarat &amp; Ketentuan
            </a>
            <a
              href="#"
              className="text-[length:var(--fs-sm)] font-medium text-[#C7DAD3] no-underline hover:text-white"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
