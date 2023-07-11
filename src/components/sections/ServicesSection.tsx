import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { CgSmartphoneChip } from "react-icons/cg";
import { FaPaintBrush } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";
import imageLoader from "../../loader";
import { DefaultMarginSection } from "../DefaultMarginSection";
import ServiceCard from "../ServiceCard";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <DefaultMarginSection
      id="servicos"
      className="flex flex-col gap-32"
      sectionBottom={
        <Image
          src={"/decoration-section.svg"}
          className="w-full not-selectable"
          alt={""}
          width={1366}
          height={137}
          loader={imageLoader}
          unoptimized
          priority
        />
      }
    >
      <h2 className="responsive-title text-center ">
        Posso te
        <span className="text-green"> ajudar </span>
        com
      </h2>
      <div className="grid w-full justify-center gap-32 sm:grid-cols-2 m-auto lg:grid-cols-3">
        <ServiceCard
          reactIcon={<MdAlternateEmail color="71ebc6" size={64} />}
          title={"Email marketing"}
          description={
            "Emails atraentes e eficazes para aumentar suas vendas e fidelizar clientes."
          }
        />
        <ServiceCard
          reactIcon={<TfiLayoutMediaLeftAlt color="71ebc6" size={64} />}
          title={"Criação de sites"}
          description={
            "Sites modernos e responsivos para melhorar a presença online de sua empresa."
          }
        />
        <ServiceCard
          reactIcon={<CgSmartphoneChip color="71ebc6" size={64} />}
          title={"Desen. de sistemas"}
          description={
            "Sistemas personalizados e eficientes para atender às necessidades de sua empresa."
          }
        />
        <ServiceCard
          reactIcon={<IoSchoolSharp color="71ebc6" size={64} />}
          title={"Aulas e consultoria"}
          description={
            "Aquela “ajudinha” no trabalho da faculdade ou tirar dúvidas sobre programação."
          }
        />
        <ServiceCard
          reactIcon={<FaPaintBrush color="71ebc6" size={64} />}
          title={"UI/UX Design"}
          description={
            "Criação de interfaces de usuário e experiência de usuário atraentes e intuitivas."
          }
        />
        <ServiceCard
          reactIcon={<AiFillAndroid color="71ebc6" size={64} />}
          title={"Criação de aplicativos"}
          description={
            "App’s móveis personalizados e fáceis de usar para sua visibilidade e sucesso"
          }
        />
      </div>
    </DefaultMarginSection>
  );
}
