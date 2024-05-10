import { ArrowDownCircleIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import AboutSection from "./pages/aboutSection";
import { Header } from "./pages/header";
import HomeSection from "./pages/homeSection";
import ProjectSection from "./pages/projectSection";
import SkillsSection from "./pages/skillsSection";
import Link from "next/link";


export default function Home(){ 
    return (
        <>
            <main className="flex flex-col min-h-screen" id="main">
                <Header />
                <HomeSection/>
                <hr className="h-1 border-0"/>
                <AboutSection/>
                <hr className="h-1 border-0"/>
                <SkillsSection/>
                <hr className="h-1 border-0"/>
                <ProjectSection/>
            </main>
            <footer className="footer p-5">
                <div className="flex flex-row gap-x-1 justify-center sm:justify-start sm:gap-x-2 h-fit">
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
                        <Link href="https://web.facebook.com/jmlyxnn/">                    
                            <FacebookIcon size={28} />
                        </Link>
                    </div>
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="https://www.instagram.com/jm_lyxnn/?hl=en">                    
                            <InstagramIcon size={28} />
                        </Link>
                    </div>                    
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start md:justify-start lg:justify-start items-center ">   
                    <div className="rounded-lg p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-950 ">
                        <Link href="mailto:jmielynboluntate@gmail.com" className="">                    
                            <p className="flex flex-row items-center"><Mail size={15} /> jmielynboluntate@gmail.com</p>
                        </Link>
                    </div>  
                </div>
                <p className="flex footerCreds opacity-40 text-xs justify-center sm:justify-center md:justify-end lg:justify-end ">Jmie Lyn L. Boluntate © 2024</p>

            </footer>
        </>
        
               
  );
}