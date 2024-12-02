import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import { MobileNav } from "./MobileNav";

export function Header(){
    return(

        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold text-red-500">beta<span className="text-lazuli">.</span><span className="text-accent">Solutions</span></h1>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/pages/contact">
                        <Button>Nos contrate!</Button>
                    </Link>
                </div>

                {/* MOBILE NAV */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}