// AINDA EM CONSTRUÇÃO UM SUPER EFEITO DE SCROLLING

import React, { useEffect, useState } from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import ProcessCard from "../ProcessCard";

export default function HowWeGonnaWorkSection() {
  const [hasWeelEvent, setHasWheelEvent] = useState(false);
  const [divCurrentPosition, setDivCurrentPosition] = useState(0);
  const [isScrollingBottom, setIsScrollingBottom] = useState(false);
  const [state, setState] = useState<
    "hovered" | "firstScrolled" | "scrollingThrough" | ""
  >("");

  useEffect(() => {
    console.log(hasWeelEvent);

    switch (state) {
      case "":
        break;
      case "hovered":
        document.body.style.overflow = "hidden";
        setState("firstScrolled");
        break;
      case "firstScrolled":
        if (
          (!isScrollingBottom && divCurrentPosition === 0) ||
          (isScrollingBottom && divCurrentPosition === -1180)
        ) {
          document.body.style.overflow = "unset";
          setState("");
        }
      default:
        break;
    }
  }, [divCurrentPosition, state, isScrollingBottom]);

  const handleScroll = (event: WheelEvent) => {
    setHasWheelEvent(true);

    if (event.deltaY > 0) {
      setIsScrollingBottom(true);
      if (state === "scrollingThrough" || state === "firstScrolled") {
        setDivCurrentPosition((prev) => {
          if (prev - 60 < -1180) {
            return -1180;
          }
          return prev - 60;
        });
      }
    } else if (event.deltaY < 0) {
      setIsScrollingBottom(false);
      if (state === "scrollingThrough" || state === "firstScrolled") {
        setDivCurrentPosition((prev) => {
          if (prev + 60 > 0) {
            return 0;
          }
          return prev + 60;
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [state, divCurrentPosition]);

  return (
    <>
      {hasWeelEvent ? (
        <DefaultMarginSection
          containerClassname="bg-dark overflow-hidden"
          className="flex flex-col gap-32"
          // onWheel={(event) => handleWheel(event)}
        >
          <h2 className="responsive-title text-center line-green-after-center line-w-120px-sm-260px">
            Como vamoso trabalhar
          </h2>

          <div
            // onMouseEnter={() => setIsHoveringProcessCards(true)}
            // onMouseLeave={() => setIsHoveringProcessCards(false)}
            className="flex gap-15 w-[2290px] relative"
            style={{
              transform: `translateX(${divCurrentPosition}px)`,
              transition: "0.3s",
            }}
          >
            <div
              onMouseEnter={() => (state == "" ? setState("hovered") : null)}
              className="absolute left-0 bottom-0 w-full h-60  z-[3] "
            ></div>
            <ProcessCard
              title={"Nossa primeira conversa"}
              description={
                "Nesse momento teremos uma conversa geral para entender o projeto, irei prestar bastante atenção nas suas necessidades e expectativas e com essas informações será estipulado um valor e um prazo, com ambos de acordo partimos para a próxima etapa!"
              }
              number={1}
            />
            <ProcessCard
              title={"Apresentação do protótipo"}
              description={
                "Teremos uma nova conversa apresentando o desenho do projeto, nesssa etapa iremos alinhar se está tudo atendendo suas necessidades e expectativas, fazendo os ajustes necessários até obter a aprovação para a próxima etapa!"
              }
              number={2}
            />
            <ProcessCard
              title={"Protótipo online com vida"}
              description={
                "Esse será o momento em que você poderá deslumbrar o que precisava, será uma revisão geral de nós dois onde faremos os ajustes necessários para a próxima e última etapa."
              }
              number={3}
            />
            <ProcessCard
              title={"Suporte e lançamento"}
              description={
                "Esse será o momento em que você poderá deslumbrar o que precisava, será uma revisão geral de nós dois onde faremos os ajustes necessários para a próxima e última etapa."
              }
              number={4}
            />
          </div>
        </DefaultMarginSection>
      ) : (
        <DefaultMarginSection
          className="flex flex-col gap-32"
          containerClassname="bg-dark"
        >
          <h2 className="responsive-title text-center line-green-after-center line-w-120px-sm-260px">
            Como vamoso trabalhar
          </h2>
          <div className="w-full grid md:grid-cols-2 grid-rows-1fr  gap-20">
            <ProcessCard
              title={"Nossa primeira conversa"}
              description={
                "Nesse momento teremos uma conversa geral para entender o projeto, irei prestar bastante atenção nas suas necessidades e expectativas e com essas informações será estipulado um valor e um prazo, com ambos de acordo partimos para a próxima etapa!"
              }
              number={1}
            />
            <ProcessCard
              title={"Apresentação do protótipo"}
              description={
                "Teremos uma nova conversa apresentando o desenho do projeto, nesssa etapa iremos alinhar se está tudo atendendo suas necessidades e expectativas, fazendo os ajustes necessários até obter a aprovação para a próxima etapa!"
              }
              number={2}
            />
            <ProcessCard
              title={"Protótipo online com vida"}
              description={
                "Esse será o momento em que você poderá deslumbrar o que precisava, será uma revisão geral de nós dois onde faremos os ajustes necessários para a próxima e última etapa."
              }
              number={3}
            />
            <ProcessCard
              title={"Suporte e lançamento"}
              description={
                "Nesse momento está tudo pronto, seu projeto vai estar online funcionando com vida e com minha equipe monitorando e prestando suporte conforme o combinado!"
              }
              number={4}
            />
          </div>
        </DefaultMarginSection>
      )}
    </>
  );
}
