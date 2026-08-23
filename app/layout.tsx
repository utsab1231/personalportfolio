import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Noto_Sans_Devanagari } from "next/font/google";
import localFont from "next/font/local";
import { FaviconAnimator } from "@/components/favicon-animator";
import { faviconSvgDataUri } from "@/lib/favicon";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-deva",
  subsets: ["devanagari"],
});

// Decorative display font used only for the splash screen's name heading.
const cartoonBlocks = localFont({
  src: "../public/fonts/From Cartoon Blocks.ttf",
  variable: "--font-cartoon-blocks",
});

export const metadata: Metadata = {
  title: "Utsab Adhikari",
  description: "Software Engineer specializing in .NET, React, and Interactive Web Applications.",
};

// Applies the persisted theme before paint so there is no flash of the wrong
// theme on load. Any theme other than "light" also gets the .dark class, so
// Tailwind's dark: variant (used sparingly, e.g. in worm.tsx) keeps working.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme !== "light");
  } catch (e) {}
})();
`;

// Static default favicon frame for the pre-JS/initial paint, matching the
// light theme's colors. FaviconAnimator takes over (and starts blinking)
// once the page has mounted.
const defaultFaviconHref = faviconSvgDataUri("#fbfbfb", "#09090b", true);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${notoDevanagari.variable} ${cartoonBlocks.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="icon" href={defaultFaviconHref} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans" suppressHydrationWarning>
        <FaviconAnimator />
        {children}
      </body>
    </html>
  );
}
