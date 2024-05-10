import { ArrowDownCircleIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { petrona } from "@/utils/fonts";
import Link from "next/link";

export default function HomeSection(){
    return (
        <section className="flex content-center justify-center lg:mx-10 lg:my-10 md:mx-10 md:my-10 sm:mx-10 sm:my-0 mx-0 my-0 h-[90vh]" id="home">
            <div className="flex flex-col w-2/3 h-full justify-center gap">
                <div className="">
                    <p className={`${petrona.className} text-xs sm:text-base md:text-md lg:text-lg`}><span>&quot;H e l l o W o r l d !&quot;</span> I am</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold lg:px-10">Jmie Lyn Boluntate</h1>
                    <h3 className={`${petrona.className} text-base sm:text-lg md:text-xl lg:text-3xl text-end py-2 blink`}>
                        Your Aspiring Web Developer.
                    </h3>
                </div>

                <p className="text-xs md:text-sm lg:text-base text-justify">
                    Over the past years I honed my skills and ventured on various projects. As a soon to be graduating student in Bachelor of Science in Information Technology, this portfolio is the exemplification of my dedication and passion for all things tech.
                </p>
                <div className="flex flex-row gap-x-2 justify-center sm:justify-start sm:gap-x-8 h-fit">
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
                <Link href="#about" scroll legacyBehavior passHref>
                    <div className="grid">    
                        <ArrowDownCircleIcon size={50} className="justify-self-center animate-bounce rounded-full shadow-bottom"/>
                    </div>
                </Link>

            </div>
        </section>
    );
}

