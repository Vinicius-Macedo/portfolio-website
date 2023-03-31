import React from "react";
import { DefaultMarginSection } from "../DefaultMarginSection";
import { FaqItemsArray } from "../FaqItemsArray";

export default function FaqSection() {
  return (
    <DefaultMarginSection
      extraSpace={true}
      containerClassname="bg-dark"
      className="flex flex-col gap-16"
    >
      <h2 className="responsive-title text-center line-green-after-center line-w-120px">
        Dúvidas Frequentes
      </h2>
      <FaqItemsArray
        question={[
          {
            title:
              "Quanto custa para ter um site/sistema rápido e belo para o meu negócio?",
            text: "Com preços acessíveis, entre R$ 100,00 e R$ 700,00, ofereço uma ampla variedade de opções para atender às suas necessidades e orçamento.\n Focando em criar um site que reflita sua marca e atenda às suas necessidades funcionais. Ofereço uma variedade de opções de design, desde layouts modernos e minimalistas até designs mais elaborados e personalizados",
          },
          {
            title: "Por que valor é tão barato?",
            text: "Atualmente estou em uma fase da minha carreira que classifico como intermediária, todo profissional passa essas três fases ao longo de sua carreira: a fase iniciante, a fase profissional e a fase intermediária.\n Na fase iniciante, os profissionais geralmente não cobram tanto pelos seus serviços, mas ainda não possuem a experiência e habilidades para entregar projetos de alta qualidade.\n Já na fase profissional, os profissionais cobram valores mais elevados pelo seu trabalho, pois possuem a experiência e habilidades necessárias para entregar projetos de qualidade.\n Por fim, na fase intermediária, os profissionais encontram um equilíbrio entre preço e qualidade, oferecendo serviços de qualidade a preços acessíveis. É nessa fase que seus clientes terão a oportunidade de contratar profissionais experientes e habilidosos sem pagar preços elevados.",
          },
          {
            title: "Como será feito os pagamentos?",
            text: "Iremos dividir o projeto em várias etapas e entregas, após cada entrega você irá aprovar ou não, caso não aprove o projeto será revisado e entregue uma nova versão, caso aprovado será pago parte do valor.\n Cada entrega é um protótipo profissional que possui seu valor. \n Normalmente o projeto é concluído em 3 entregas sendo elas:\n 1 - Layout do projeto: Nessa etapa é mostrado um desenho em tamanho real do site/sistema, além de uma apresentação geral de como tudo ira funcionar.\n 2 - Protótipo do frontend: Nessa etapa é desenvolvido o frontend do projeto, ou seja será possível ver o projeto online funcionando, mas com algumas limitações que o frontend possuí.\n 3 - Lançamento: Nessa parte o backend é concluído e integrado com o frontend, isso signifca que o projeto estará funcionando perfeitamente e pronto para ser usado.",
          },
          {
            title: "Você faz todo tipo de site/sistema?",
            text: "Eu sou um desenvolvedor em constante evolução, sempre em busca de me atualizar e aperfeiçoar meus conhecimentos. Embora ainda esteja me desenvolvendo, tenho uma grande paixão pela programação e já possuo experiência em diversas tecnologias e linguagens de programação. No momento, ainda não sou capaz de criar sistemas com grande escalabilidade ou que envolvam pagamentos diretamente pelo sistema ou site, mas estou sempre em busca de me aprimorar nessas áreas para poder oferecer soluções cada vez mais completas.\nMeu público-alvo são pequenas empresas que buscam soluções tecnológicas eficientes e personalizadas, sem precisar pagar preços exorbitantes. Posso ajudá-los com a criação de sites e sistemas web, automatização de processos, gerenciamento de dados e muito mais.",
          },
        ]}
      />
    </DefaultMarginSection>
  );
}
