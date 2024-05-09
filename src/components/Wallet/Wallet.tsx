'use client'

import styles from './Wallet.module.css'
import Image from 'next/image'
import TokenBalanceFetcher from '@/components/SPDTokenBalance/Balance'
import { useMetaMask } from '@/context/useMetaMask'
import { formatAddress } from '@/utils'

export default function Wallet() {

    const { wallet, connectMetaMask } = useMetaMask()
    

    return (
        <>
            {!wallet.accounts.length && (
                <div  onClick={connectMetaMask} className={styles.walletcntnr}>
                    <Image className={styles.walletImage} src="/wallet.svg" alt='wallet-icon' width={30} height={30} />
                    <div className={styles.cwspdtext}>
                        <span className={styles.cwtext}>Connect Wallet</span>
                        <span className={styles.spdtext}>
                            <TokenBalanceFetcher />
                        </span>
                    </div>
                </div>
            )}

            {wallet.accounts.length > 0 && (
                <div className={styles.walletcntnr}>
                    <Image className={styles.walletImage} src="/wallet.svg" alt='wallet-icon' width={30} height={30} />
                    <div className={styles.cwspdtext}>
                        <span className={styles.cwtext}>{formatAddress(wallet.accounts[0])}</span>
                        <span className={styles.spdtext}>
                            <TokenBalanceFetcher />
                        </span>
                    </div>
                </div>
            )}

        </>
    )
}

