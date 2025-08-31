import { Main } from "next/document";
import MainBanner from "./ui/mainBanner/MainBanner";
import { CardsWrapper } from "./ui/cards/CardsWrapper";

export default function Home() {
  return (

    <>
    <MainBanner />
    <CardsWrapper />
    </>
  );
}
