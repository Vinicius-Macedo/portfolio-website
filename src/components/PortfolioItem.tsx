import Image from "next/image";
import React, { useEffect, useState } from "react";
import loader from "../loader";
import { GoArrowSmallRight } from "react-icons/go";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export function PortfolioItem(props: Props) {
  const [isOpen, setisopen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("remove-scroll");
    } else {
      document.body.classList.remove("remove-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <div>
        <Image
          src={"/" + props.image}
          alt={""}
          width={0}
          height={0}
          loader={loader}
          className="w-auto h-auto cursor-pointer"
          onClick={() => setisopen(true)}
        />
        <div
          className={
            "fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] bg-[#131111] p-8 rounded gap-8" +
            (isOpen ? " flex" : " hidden")
          }
        >
          <Image
            src={"/" + props.image}
            alt={""}
            width={0}
            height={0}
            loader={loader}
            className="w-auto h-full max-w-[80vh] cursor-pointer object-cover"
            onClick={() => setisopen(true)}
          />
          <article className="w-full lg:w-[300px] h-full flex flex-col it gap-8 p-8">
            <p className="font-bold text-2xl">{props.title}</p>
            <p>{props.description}</p>
            <div className="">
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-semibold cursor-pointer animation-container text-white"
              >
                Abrir
                <GoArrowSmallRight
                  className="animation-left-right not-selectable"
                  style={{ paddingTop: "4px" }}
                  size={50}
                />
              </a>
            </div>
            <div className="pt-8 border-t border-t-solid border-t-[#333] flex items-center gap-8">
              {" "}
              <Image
                src={"/avatar-profile.png"}
                alt={"Minha foto pessoal"}
                style={{
                  objectFit: "contain",
                }}
                loader={loader}
                unoptimized
                width={75}
                height={75}
              />
              <div>
                <p className="font-bold">Vinícius Macedo</p>
                <p>Desenvolvedor Web</p>
              </div>
            </div>
            <div></div>
          </article>
        </div>
        <div
          className={
            "w-full h-full fixed top-0 left-0 z-10 bg-black/80 cursor-pointer" +
            (isOpen ? " block" : " hidden")
          }
          onClick={() => setisopen(false)}
        ></div>
      </div>
    </>
  );
}
