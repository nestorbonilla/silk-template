import { useSwitchChain } from "wagmi";

function SwitchChains() {
  const { chains, switchChain } = useSwitchChain();

  return (
    <div className="p-4 rounded-md border-black border bg-white w-1/2">
      <h2 className="text-lg font-semibold mb-2">Switch Chains</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {chains.map((chain) => (
          <button
            key={chain.id}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(60,28,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(60,28,1)]"
            onClick={() => switchChain({ chainId: chain.id })}
          >
            {chain.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SwitchChains;