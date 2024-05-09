import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PoolProvider } from "@/context/useBitcoinContext";
import { MetaMaskContextProvider } from '@/context/useMetaMask'
import Wallet from "@/components/Wallet/Wallet";
import FlashLogo from "@/components/Logo/FlashLogo";
import styles from '@/components/BG/Bg.module.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Speed",
  description: "Keep Hustling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MetaMaskContextProvider>
            <PoolProvider>
            <div className={styles.maincntnr}>
                    <Wallet />
                    <FlashLogo />
                </div>
              {children}
            </PoolProvider>
          </MetaMaskContextProvider>
      </body>
    </html >
  );
}
