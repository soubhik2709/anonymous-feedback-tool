import React from "react";

type sectionProps = {
  counts: number;
  title: string;
  text: string;
  // children:React.ReactNode;
};
export default function SectionBox({ counts, title, text }: sectionProps) {
  return (
    <section className="py-7 px-4  min-h-[90px] bg-[#ccc9f5] text-[#211f1f]  rounded-lg ">
      <p className="rounded-full bg-white text-gray-800 w-10 h-10 flex justify-center items-center font-bold m-2  ">
        {counts}
      </p>
      <p className="font-bold text-xl mb-2">{title}</p>
      <p className="text-lg text-gray-600 font-medium">{text}</p>
    </section>
  );
}
