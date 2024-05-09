'use client'

import styles from './Bg.module.css'
import Pool from "../Pool/Pool"
import Timer from '../Timer/Timer'
import Image from 'next/image'
import Link from 'next/link'

export default function Bg() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.poolData}>
                    <Pool />
                    <Timer />
                    <Link href="/menu">
                        <Image className={styles.gamePadImage} src="/menu.svg" alt="game-pad" height={50} width={50} />
                    </Link>
                </div>
            </div>
        </>
    )
}