import Image from "next/image";
import { NavigationMenuDemo } from "./navigationMenu";
import Link from "next/link";

export function Header(){
    return (
        <div className="header flex place-content-center sm:place-content-between md:place-content-between lg:place-content-between p-3 sticky top-0 z-50">
            <Link href="#main">                
                <Image className="rounded-full hidden sm:block" alt="icon" src="/melogo.jpeg" width={45} height={35}/>
            </Link>
            
            <NavigationMenuDemo/>
        </div> 
    );
}