import Image from "next/image"
import './index.css'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="menuWrapper">
                <div className="buyNowWrapper">
                    <Link href="/buy-spd">
                        <Image className="imageSwap" src="/swapTokenIcon3000.svg" alt="swap-icon" width={200} height={200} />
                    </Link>
                    <Link href="/buy-spd">
                        <Image className="gamePadImage" src="/arrowRightDiagonal.svg" alt="game-pad" height={50} width={50} />
                    </Link>
                </div>
                <div className="stakeWrapper">
                    <Link href="/stake">
                        <Image className="imageSwap" src="/stakeIcon.svg" alt="swap-icon" width={200} height={200} />
                    </Link>
                    <Link href="/stake">
                        <Image className="gamePadImage" src="/arrowRightDiagonal.svg" alt="game-pad" height={50} width={50} />
                    </Link>
                </div>

            </div>
        </>
    )
}