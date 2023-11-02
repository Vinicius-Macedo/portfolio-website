// AINDA EM CONSTRUÇÃO UM SUPER EFEITO DE SCROLLING

import { DefaultMarginSection } from "../DefaultMarginSection";
import ProcessCard from "../ProcessCard";

export default function HowWeGonnaWorkSection() {
  return (
    <>
      <DefaultMarginSection
        className="flex flex-col gap-32"
        containerClassname="bg-dark"
      >
        <h2 className="responsive-title text-center line-green-after-center line-w-120px-sm-260px">
          Como vamoso trabalhar
        </h2>
        <div className="w-full grid grid-flow-row gap-20">
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
    </>
  );
}
