import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "meme-system-ui/tailwind.css";
import ThemeProvider from "@/components/layouts/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Acme管理画面",
    default: "Acme管理画面",
  }
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
