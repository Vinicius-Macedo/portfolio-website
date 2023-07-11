// AINDA EM CONSTRUÇÃO UM SUPER EFEITO DE SCROLLING

import React, { useEffect, useState } from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import ProcessCard from "../ProcessCard";
import { PortfolioItem } from "../PortfolioItem";

export default function HowWeGonnaWorkSection() {
  return (
    <>
      <DefaultMarginSection
        id="portfolio"
        className="flex flex-col gap-32"
        containerClassname="bg-dark"
      >
        <h2 className="responsive-title text-center line-green-after-center line-w-120px-sm-260px">
          Alguns de meus projetos
        </h2>
        <div className="w-full grid md:grid-cols-3 gap-4">
          <PortfolioItem
            title={"Design para LP de promoção"}
            description={
              "Projeto feito toalmente as pressas, pedido as 8h e entregue as 18h do mesmo dia"
            }
            image={"spa-layout.jpg"}
            link={
              "https://www.figma.com/file/xfH2dygKPM9OmTAjTjIUUP/All?type=design&node-id=0-1&mode=design&t=psexYlBDdy7gfziB-0"
            }
          />

        </div>
      </DefaultMarginSection>
    </>
  );
}
