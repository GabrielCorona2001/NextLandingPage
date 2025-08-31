
import type { Card } from "../../lib/types";
import Image from "next/image";

import styles from './Cards.module.scss';





export function CardComponent({ title, description, icon }: Card) {
    return <>
        <div className={styles.cardComponentWrapper}>
            <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                unoptimized

            />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    </>

}