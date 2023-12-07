import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function () {
    return (
        <div className={styles.container}>
            <div>@all right reserved</div>
            <div className={styles.socials}>
            <Link href= "https://www.facebook.com/">
                <Image className={styles.icon}
                    src={'/1.png'}
                    width={20}
                    height={20}
                    alt="facebok"
                />
                  </Link>
                  <Link href="https://www.instagram.com/">
                 <Image className={styles.icon}
                    src={'/2.png'}
                    width={20}
                    height={20}
                    alt="instagram"
                /></Link>
                <Link href="https://twitter.com/">
                 <Image className={styles.icon}
                    src={'/3.png'}
                    width={20}
                    height={20}
                    alt="twitter"
                /></Link>
                <Link href="https://www.youtube.com/">
                 <Image  className={styles.icon}
                    src={'/4.png'}
                    width={20}
                    height={20}
                    alt="youtube"
                /></Link>
            </div>
        </div>

    );
    
}