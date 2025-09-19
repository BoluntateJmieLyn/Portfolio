import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "This is a porfolio to showcase skills and projects. This is made using next js, tailwind, and shadcn components",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
