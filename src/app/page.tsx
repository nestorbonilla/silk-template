'use client';
import { useWallet } from "@/components/WalletContext";

export default function Home() {
  
  const {
    connected,
    walletClient,
    userAddress,
  } = useWallet();
  
  return (
    <main className="flex flex-grow flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl flex items-center justify-center font-mono text-sm lg:flex"> {/* Added justify-center */}
        {connected && walletClient && userAddress.length > 0 ? (userAddress) : ("Not connected")}
      </div>
    </main>
  );
}
