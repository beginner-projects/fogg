import Image from "next/image"
import Link from "next/link"
import FlashIcon from '../../../public/flash.svg'
import styles from './FlashLogo.module.css'

export default function FlashLogo() {

    
    return (
        <>
        <Link  href="/">
            <Image className={styles.flashImage} src={FlashIcon} alt="flash-logo" width={40} height={40} />
        </Link>
        </>
        
    )
}