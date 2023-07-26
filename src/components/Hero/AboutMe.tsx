"use client";

import { Heart } from "lucide-react";
import React from "react";
import { Progress } from "../Progress";

const AboutMe = React.forwardRef<HTMLElement>((props, ref) => {
  const techs = [
    { label: "Javascript/Typescript", percentage: 93 },
    { label: "React", percentage: 95 },
    { label: "Web", percentage: 95 },
    { label: "Design Gráfico", percentage: 86 },
    { label: "Mobile", percentage: 89 },
  ];

  return (
    <section className="bg-white py-16 md:py-24" ref={ref}>
      <div>
        <div className="w-full relative justify-center inline-flex pb-2">
          <div className="max-w-lg relative w-full text-center flex justify-center items-center h-full">
            <h2 className="w-full text-5xl md:text-7xl font-extrabold opacity-20 uppercase -z-0 select-none">Sobre mim</h2>
            <span className="text-2xl absolute font-bold text-foreground"> Um pouco sobre mim </span>
          </div>
        </div>

        <div className="h-1 w-16 bg-primary mx-auto"></div>

        <div className="w-full inline-flex flex-col justify-center pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-center items-start gap-4 lg:gap-8 max-w-2xl mx-auto">
            <div className="mx-auto">
              <div className="relative w-16 h-16 bg-gray-300 rounded-full">
                {/* <Image src="/user.jpg" alt="" fill className="object-cover rounded-full" /> */}
              </div>
            </div>

            <div>
              <p className="max-w-lg lg:max-w-2xl text-sm font-medium lg:text-base text-center md:text-left">
                Estou na área já há quase {new Date().getUTCFullYear() - 2019} anos, atuando como desenvolvedor front-end. Aprendi a
                programar com meus 12 anos para brincar mas percebi que podia usar as minhas habilidades para{" "}
                <span className="underline decoration-2 decoration-primary">conectar</span>,{" "}
                <span className="underline decoration-2 decoration-primary">ajudar</span> ou{" "}
                <span className="underline decoration-2 decoration-primary">influenciar</span> as pessoas por meio das linhas de código.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-16 w-full flex flex-col items-center">
            <h2 className="font-bold text-lg"> Perfil </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 justify-between mt-4">
              <div className="w-full">
                <p className="font-medium text-center md:text-left">
                  A programação e o design são minha paixão e meu refúgio criativo
                  <Heart size={16} className="inline-block mx-1" strokeWidth={0} fill="red" />
                </p>

                <div className="py-4 space-y-4">
                  <div>
                    <strong className="text-foreground"> Nome </strong>
                    <p className="font-medium"> Francisco Zhou </p>
                  </div>

                  <div>
                    <strong className="text-foreground">Idade</strong>
                    <p className="font-medium">{new Date().getFullYear() - 2007} anos(2007)</p>
                  </div>

                  <div>
                    <strong className="text-foreground">Email</strong>
                    <p className="font-medium">franciscozliu@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-6">
                {techs.map((tech) => (
                  <div key={tech.label}>
                    <p className="text-sm">
                      <strong>{tech.label}</strong>
                    </p>
                    <Progress value={tech.percentage} className="border" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
