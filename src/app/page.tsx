import { ArrowDownCircleIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import AboutSection from "./pages/aboutSection";
import { Header } from "./pages/header";
import HomeSection from "./pages/homeSection";
import ProjectSection from "./pages/projectSection";
import SkillsSection from "./pages/skillsSection";
import Link from "next/link";
import Image from "next/image";


export default function Home(){ 
    return (
        <>
            <main className="flex flex-col min-h-screen" id="main">
                <Header />
                <HomeSection/>
                <hr className="h-1 border-0"/>
                <SkillsSection/>
                <hr className="h-1 border-0"/>
                <ProjectSection/>
            </main>
            <footer className="footer p-5 flex flex-wrap flex-row justify-center md:justify-between">
                <div className="flex flex-row gap-x-1 ">
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="https://www.linkedin.com/in/jmie-lyn-boluntate" className="">                    
                        <LinkedInLogoIcon className="size-7 " />
                        </Link>
                    </div>
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="https://github.com/BoluntateJmieLyn">                    
                            <GitHubLogoIcon className="size-7" />
                        </Link>
                    </div>
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="mailto:jmielynboluntate@gmail.com">                    
                            <Mail className="size-7" />
                        </Link>
                    </div>
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="https://m.me/jmlyxnn">                    
                            <Image className="size-7" alt="messenger" src="/messenger.png" width={30} height={30}/> 
                        </Link>
                    </div>
                    
                </div>
                <div className=" footerCreds opacity-40 text-xs font-semibold content-center">
                    <p className="">Jmie Lyn L. Boluntate © 2024</p>
                </div>
                
                

            </footer>
        </>
        
               
  );
}