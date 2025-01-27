"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface AddToMetaMaskProps {
	name: string;
	chainId: string;
	token: string;
	rpcs: string[];
	be: string[];
}

const AddToMetaMask: React.FC<AddToMetaMaskProps> = ({
	name,
	chainId,
	token,
	rpcs,
	be,
}) => {
	const handleAddToMetaMask = () => {
		// @ts-ignore
		if (typeof window !== "undefined" && !window.ethereum?.request) {
			return alert(
				"Have you installed MetaMask yet? If not, please do so.\n\nComputer: Once it is installed, you will be able to add the network to your MetaMask.\n\nPhone: Open the website through your MetaMask Browser to add the network.",
			);
		}
		const startTime = Date.now();
		// @ts-ignore
		window.ethereum
			.request({
				method: "wallet_addEthereumChain",
				params: [
					{
						chainId: chainId,
						chainName: name,
						nativeCurrency: {
							name: token,
							symbol: token,
							decimals: 18,
						},
						rpcUrls: rpcs,
						blockExplorerUrls: be,
					},
				],
			})
			.then((response) => {
				const isAutomatedResponse = Date.now() - startTime < 100;
				if (response === null && isAutomatedResponse)
					alert(`The ${name} RPC is already added.`);
			});
	};
	return (
		<Button
			onClick={handleAddToMetaMask}
			className="flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
		>
			<span className="flex items-center">
				<span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
				<span className="text-sm text-white">Add to MetaMask</span>
			</span>
		</Button>
	);
};

interface AddSecureRPCToMetaMaskProps {
	rpcs: string[];
}

export const AddSecureRPCToMetaMask: React.FC<AddSecureRPCToMetaMaskProps> = ({
	rpcs,
}) => {
	return (
		<AddToMetaMask
			name="SecureRPC Ethereum"
			chainId="0x1"
			token="ETH"
			rpcs={rpcs}
			be={["https://blockscout.com"]}
		/>
	);
};
