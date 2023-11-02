import React from "react";
import imageLoader from "../../loader";
import { DefaultMarginSection } from "../DefaultMarginSection";
import Image from "next/image";
import useTyping from "../../hooks/useTyping";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import IconButton from "../IconButton";

export default function HeroSection() {
  const typedWords = useTyping([
    "criar seu sistema",
    "fazer o seu site",
    "auxiliar na equipe",
  ]);

  return (
    <DefaultMarginSection
      id="inicio"
      containerClassname="overflow-hidden pt-40"
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
      <div className="max-w-[700px] text-center flex flex-col items-center m-auto gap-16">
        <h1 className="responsive-title font-bold relative">
          Desenvolvimento de
          <span className="text-green"> sites </span> e
          <span className="text-green"> sistemas </span>
          para <span className="text-green">pequenos emprededores</span>
        </h1>
        <p className="text-size blink-animation max-w-[310px] h-[101px]">
          Me chamo Vinícius, sou um desenvolvedor web que vai {typedWords}
        </p>
        <a
          href="#quem-sou-eu"
          className="bg-green hover:darkgreen text-black px-16 py-6 rounded-full font-bold"
        >
          Quem sou eu?
        </a>
        {/* <div className="flex flex-col absolute left-0 top-1/2 -translate-y-1/2">
          <IconButton iconComponent={<AiFillGithub size={35} />} link={""} />
          <IconButton iconComponent={<AiFillLinkedin size={35} />} link={""} />
          <IconButton
            iconComponent={<AiOutlineInstagram size={35} />}
            link={""}
          />
        </div> */}
      </div>

      <Image
        className=" opacity-[.1] absolute left-[40%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] max-w-none md:w-[800px]"
        src={"/decoration-logo.svg"}
        alt={""}
        loader={imageLoader}
        width={1400}
        height={1400}
        unoptimized
        priority
      />
    </DefaultMarginSection>
  );
}
