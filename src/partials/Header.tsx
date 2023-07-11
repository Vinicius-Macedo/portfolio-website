import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScroll from "../hooks/useScroll";
const imageLoader = require("./../loader.js");

type ScrollStatusType = "scrolled" | "scrolled upped" | "";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, lastScroll] = useScroll();
  const [scrollStatus, setScrollStatus] = useState<ScrollStatusType>("");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (scrollStatus === "" && lastScroll > 80) {
      setScrollStatus("scrolled");
    } else if (scrollStatus === "scrolled" && isScrollingUp) {
      setScrollStatus("scrolled upped");
    } else if (scrollStatus === "scrolled upped" && lastScroll === 0) {
      setScrollStatus("");
    }
  }, [lastScroll]);

  return (
    <header
      className={
        "header" +
        (!isScrollingUp &&
        (scrollStatus === "scrolled" || scrollStatus === "scrolled upped")
          ? " hide"
          : "") +
        (isScrollingUp &&
        (scrollStatus === "scrolled" || scrollStatus === "scrolled upped")
          ? " show"
          : "") +
        (scrollStatus === "scrolled upped" ? " transition" : "") +
        (lastScroll > 80 ? " scrolled" : "")
      }
    >
      <nav className={"menu" + (isMenuOpen ? " open" : "")}>
        <Link href="/" as="image">
          <figure className="relative w-[80px] h-[40px]">
            <Image
              src="/logo.webp"
              alt="Logo pessoal - Desenhado com linhas abstratas simbolizando a letra V"
              fill
              style={{ objectFit: "contain" }}
              loader={imageLoader}
              unoptimized={true}
              priority
            />
          </figure>
        </Link>
        <ul className="lista">
          <li className="item">
            <Link
              href="#inicio"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="item">
            <Link
              href="#quem-sou-eu"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li className="item">
            <Link
              href="#servicos"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
          </li>
          <li className="item">
            <Link
              href="#skills"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Minhas Skills
            </Link>
          </li>
          <li className="item">
            <Link
              href="/#portfolio"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </Link>
          </li>
          <li className="item">
            <Link
              href="/#faq"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li className="item">
            <Link
              href="/#contato"
              className="link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="toggle-btn">
          <div className="bars"></div>
        </div>
      </nav>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={"overflow" + (isMenuOpen ? " active" : "")}
      ></div>
    </header>
  );
}
