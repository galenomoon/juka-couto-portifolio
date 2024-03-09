import React from "react";

//next
import Image from "next/image";

//styles
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsWhatsapp, BsVimeo } from "react-icons/bs";

//components
import NavBar from "@/components/NavBar";
import BackgroundText from "@/components/BackgroundText";

//assets
import jukaCouto from "@/assets/juka-couto.png";


export default function FirstSection() {
  return (
    <section className="justify-between flex flex-col h-[64vh]">
        <NavBar />
        <BackgroundText
          className="absolute top-0 left-0"
          lines={["Juka Couto", "Fotografias"]}
        />
        <SocialsBar />
        <figure className="w-[35vw] self-center flex items-center justify-center absolute -bottom-10">
          <Image
            src={jukaCouto}
            width={748}
            height={993}
            alt="Juka Couto Fotografias"
          />
        </figure>
      </section>
  )
}

export function SocialsBar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  const socials = [
    {
      Icon: BsFacebook,
      href: "https://www.github.com/galenomoon",
      style: "md:hover:text-white",
    },
    {
      Icon: BsInstagram,
      href: "https://www.instagram.com/jukacouto/",
      style: "md:hover:text-white",
    },
    {
      Icon: BsWhatsapp,
      href: "https://api.whatsapp.com/send?phone=5513988143999",
      style: "md:hover:text-white",
    },
    {
      Icon: BsVimeo,
      href: "https://www.figma.com/@galenomoon",
      style: "md:hover:text-white",
    }
  ];

  return (
    <div className="z-10 w-full flex text-typography-400 items-center justify-end sm:text-xl md:text-3xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex items-baseline gap-3 sm:hidden md:flex"
      >
        {socials.map(({ Icon, href, style }, index) => (
          <motion.a
            key={index}
            variants={item}
            href={href}
            target="_blank"
            rel={"norrefer"}
          >
            <Icon
              key={index}
              className={`${style} duration-200 hover:drop-shadow-xl`}
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
