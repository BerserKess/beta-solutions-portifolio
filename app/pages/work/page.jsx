"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import { WorkSliderBtns } from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Projeto Alcalina",
        description: "Landing page criada para divulgação do Projeto Alcalina, da UNINASSAU Campina Grande",
        stack: [{name: "React.Js"}, {name: "Tailwind.Css"}],
        image: "/assets/work/alcalina.png",
        live: "https://berserkess.github.io/alcalina-react/",
        github: "https://github.com/BerserKess/alcalina-react",
    },
    {
        num: "02",
        category: "frontend",
        title: "Gerador de senhas",
        description: "Um gerador de senhas simples",
        stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
        image: "/assets/work/pwd-gen.png",
        live: "berserkess.github.io/password-generator/",
        github: "https://github.com/BerserKess/password-generator",
    },
    {
        num: "03",
        category: "frontend",
        title: "Criador de notas",
        description: "Um aplicativo para criar notas",
        stack: [{name: "Typescript"}, {name: "Tailwind.Css"}, {name: "React.Js"}],
        image: "/assets/work/notes.png",
        live: "berserkess.github.io/nlw-react-notes/",
        github: "https://github.com/BerserKess/nlw-react-notes",
    },
    {
        num: "04",
        category: "frontend",
        title: "Projeto SALVESUL",
        description: "Um site sobre as enchentes que ocorreram no RS",
        stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
        image: "/assets/work/salvesul.png",
        live: "https://sites.google.com/view/trabalho-de-nara/in%C3%ADcio",
        github: "https://github.com/BerserKess/nlw-react-notes",
    },
]

export default function Work (){
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // PEGAR O INDICE DO SLIDE ATUAL
        const currentIndex = swiper.activeIndex;

        // ATUALIZAR O PROJETO COM BASE NO INDICE DO SLIDE ATUAL
        setProject(projects[currentIndex])
    }
    return(
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease:"easeIn"}
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-3 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* NUMERO DO PROJETO */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* CATEGORIA DO PROJETO */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                Projeto {project.category}
                            </h2>
                            {/* DESCRIÇÃO DO PROJETO */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* STACK */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return(
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* BOTÕES */}
                            <div className="flex items-center gap-4">
                                {/* PAGINA DO PROJETO */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
                                            items-center group">
                                                <BsArrowUpRight  className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Página do Projeto</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* GITHUB DO PROJETO */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center
                                            items-center group">
                                                <BsGithub  className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Repositório Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) =>{
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* CAMADA DE OVERLAY */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* IMAGEM */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} sizes='(max-width: 498px)' fill className="object-cover" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* BOTÕES DO SLIDER */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-reddus hover:bg-red-600 text-dark text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}