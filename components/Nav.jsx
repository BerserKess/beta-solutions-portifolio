"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Início',
        path: '/'
    },
    // {
    //     name: 'Serviços',
    //     path: '/pages/services'
    // },
    {
        name: 'Sobre Nós',
        path: '/pages/resume'
    },
    {
        name: 'Trabalhos',
        path: '/pages/work'
    },
    {
        name: 'Contato',
        path: '/pages/contact'
    },
]

export function Nav(){
    const pathName = usePathname();
    console.log(pathName)
    return(
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent-hover transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}