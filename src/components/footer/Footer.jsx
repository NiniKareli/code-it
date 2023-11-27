import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function () {
    return (
        <div className={styles.container}>
            <div>@all right reserved</div>
            <div className={styles.socials}>
                <Image className={styles.icon}
                    src={'/1.png'}
                    width={20}
                    height={20}
                    alt="facebok"
                />
                 <Image className={styles.icon}
                    src={'/2.png'}
                    width={20}
                    height={20}
                    alt="instagram"
                />
                 <Image className={styles.icon}
                    src={'/3.png'}
                    width={20}
                    height={20}
                    alt="twitter"
                />
                 <Image  className={styles.icon}
                    src={'/4.png'}
                    width={20}
                    height={20}
                    alt="youtube"
                />
            </div>
        </div>
    );
}
// this is a new branch