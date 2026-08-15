import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClinicDataProvider } from "./components/ClinicDataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lucin Medical Centre | Compassionate Care in Kasarani, Nairobi",
    template: "%s · Lucin Medical Centre",
  },
  description:
    "Lucin Medical Centre is a trusted outpatient clinic in Kasarani, Nairobi offering general consultations, diagnostics, maternal & child health, pharmacy and lab services. Walk-ins welcome.",
  keywords: [
    "Lucin Medical Centre",
    "clinic Kasarani",
    "Nairobi clinic",
    "outpatient Nairobi",
    "medical centre Kasarani",
    "doctor Kasarani",
    "lab tests Nairobi",
    "maternal child health Kenya",
  ],
  authors: [{ name: "Lucin Medical Centre" }],
  openGraph: {
    title: "Lucin Medical Centre | Compassionate Care in Kasarani, Nairobi",
    description:
      "Trusted outpatient clinic in Kasarani, Nairobi — general consultations, diagnostics, maternal & child health, pharmacy and lab services.",
    type: "website",
    locale: "en_KE",
    siteName: "Lucin Medical Centre",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-ink-900">
        <ClinicDataProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ClinicDataProvider>
      </body>
    </html>
  );
}
