import Link from "next/link";
import React, { Ref } from "react";

type IconButtonProps = {
  iconComponent: React.ReactNode;
  link: string;
};

export default function IconButton(props: IconButtonProps) {
  return <Link className="p-4" href={props.link}>{props.iconComponent}</Link>;
}
