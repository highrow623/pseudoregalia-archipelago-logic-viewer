import type { Metadata } from "next";
import "./globals.css";
import { DifficultyProvider } from "./context/difficulty";
import { ItemsProvider } from "./context/items";

export const metadata: Metadata = {
  title: "Pseudo AP Logic Viewer",
  description: "View logic for the Pseudoregalia Archipelago apworld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DifficultyProvider>
          <ItemsProvider>{children}</ItemsProvider>
        </DifficultyProvider>
      </body>
    </html>
  );
}
