import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papercloudtech - Open Source Innovation",
  description: "Building the future through open collaboration. Explore our innovative open-source projects and join our community of developers.",
  keywords: ["open source", "software development", "innovation", "collaboration", "papercloudtech"],
  authors: [{ name: "Papercloudtech" }],
  creator: "Papercloudtech",
  icons: {
    icon: "/papercloud-web/favicon.ico",
    shortcut: "/papercloud-web/favicon.ico",
    apple: "/papercloud-web/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Papercloudtech - Open Source Innovation",
    description: "Building the future through open collaboration",
    siteName: "Papercloudtech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Papercloudtech - Open Source Innovation",
    description: "Building the future through open collaboration",
    creator: "@papercloudtech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
