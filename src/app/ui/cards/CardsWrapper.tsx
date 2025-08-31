

import { CardComponent } from "./CardComponent"
import { cards } from "../../lib/placeholderData"

export function CardsWrapper() {

    return <>

        <div>

            <h2>Our Reputation</h2>

            <div className="">
                {cards.map((card, index) => (
                    <CardComponent key={index} {...card} />
                ))}

            </div>
        </div>

    </>
}