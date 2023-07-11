import React from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import Image from "next/image";
import imageLoader from "../../loader";
import Link from "next/link";
import { GoArrowSmallRight } from "react-icons/go";
import loader from "../../loader";

export default function AboutMeSection() {
  return (
    <DefaultMarginSection
      id="quem-sou-eu"
      containerClassname="bg-[#0F0E0E] overflow-hidden"
      className="flex flex-col items-center gap-16 md:gap-32 lg:flex-row"
      sectionBottom={
        <Image
          src={"/decoration-bottom.svg"}
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
      <Image
        src={"/decoration-small.svg"}
        alt={""}
        className="absolute bottom-[0%] right-[-10%] xl:right-[-10%] transform -translate-x-1/2 -translate-y-1/2 z-[1] object-contain opacity-20"
        loader={loader}
        width={51}
        height={90}
        unoptimized
      />
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={"/decoration-circle-dots.svg"}
          alt={""}
          className="absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-[1] md:left-[56%] object-contain"
          loader={loader}
          unoptimized
          width={352}
          height={407}
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "350px",
            maxHeight: "350px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <figure
            style={{
              width: "100%",
              height: "100%",
              paddingBottom: "100%",
              position: "relative",
            }}
          >
            <Image
              src={"/avatar-profile.png"}
              alt={"Minha foto pessoal"}
              style={{
                objectFit: "contain",
                zIndex: 2,
              }}
              loader={loader}
              fill
              unoptimized
            />
          </figure>
        </div>
      </div>
      <article className="flex flex-col items-center gap-16 max-w-[540px] lg:items-start">
        <div className="line-green-after active">
          <h2 className="responsive-title text-center lg:text-left font-ubuntu leading-8">
            Vinícius Macedo
          </h2>
          <p className="text-size text-center lg:text-left font-ubuntu text-whitegrey">
            Desenvolvedor Web
          </p>
        </div>
        <div className="flex flex-col gap-16 ">
          <p className="text-size text-center lg:text-left text-whitegrey">
            Pronto para ajudar a tornar o seu negócio mais visível e
            bem-sucedido na internet.
          </p>
          <p className="text-size text-center lg:text-left text-whitegrey">
            Desenvolvimento de sites, sistemas e aplicações móveis de alta
            qualidade e customizáveis para atender às suas necessidades.
          </p>
        </div>
        <Link
          href={"#"}
          className="flex items-center text-green text-size font-semibold cursor-pointer  animation-container p-8 lg:pl-0"
        >
          Fale comigo
          <GoArrowSmallRight
            className="animation-left-right not-selectable"
            style={{ paddingTop: "4px" }}
            size={50}
          />
        </Link>
      </article>
    </DefaultMarginSection>
  );
}
