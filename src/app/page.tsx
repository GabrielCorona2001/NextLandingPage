import { Main } from "next/document";
import MainBanner from "./ui/mainBanner/MainBanner";
import { CardsWrapper } from "./ui/cards/CardsWrapper";
import { SectionAboutUs } from "./ui/sectionAboutUs/SectionAboutUs";
import { Form } from "./ui/form/Form";

export default function Home() {
  return (

    <>
      <MainBanner />
      <CardsWrapper />
      <SectionAboutUs />
      <Form />
    </>
  );
}
