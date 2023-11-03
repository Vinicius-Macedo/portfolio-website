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
            image={"/spa-layout.jpg"}
            link={
              "https://www.figma.com/proto/xfH2dygKPM9OmTAjTjIUUP/All?type=design&node-id=824-173&t=l6fQo4d6YzIRqfyC-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=824%3A3045"
            }
          />
          <PortfolioItem
            title={"Design e código para página de serviços em IA"}
            description={
              "Design e código de LP simples para promover um serviço de IA, veja o código agora!"
            }
            image={"/ia-lp.png"}
            link={
              "https://github.com/Vinicius-Macedo/lp-ia"
            }
          />
          <PortfolioItem
            title={"Zapscreen - Página super rápida"}
            description={
              "Embora a nota tenha dimunuído por conta do cliente ter trocado as imagens, é um exemplo de como mando bem no pagespeed"
            }
            image={"/zap-screen.png"}
            link={
              "https://www.zapscreen.com.br/"
            }
          />
        </div>
      </DefaultMarginSection>
    </>
  );
}
