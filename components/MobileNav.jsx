"use client";

import{Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuFries} from 'react-icons/ci'

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
export function MobileNav(){
    const pathName = usePathname();
    return(
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetTitle>
                    <div className="mt-32 mb-40 text-center text-2xl">
                        <Link href="/">
                        <h1 className="text-4xl font-semibold text-red-500">beta<span className="text-lazuli">.</span><span className="text-accent">Solutions</span></h1>
                    </Link>
                    </div>
                </SheetTitle>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link,index) => {
                        return(
                            <Link

                             className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                             text-xl capitalize hover:text-accent transition-all`}
                             href={link.path}
                             key={index}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}