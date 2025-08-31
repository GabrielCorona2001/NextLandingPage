
import type { Card } from "../../lib/types";

import Image from "next/image";




export function CardComponent({ title, description, icon }: Card) {
    return <>
        <div>
            <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                unoptimized

            />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </>

}