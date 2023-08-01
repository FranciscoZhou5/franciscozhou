"use client";

import { useForm } from "@formspree/react";
import React, { ChangeEvent, useState } from "react";

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  const [state, handleSubmit] = useForm("mrgwegww");

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    e.persist();
    setInputs((oldState) => ({
      ...oldState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section className="py-24 bg-dark" ref={ref}>
      <div className="w-full relative justify-center inline-flex pb-2">
        <div className="max-w-lg relative w-full text-center flex flex-col justify-center items-center h-full">
          <span className="text-primary font-bold text-lg">Contato</span>
          <h2 className="text-3xl font-bold text-white"> Fale comigo! </h2>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full px-4">
        <form className="p-4 space-y-4 relative" onSubmit={handleSubmit}>
          <div
            data-active={state.succeeded}
            className="hidden data-[active=true]:flex items-center justify-center absolute top-4 left-0 rounded-md z-10 w-full h-full bg-black/75"
          >
            <h2 className="text-white font-medium"> Obrigado por responder! </h2>
          </div>

          <div>
            <input
              autoComplete="name"
              aria-required
              required
              onChange={handleOnChange}
              value={inputs.name}
              type="text"
              id="name"
              name="name"
              placeholder="Nome *"
              className="bg-transparent focus:border-primary duration-500 py-4 text-sm px-2 w-full border-b-2 border-[#3e3f4a] outline-none text-white"
            />
          </div>

          <div>
            <input
              autoComplete="email"
              aria-required
              required
              onChange={handleOnChange}
              value={inputs.email}
              type="text"
              id="email"
              name="email"
              placeholder="Seu melhor email *"
              className="bg-transparent focus:border-primary duration-500 py-4 text-sm px-2 w-full border-b-2 border-[#3e3f4a] outline-none text-white"
            />
          </div>

          <div>
            <textarea
              aria-required
              required
              onChange={(e) => setInputs((oldState) => ({ ...oldState, message: e.target.value }))}
              value={inputs.message}
              id="message"
              name="message"
              placeholder="Mensagem *"
              className="bg-transparent focus:border-primary duration-500 py-4 text-sm px-2 w-full border-b-2 min-h-[200px] resize-none border-[#3e3f4a] outline-none text-white"
            />
          </div>

          {/* <button className="text-white">Enviar</button> */}

          {/* <button className="duration-200 w-full bg-white/20 border-2 hover:border-indigo-700/40 border-white/30 flex-none font-medium inline-flex justify-center outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-white">
            <span className="text-white">Entrar em contato</span>
          </button> */}

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full duration-200 bg-primary font-medium hover:bg-indigo-900 hover:text-primary inline-flex justify-center items-center px-6 py-2.5 relative rounded-lg text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
