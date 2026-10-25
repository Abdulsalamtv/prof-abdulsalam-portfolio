import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prof_Abdulsalam | Web3 Creator & Community Builder",
  description:
    "Web3 content, research, and community storytelling by Prof_Abdulsalam. Open to paid campaigns, KOL partnerships, and ecosystem collaborations.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Prof_Abdulsalam | Web3 Creator & Community Builder",
    description: "Turning complex Web3 ideas into clear, useful content.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
