import Image from "next/image";
import TitleHeader from "./titleHeader";

export default function AboutSection(){
    return (
        <section className="content-center m-10 h-fit" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-24 md:mt-24 sm:mt-0 mt-0">
            <TitleHeader title="Know More About Me!"/>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 md:gap-20">
                <div className="relative rounded-full bg-white h-80 w-80 overflow-hidden">
                    <Image className="object-cover" fill alt="icon" src="/melogo.jpeg"  />
                </div>
                <div className="h-[50vh] w-[100%] sm:h-[40vh] sm:w-[90vh] md:w-[60vh] md:h-[60vh] lg:h-[60vh] lg:w-[100vh] flex overflow-auto overscroll-contain content-start sm:content-center aboutContainer">
                    <div className="w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full self-center text-xs md:text-sm lg:text-base text-center text-wrap sm:text-justify lg:p-5 md:p-5 sm:p-5 p-5 whitespace-pre">
                        <p>Hey there, I&apos;m Jmie Lyn Boluntate, a passionate individual who is very ambitious, motivated, and a person who always seek for more. Through out my 4 years of residency at Gordon College, taking Bachelor of Science in Information Technology, I gained essential skills and knowledge. And my stay ignited my passion to always seek for improvement and to learn for more.</p>
                        <br/>
                        <p>My initial dream was to become a game developer. I always dream of creating a game. Way back then even though I can conceptualize ideas for a game, I have a limited understanding about programming and technology. And I&apos;m not certain that I can do it, or if I really want to do it.</p>
                        <br/>
                        <p>In the face of overwhelming questions and overthinking I encounter a path and started the journey in the field of IT. I rekindle a new kind of passion. I.T. field opened me a path of pursuing innovative solutions for a problem that causing people headache.</p>
                        <br/>
                        <p>Despite my self doubt and initial hesitation. Through out my journey, I learned how to believed in my self, I started enjoying everything that I do and despite the extreme amount of work load I still find the reason to have fun. Every time that I accomplished a task, or a project I always feel the satisfaction of completing something through all my hard work. With each day I still crave for more knowledge and learning that will fulfill my little curiosity.</p>
                    </div>
                </div>
                
            </div>
      </div>
    </section>
    );
}