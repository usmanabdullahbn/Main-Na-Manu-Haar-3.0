import { Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata = {
  title: "Main Na Manu Haar 3.0 — I fall, I rise, I try again",
  description:
    "A national and international creative competition for ages 8+. Submit Visual Art or Written Works (English, Urdu, Arabic). Cash prizes, e-certificates and a place in the official digital anthology. Submissions close 25 November 2026.",
  openGraph: {
    title: "Main Na Manu Haar 3.0",
    description:
      "I fall, I rise, I try again. A creative competition on resilience for ages 8+. Submissions close 25 November 2026.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1b1433",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urdu.variable}>
      <body>{children}</body>
    </html>
  );
}
