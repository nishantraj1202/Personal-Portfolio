import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Nishant Raj Jha — Software Developer",
    description:
        "Portfolio of Nishant Raj Jha — Software Developer, Full-Stack Engineer, and AI-Accelerated Builder. CS undergrad at NIT Jalandhar.",
    keywords:
        "Nishant Raj Jha, Software Developer, Full-Stack, React Native, NIT Jalandhar, Portfolio",
    authors: [{ name: "Nishant Raj Jha" }],
    openGraph: {
        title: "Nishant Raj Jha — Software Developer",
        description:
            "Building scalable systems. Shipping real products. Leveraging AI to move 10x faster.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} font-outfit antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
