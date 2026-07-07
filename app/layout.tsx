import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rekampulih — Satu platform untuk semua praktisi solo",
  description:
    "Kelola pasien, catat rekam medis, dan terima booking online — dirancang khusus untuk psikolog, terapis, dan dokter umum yang bekerja mandiri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
