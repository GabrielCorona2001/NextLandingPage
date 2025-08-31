import Image from "next/image";
import Link from 'next/link';
import styles from './SectionAboutUs.module.scss';


export function SectionAboutUs() {
    return (
        <div className={styles.sectionAboutUsWrapper}><Image
            src={"/home/aboutUsBanner.svg"}
            alt="About us"
            width={902}
            height={646}
            className={styles.aboutUsImage}
        />

            <div className={styles.aboutUsContent}>

                <h3 className={styles.aboutUsTitle}    >About us</h3>
                <p className={styles.aboutUsDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque autem suscipit minus, at exercitationem numquam laudantium expedita veritatis adipisci magnam cumque quisquam error inventore ipsum officia quam atque veniam.</p>
                <Link href="/about-us" className={styles.aboutUsLink}> More on Our History</Link>
            </div>
        </div>
    )
}