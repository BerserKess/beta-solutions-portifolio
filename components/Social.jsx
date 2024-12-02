import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link'
export function Social({containerStyles, iconStyles}){
    const socials = [
        {icon:<FaGithub />, path:'https://github.com/BerserKess'},
        {icon:<FaLinkedin />, path:'https://www.linkedin.com/in/kesley-rainery/'},
        {icon:<FaInstagram />, path:'https://www.instagram.com/bers3rkess/'},
        {icon:<FaSquareXTwitter />, path:'#'},
    ]
    return(
        <div className={containerStyles}>
            {socials.map((item, index) =>{
                return (
                    <Link key={index} href={item.path}className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}