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
          src={props.image}
          alt={""}
          width={0}
          height={0}
          loader={loader}
          unoptimized
          className="w-auto h-auto cursor-pointer"
          onClick={() => setisopen(true)}
        />
        <div
          className={
            "fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] bg-[#131111] p-8 rounded gap-8 flex-col-reverse w-full overflow-y-scroll lg:flex-row" +
            (isOpen ? " flex" : " hidden")
          }
        >
          <Image
            src={props.image}
            alt={""}
            width={0}
            height={0}
            loader={loader}
            className="w-auto h-full max-w-[80vh] cursor-pointer object-cover"
            onClick={() => setisopen(true)}
          />
          <article className="w-full lg:w-[300px] h-full flex flex-col it gap-8 p-8 relative">
            <div
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={() => setisopen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="25px"
                height="25px"
                viewBox="0 0 122.879 122.879"
                enableBackground="new 0 0 122.879 122.879"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FF4141"
                    d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"
                  />
                </g>
              </svg>
            </div>
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
            "w-full h-full fixed top-0 left-0 z-10 bg-black/80" +
            (isOpen ? " block" : " hidden")
          }
          onClick={() => setisopen(false)}
        ></div>
      </div>
    </>
  );
}
