

import { CardComponent } from "./CardComponent"
import { cards } from "../../lib/placeholderData"
import styles from './Cards.module.scss';


export function CardsWrapper() {

    return <>

        <div className={styles.cardsWrapper}>

            <h2 className={styles.CardsWrapperTitle}>Our Reputation</h2>

            <div className={styles.cardsContainer}>
                {cards.map((card, index) => (
                    <CardComponent key={index} {...card} />
                ))}

            </div>
        </div>

    </>
}