"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefone",
        description: "(+55)83 98787-9898"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "beta.soltuions@email.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Endereço",
        description: "Rua Nowhere S/N, JozéPanheiro. 58842-999 - Campina Grande - PB"
    },
]
export default function Contact (){
    return(
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease:"easeIn"}
            }}
            className="py-6 px-2"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* FORMS */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
                            <p className="text-white/60">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quas.
                            </p>
                            {/* INPUTS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Primeiro nome" autoComplete="off"/>
                                <Input type="lastname" name="lastname" placeholder="Ultimo nome" autoComplete="off"/>
                                <Input type="email" name="email" placeholder="Email" autoComplete="off"/>
                                <Input type="phone" name="phone" placeholder="Telefone" autoComplete="off"/>
                            </div>
                            {/* SELECTS */}
                            <Select name="select">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecione um assunto" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione um assunto</SelectLabel>
                                        <SelectItem value="est">Dsenvolvimento Web</SelectItem>
                                        <SelectItem value="cst">Dsenvolvimento Fullstack</SelectItem>
                                        <SelectItem value="mst" >UI/UX Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* TEXTAREA */}
                            <Textarea className="h-[200px]" placeholder="Escreva sua mensagem aqui." name="message" />
                            {/* BUTTON */}
                            <Button size="md" className="max-w-40">Enviar</Button>
                        </form>
                    </div>
                    {/* INFO */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return(
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-lazuli rounded-[5px] flex items-center justify-center p-3">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}