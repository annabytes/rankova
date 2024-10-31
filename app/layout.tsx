import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { PropsWithChildren } from "react";
import { ScrollToTop } from "./elements/scroll-to-top/ScrollToTop";
import "./globals.css";
import { Footer } from "./sections/footer/Footer";
import { Nav } from "./sections/nav/Nav";

const comfortaa = Comfortaa({
    variable: "--comfortaa",
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export const metadata: Metadata = {
    title: "Ранкова",
    description: "Музика для всіх, а не тільки для обраних",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
    },
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={`${comfortaa.className}`}>
                <Nav />
                <ScrollToTop />

                {children}
                <Footer />
            </body>
        </html>
    );
}
