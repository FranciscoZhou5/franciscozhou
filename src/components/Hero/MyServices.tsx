import { Globe, Layout, PenTool, Smartphone } from "lucide-react";

export default function MyServices() {
  const services = [
    { title: "Aplicação Web", description: "Criação de sistemas web, responsivos, funcionais e otimizados.", Icon: Layout },
    {
      title: "UI/UX Design",
      description:
        "Fazer pesquisas, entender o usuário e projetar a aplicação no ponto de vista do cliente são os diferenciais para um bom site.",
      Icon: PenTool,
    },
    {
      title: "Desenvolvimento de Apps",
      description: "Desenvolvimento de aplicativos multiplataformas para dispositivos móveis.",
      Icon: Smartphone,
    },
  ];

  return (
    <section className="py-24 bg-[#282a36]">
      <div className="w-full relative items-center inline-flex flex-col pb-2 space-y-4">
        <div className="max-w-lg relative w-full text-center flex justify-center items-center h-full">
          <h2 className="w-full text-[56px] md:text-7xl font-extrabold opacity-20 uppercase -z-0 select-none text-gray">SERVIÇOS</h2>
          <span className="text-lg md:text-2xl absolute font-bold text-white"> O que eu posso te oferecer? </span>
        </div>

        <div className="h-1 w-16 bg-primary mx-auto"></div>

        <p className="text-gray font-medium text-center text-sm md:text-base max-w-2xl mx-auto pt-4">
          Uma simples landing page, um aplicativo multiplataforma ou até mesmo um sistema para sua loja virtual? É comigo!
        </p>
      </div>

      <div className="max-w-4xl mx-auto pt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={Math.random()} className="flex flex-col items-center text-center space-y-2">
              <div className="h-20">
                <item.Icon size={64} className="text-white" />
              </div>

              <h2 className="text-white font-bold text-lg">{item.title}</h2>

              <p className="text-gray text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
