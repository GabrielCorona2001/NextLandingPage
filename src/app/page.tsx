import { Main } from "next/document";
import MainBanner from "./ui/mainBanner/MainBanner";
import { CardsWrapper } from "./ui/cards/CardsWrapper";
import { SectionAboutUs } from "./ui/sectionAboutUs/SectionAboutUs";
import { FormWrapper } from "./ui/form/FormWrapper";

export default function Home() {
  return (

    <>
      <MainBanner />
      <CardsWrapper />
      <SectionAboutUs />
      <FormWrapper   />
    </>
  );
}
