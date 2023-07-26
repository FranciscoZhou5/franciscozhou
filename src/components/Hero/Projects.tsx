import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    { title: "Alice", description: "ChatGPT com interface customizada", img: "/user.jpg", url: "" },
    { title: "Alice", description: "ChatGPT com interface customizada", img: "/user.jpg", url: "" },
    { title: "Alice", description: "ChatGPT com interface customizada", img: "/user.jpg", url: "" },
    { title: "Alice", description: "ChatGPT com interface customizada", img: "/user.jpg", url: "" },
  ];

  return (
    <section className="bg-secundary py-24">
      <div className="w-full relative justify-center inline-flex pb-2">
        <div className="max-w-lg relative w-full text-center flex justify-center items-center h-full">
          <h2 className="w-full text-5xl md:text-7xl font-extrabold opacity-20 uppercase -z-0 select-none">PORTFOLIO</h2>
          <span className="text-2xl absolute font-bold text-foreground"> Projetos </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-medium"> Alguns trabalhos e projetos que já realizei </p>
      </div>

      <div className="max-w-4xl mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 px-8">
        {projects.map((item) => (
          <div key={Math.random()} className="w-full bg-primary border-primary/30 bg-primary/20 border-2 rounded-md py-4 px-2">
            <div>
              <div className="aspect-video w-full relative">
                <Image src={item.img} alt="" fill className="object-cover" />
              </div>
            </div>

            <div className="pt-4 text-center">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>

            <Link
              href={item.url}
              className="duration-200 flex items-center justify-center w-full px-2 py-2 bg-white rounded-md mt-4 text-indigo-500 hover:bg-indigo-900 group"
            >
              <span className="font-medium group-hover:text-white text-sm">Ver site</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
