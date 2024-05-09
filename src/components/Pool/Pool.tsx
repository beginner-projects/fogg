'use client'

import { usePool } from "@/context/useBitcoinContext"
import styles from "./Pool.module.css"

export default function Pool() {
    const { bitcoinPoolBalance } = usePool();

    // Function to format balance with commas remains unchanged
    const formatBalanceWithCommas = (bitcoinPoolBalance: number | null) => {
        if (bitcoinPoolBalance !== null) {
            return bitcoinPoolBalance.toLocaleString();
        } else {
            return "00"; // Or whatever default value you prefer
        }
    };
    
    return (
        <div className={styles.poolWrapper}>
            <span className={styles.subTag}>Bitcoin Pool: (satoshi)</span>
            <span className={styles.poolBalance}>{formatBalanceWithCommas(bitcoinPoolBalance)}</span>
            
        </div>
    )
}