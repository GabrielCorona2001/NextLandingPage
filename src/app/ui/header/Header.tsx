import Image from "next/image";
import Link from 'next/link';

import styles from './Header.module.css';

export default function Header() {


    return (


        <header className={styles.teste}>

            <div>
                <Image
                    src="/header/logo.svg"
                    alt="Logo TheBox"
                    width={38}
                    height={48}
                />
                <Link href="/" aria-label="TheBox Home">
                    TheBox
                </Link>

            </div>

            <nav>
                <ul>
                    <li>
                        <Link href="#about" aria-label="About section"> About</Link>
                    </li>
                    <li>
                        <Link href="#services" aria-label="Services section"> Services</Link>
                    </li>
                    <li>
                        <Link href="#contact" aria-label="Contact section"> Contact</Link>
                    </li>
                </ul>
                
            </nav>
        </header>
    )


}