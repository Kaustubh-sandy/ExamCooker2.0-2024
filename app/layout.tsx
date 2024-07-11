import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClientProvider } from "./components/Provider";

export const metadata = {
    title: "ExamCooker 2024",
    description: "ACM-VIT 2024 ExamCooker Website",
    // metadataBase: new URL(""),
};
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${plus_jakarta_sans.className} antialiased bg-[#C2E6EC] dark:bg-[#0C1222]`} style={{ margin: "0" }}>
                <ClientProvider>
                    {children}
                </ClientProvider>
            </body>
        </html>
    );
}
