import Image from "next/image";
import Link from 'next/link';

import styles from './Header.module.scss';

export default function Header() {


    return (


        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.logoContainer}>
                    <Image
                        src="/header/logo.svg"
                        alt="Logo TheBox"
                        width={38}
                        height={48}
                    />
                    <Link href="/" aria-label="TheBox Home" className={styles.logoText}>
                        The Box
                    </Link>

                </div>

                <nav className={styles.navWrapper}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}  >
                            <Link href="/" aria-label="Home"  className={styles.navItemLink}> Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about-us" aria-label="About us section"  className={styles.navItemLink}> About Us</Link>
                        </li>
                        <li     className={styles.navItem}>
                            <Link href="/projects" aria-label="Projects"  className={styles.navItemLink}> Projects</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/services" aria-label="Services" className={styles.navItemLink}> Services</Link>
                        </li>

                        <li  className={styles.navItem}>
                            <Link   href="/contact-us" aria-label="Contact Us"  className={styles.navItemLink}>  Contact Us</Link>
                        </li>
                    </ul>

                </nav>

            </div>
        </header>
    )


}