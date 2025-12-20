import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Senior Blockchain Engineer | miracle',
  description: 'Building Ethereum & Solana DeFi, NFTs, and cross-chain systems at scale. Specializing in production-ready blockchain architecture.',
  keywords: ['Blockchain', 'Ethereum', 'Solana', 'DeFi', 'NFT', 'Smart Contracts', 'Web3'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
