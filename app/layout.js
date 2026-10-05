import { Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata = {
  title: "Main Na Mano Haar 3.0 | Creative Competition on Resilience",
  description:
    "Main Na Mano Haar is an annual creative competition running since 2023 for ages 8+. Submit Visual Art or Written Works in English, Urdu or Arabic. Submissions close 25 November 2026.",
  openGraph: {
    title: "Main Na Mano Haar 3.0",
    description:
      "After two successful years, Main Na Mano Haar is now entering its third year. A creative competition on resilience for ages 8+. Submissions close 25 November 2026.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#2d2728",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urdu.variable}>
      <body>{children}</body>
    </html>
  );
}
