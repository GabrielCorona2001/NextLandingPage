import Image from "next/image";
import Link from 'next/link';


export function SectionAboutUs() {



    return (


        <div>

            <Image
                src={"/home/aboutUsBanner.svg"}
                alt="About us"
                width={902}
                height={646}
            />

            <div>

                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum doloremque autem suscipit minus, at exercitationem numquam laudantium expedita veritatis adipisci magnam cumque quisquam error inventore ipsum officia quam atque veniam.</p>
                <Link href="/about-us"> More on Our History</Link>
            </div>
        </div>
    )
}