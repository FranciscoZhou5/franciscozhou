import { MoveDown } from "lucide-react";
import React, { RefObject } from "react";

const bg = {
  backgroundImage: `radial-gradient(
  circle at 29% 55%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 4%,
  transparent 4%,
  transparent 44%,
  transparent 44%,
  transparent 100%
),
radial-gradient(
  circle at 85% 89%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 51%,
  transparent 51%,
  transparent 52%,
  transparent 52%,
  transparent 100%
),
radial-gradient(
  circle at 6% 90%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 53%,
  transparent 53%,
  transparent 64%,
  transparent 64%,
  transparent 100%
),
radial-gradient(
  circle at 35% 75%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 6%,
  transparent 6%,
  transparent 98%,
  transparent 98%,
  transparent 100%
),
radial-gradient(
  circle at 56% 75%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 16%,
  transparent 16%,
  transparent 23%,
  transparent 23%,
  transparent 100%
),
radial-gradient(
  circle at 42% 0,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 3%,
  transparent 3%,
  transparent 26%,
  transparent 26%,
  transparent 100%
),
radial-gradient(
  circle at 29% 28%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 51%,
  transparent 51%,
  transparent 75%,
  transparent 75%,
  transparent 100%
),
radial-gradient(
  circle at 77% 21%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 35%,
  transparent 35%,
  transparent 55%,
  transparent 55%,
  transparent 100%
),
radial-gradient(
  circle at 65% 91%,
  hsla(329, 0%, 99%, 0.05) 0,
  hsla(329, 0%, 99%, 0.05) 46%,
  transparent 46%,
  transparent 76%,
  transparent 76%,
  transparent 100%
),
linear-gradient(45deg, #535beb, #4c0bae)`,
};

interface IIntroProps {
  aboutMeRef: RefObject<HTMLElement>;
}

export default function Intro({ aboutMeRef }: IIntroProps) {
  return (
    <section className="flex items-center h-screen relative" style={bg}>
      <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl">
        <div className="max-w-xl mx-auto text-center">
          <div>
            <span className="inline-flex items-center">
              <span className="px-6 py-2 text-base font-bold text-white rounded-lg bg-white/10">Francisco Zhou</span>
            </span>
            <p className="mt-8 text-6xl font-extrabold tracking-tight text-white">Design & Develop</p>

            <p className="max-w-xl mt-4 text-lg lg:text-xl text-slate-200">
              Design refinado e desenvolvimento frontend de alto nível, em perfeita harmonia.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
            <button className="duration-200 bg-white/20 border-2 hover:border-indigo-700/40 border-white/30 flex-none font-medium inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-white">
              <span className="text-white">Entrar em contato</span>
            </button>

            <div className="inline-flex">
              <button
                onClick={() => aboutMeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="active:bg-slate-600 w-full duration-200 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center items-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500"
              >
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          className="animate-bounce hover:bg-white/20 rounded-full p-1 flex justify-center items-center duration-200"
          onClick={() => aboutMeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          <MoveDown size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
}
