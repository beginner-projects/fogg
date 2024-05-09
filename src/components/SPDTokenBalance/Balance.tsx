'use client'

import { useEffect, useState } from "react";
import Web3 from "web3";
import FLTABI from "@/lib/FLTABI.json";
import { useMetaMask } from "@/context/useMetaMask";
import { formatBalanceEight } from "@/utils";

const Home: React.FC = () => {
    const { wallet } = useMetaMask();
    const [usersFLTBalance, setUsersFLTBalance] = useState<number>(0);

    // fetch FLT token balance
    const tokenAddress: string = "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1";

    useEffect(() => {
        const fetchFLTBalance = async () => {
            try {
                if (!wallet.accounts || wallet.accounts.length === 0) {
                    // Handle case where MetaMask account is not available
                    setUsersFLTBalance(0);
                    return;
                }

                const web3 = new Web3(
                    Web3.givenProvider || "https://bsc-dataseed.binance.org/"
                );
                const tokenContract = new web3.eth.Contract(FLTABI, tokenAddress);
                const tokenBalanceScientific: string = await tokenContract.methods
                    .balanceOf(wallet.accounts[0])
                    .call();
                const formattedTokenBalanceScientific: string = formatBalanceEight(
                    tokenBalanceScientific
                );
                setUsersFLTBalance(parseFloat(formattedTokenBalanceScientific));
            } catch (error) {
                console.error("Error fetching balance:", error);
                // Handle error gracefully, set balance to 0
                setUsersFLTBalance(0);
            }
        };

        fetchFLTBalance();

        const interval = setInterval(fetchFLTBalance, 15000);

        return () => clearInterval(interval);
    }, [wallet.accounts, tokenAddress]);

    return (
        <>
            {usersFLTBalance > 0
                ? `${usersFLTBalance.toFixed(2)} SPD`
                : "0.00 SPD"}
        </>
    );
};

export default Home;

