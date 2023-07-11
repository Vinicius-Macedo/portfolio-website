type ProcessCardProps = {
  title: string;
  description: string;
  number: number;
};

export default function ProcessCard(props: ProcessCardProps) {
  return (
    <div className="w-full bg-black p-16 flex flex-col gap-16 relative">
      <h3 className="text-[28px] sm:text-[32px] font-ubuntu">
        <span className="text-green">{props.number}.</span> {props.title}
      </h3>
      <p className="z-[2] text-[20px] sm:text-[22.5px]">{props.description}</p>
      <p className="prevent-select text-[200px] leading-[149px] text-[#1b1818] font-bold absolute right-8 bottom-8 z-[1]">
        {props.number}
      </p>

    </div>
  );
}
