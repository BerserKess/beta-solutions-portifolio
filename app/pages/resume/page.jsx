"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaJava,
    FaReact,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const about = {
    title: "Sobre nós",
    description: "Uma empresa ficticia formada pelos alunos do curso de ADS da UNINASSAU CG",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Beta Solutions"
        },
        {
            fieldName: "Telefone",
            fieldValue: "(+55)83 98787-9898"
        },
        {
            fieldName: "Experiência",
            fieldValue: "4+ Anos"
        },
        {
            fieldName: "Nacionalidade",
            fieldValue: "Brasileira"
        },
        {
            fieldName: "Trabalhos",
            fieldValue: "Disponível"
        },
        {
            fieldName: "Idioma",
            fieldValue: "Português(BR), Inglês"
        },
        {
            fieldName: "Email",
            fieldValue: "beta.soltuions@email.com"
        },
    ]
}

const experience = {
    title: "Experiências",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt modi perspiciatis.",
    items: [
        {
            company:"CandyTech - Doces & Tecnologia",
            position:"Full Stack Developer",
            duration:"2024 - Presente"
        },
        {
            company:"AgroDesign Festival",
            position:"Front-End Developer",
            duration:"Verão de 2022"
        },
        {
            company:"Startup E-commerce",
            position:"Freelance Web Developer",
            duration:"2020 - 2021"
        },
        {
            company:"Instituto Nacional do Semiárido",
            position:"Estagiário Web Developer",
            duration:"2019 - 2020"
        },

    ]
}
const education = {
    title: "Experiências",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt modi perspiciatis.",
    items: [
        {
            institution:"One Bit Code",
            degree:"Javascript",
            duration:"2022"
        },
        {
            institution:"One Bit Code",
            degree:"HTML5",
            duration:"2022"
        },
        {
            institution:"One Bit Code",
            degree:"CSS3",
            duration:"2022"
        },


    ]
}
const skills = {
    title: "Habilidades",
    description: "Algumas de nossas habilidades",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaJava />,
            name: "java"
        },

    ]
}
const members = {
    title: "Membros",
    description: "Os valiosos membros da nossa equipe",
    membersList: [
        {
            name:"Kesley Rainery",
            responsabillity: "Front-End Developer",
            image:"/assets/members/kael.jpg",
            github:"https://github.com/BerserKess",
            linkedin:"https://www.linkedin.com/in/kesley-rainery/"
        },
        {
            name:"Icaro Emanuel",
            responsabillity: "Backend Developer",
            image:"/assets/members/icaro.jpg",
            github:"https://github.com/IcaroEmanuel-1502",
            linkedin:"https://www.linkedin.com/in/icaro-emanuel-95b48624a/"
        },
        {
            name:"Pedro Ribeiro",
            responsabillity: "UX/UI Designer",
            image:"/assets/members/pedro.jpg",
            github:"https://github.com/Pedroribeiro-ux",
            linkedin:"https://www.linkedin.com/in/pedro-ribeiro-2485b7322/"
        },
        {
            name:"Diogo Graciano",
            responsabillity: "FullStack Developer",
            image:"/assets/members/diogo.jpg",
            github:"https://github.com/graciiano",
            linkedin:"https://www.linkedin.com/in/graciiano/"
        },
    ]
}

export default function Resume (){
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay:2.4, duration: 0.4, ease:"easeIn"}
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="about"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">Sobre nós</TabsTrigger>
                        <TabsTrigger value="members">Membros</TabsTrigger>
                        <TabsTrigger value="skills">Competências</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full p-2 xl:p-0'>
                        {/* SOBRE NÓS */}
                        <TabsContent value="about" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return(
                                            <li
                                                key={index}
                                                className='flex items-center justify-center xl:justify-start gap-4'
                                            >
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        {/* MEMBROS */}
                        </TabsContent>
                        {/* MEMBROS */}
                        <TabsContent value="members" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{members.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{members.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {members.membersList.map((member, index) => {
                                            return(
                                                   <li key={index}  className='bg-[#232329] h-[184px] py-6 rounded-xl flex justify-around items-center gap-3 p-3 border border-white/10'>
                                                        <div className='flex flex-col'>
                                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-accent'>{member.name}</h3>
                                                            <div className='flex
                                                             flex-col gap-2'>
                                                                <p>{member.responsabillity}</p>

                                                                <div className='flex items-center justify-center gap-6'>
                                                                <Link href={member.github}>
                                                                    <FaGithub className='text-3xl hover:text-lazuli transition-all duration-500'/>
                                                                </Link>
                                                                <Link href={member.linkedin}>
                                                                    <FaLinkedin className='text-3xl hover:text-lazuli transition-all duration-500'/>
                                                                </Link>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='relative border-[3px] border-reddus w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0 '>
                                                        {/* IMAGEM */}
                                                            <Image
                                                            src={member.image}
                                                            fill
                                                            sizes='(max-width: 80px)'
                                                            className='object-cover'
                                                            alt=''
                                                             />
                                                        </div>
                                                    </li>

                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* COMPETÊNCIAS */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px]'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillList.map((skill, index) => {
                                            return(
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className=' text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}