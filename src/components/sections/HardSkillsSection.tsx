import React, { useContext } from "react";
import { BsCodeSlash, BsWordpress } from "react-icons/bs";
import { CgFigma, CgIfDesign } from "react-icons/cg";
import { DiReact, DiLaravel } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMariadb,
} from "react-icons/si";
import { CardTextContext } from "../../contexts/CardTextContext";
import { DefaultMarginSection } from "../DefaultMarginSection";
import SkillCard from "../SkillCard";

export default function HardSkillsSection() {
  const { cardText, setCardText } = useContext(CardTextContext);

  return (
    <DefaultMarginSection
      id="skills"
      extraSpace={true}
      className="flex flex-col gap-16 sm:gap-16 items-center"
      containerClassname="bg-dark"
    >
      <div className="flex flex-col gap-16 ">
        <h2 className="responsive-title text-center line-green-after-center line-w-120px">
          Hard Skills
        </h2>
        <p className="text-size text-center h-[338px] sm:h-[169px] md:h-[135px] lg:h-[102px]">
          {cardText}
        </p>
      </div>
      <div className="flex gap-8 w-full h-[196px] overflow-x-scroll sm:justify-center hide-scrollbar sm:flex-wrap sm:h-auto">
        <SkillCard
          reactIcon={<CgFigma size={50} color={"#ffffff"} />}
          title={"Figma"}
        />
        <SkillCard
          reactIcon={<CgIfDesign size={50} color={"#ffffff"} />}
          title={"UI/UX Design"}
        />
        <SkillCard
          reactIcon={<BsCodeSlash size={50} color={"#ffffff"} />}
          title={"Html Css Javascript"}
        />
        <SkillCard
          reactIcon={<SiTailwindcss size={50} color={"#ffffff"} />}
          title={"Tailwind"}
        />
        <SkillCard
          reactIcon={<FaBootstrap size={50} color={"#ffffff"} />}
          title={"Bootstrap"}
        />
        <SkillCard
          reactIcon={<SiTypescript size={50} color={"#ffffff"} />}
          title={"Typescript"}
        />
        <SkillCard
          reactIcon={<SiNextdotjs size={50} color={"#ffffff"} />}
          title={"NextJS"}
        />
        <SkillCard
          reactIcon={<DiReact size={50} color={"#ffffff"} />}
          title={"React Native"}
        />

        <SkillCard
          reactIcon={<DiLaravel size={50} color={"#ffffff"} />}
          title={"Laravel"}
        />
        <SkillCard
          reactIcon={<SiMariadb size={50} color={"#ffffff"} />}
          title={"SQL"}
        />
        <SkillCard
          reactIcon={<BsWordpress size={50} color={"#ffffff"} />}
          title={"Wordpress"}
        />
        <SkillCard
          reactIcon={<IoIosSpeedometer size={50} color={"#ffffff"} />}
          title={"Web Core Vitals"}
        />
      </div>
    </DefaultMarginSection>
  );
}
