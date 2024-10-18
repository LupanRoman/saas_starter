import { Inter } from "next/font/google";
import "@/app/globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js, Supabase and Lemon Squeezy Starter Kit",
  description: "My personal template for building apps fast",
};

const inter = Inter({ subsets: ["latin"] });

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="from-gradientTop to-gradientBottom bg-gradient-to-br">
        {children}
      </body>
    </html>
  );
}
