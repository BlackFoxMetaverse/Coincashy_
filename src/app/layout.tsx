import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coincashy",
  description: "Coincashy connects people and businesses to crypto, stablecoins, fiat rails, wallets, cards and payment infrastructure.",
  icons: {
    icon: "/media/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
