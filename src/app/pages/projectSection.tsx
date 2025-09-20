import { carouselData } from "@/data/carouselData";
import CarouselTemplate from "./carouselTemplate";
import TitleHeader from "./titleHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { petrona } from "@/utils/fonts";


export default function ProjectSection(){
    return (
        <section className="content-center md:m-10 m-5 h-[100%]" id="projects">
            <div className="w-full px-2 mt-24">
                <TitleHeader title="Projects I worked on" />
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
                <div className="flex flex-wrap flex-row justify-center gap-1">
                <CarouselTemplate carouselData={carouselData}/>
                <Card className="relative w-full sm:w-[48%] md:w-[47%] h-full ">
                    <CardContent className="flex items-center justify-center p-6 " style={{ height: '300px' }}>
                        <div className="relative w-full h-full">
                            <Image className="w-full h-full opacity-100 hover:opacity-25 transition-opacity" alt="icon" src="/todolist.png" width={800} height={800}/>
                            
                                <div className="overflow-auto absolute inset-0 grid grid-col gap-3 opacity-0 hover:opacity-100 transition-opacity hover:bg-teal-950 hover:bg-opacity-65 px-5 py-2">
                                    <div className="flex flex-wrap place-content-between">
                                        <h1 className="text-baseline md:text-md lg:text-xl font-bold">
                                            To-Do List 
                                        </h1>
                                        <Link href="https://todo-list-eight-rho-44.vercel.app">
                                            <div className="flex flex-row content-center text-xs sm:text-base md:text-base lg:text-md font-bold">                                    
                                                <SearchIcon className="size-2.5 sm:size-5 md:size-5" size={25}/>
                                                <p>View App</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="font-medium text-xs sm:text-sm md:text-sm lg:text-md">A web-based application that allows user to effortlessly manage their task. This task manager allows user to categorize, sort, and filter their task by status</p>
                                    <div className="mt-1 flex flex-wrap items-center justify-center">
                                        {["React", "Typescript", "Sonner" , "Zustand"].map((badge, badgeIndex) => (
                                            <Badge key={badgeIndex} variant="outline" className={`${petrona.className} font-normal tracking-wider mx-1 badgeColor`}>
                                            {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                </div>
                            
                        </div>
                        
                    </CardContent>
                </Card>
                <Card className="relative w-full sm:w-[48%] md:w-[47%] h-full ">
                    <CardContent className="flex items-center justify-center p-6 " style={{ height: '300px' }}>
                        <div className="relative w-full h-full">
                            <Image className="w-full h-full opacity-100 hover:opacity-25 transition-opacity" alt="icon" src="/moviestore.png" width={800} height={800}/>
                                <div className="overflow-auto absolute inset-0 grid grid-col gap-3 opacity-0 hover:opacity-100 transition-opacity hover:bg-teal-950 hover:bg-opacity-65 px-5 py-2">
                                    <div className="flex flex-wrap place-content-between">
                                        <h1 className="text-baseline md:text-md lg:text-xl font-bold">
                                            Movie Store 
                                        </h1>
                                        <Link href="https://moviestore-two.vercel.app">
                                            <div className="flex flex-row content-center text-xs sm:text-base md:text-base lg:text-md font-bold">                                    
                                                <SearchIcon className="size-2.5 sm:size-5 md:size-5" size={25}/>
                                                <p>View Site</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="font-medium text-xs sm:text-sm md:text-sm lg:text-md">Worked on redesigning a mocked-up Movie Store web page using pure CSS, focusing on creating a clean, responsive, and user-friendly layout without relying on external frameworks.</p>
                                    <div className="mt-1 flex flex-wrap items-center justify-center">
                                        {["Vanilla CCS"].map((badge, badgeIndex) => (
                                            <Badge key={badgeIndex} variant="outline" className={`${petrona.className} font-normal tracking-wider mx-1 badgeColor`}>
                                            {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                </div>
                            
                        </div>
                        
                    </CardContent>
                </Card>
                <Card className="relative w-full sm:w-[48%] md:w-[47%] h-full ">
                    <CardContent className="flex items-center justify-center p-6" style={{ height: '300px' }}>
                        <div className="relative w-full h-full">
                            <video controls preload="auto" className="bg-black absolute inset-0 h-full w-full aspect-video opacity-20 hover:opacity-100 transition-opacity" >
                                <source src="/laleavid.mp4" type="video/mp4"/>  
                            </video>
                            <div className="h-full overflow-auto grid grid-col gap-3 px-5 py-2 bg-teal-950  opacity-100 hover:opacity-0 transition-opacity" >
                                
                                <h1 className="text-baseline md:text-md lg:text-xl font-bold">
                                    LALEA: Language Learning App 
                                </h1>
                                <p className="font-medium text-xs sm:text-sm md:text-sm lg:text-md">An android base application that enables user to learn languages, familiarize with the different alphabet characters, hear the pronunciation, and test their learnings through different activities.</p>
                                <div className="mt-1 flex flex-wrap items-center justify-center">
                                {["React Native", "PHP"].map((badge, badgeIndex) => (
                                    <Badge key={badgeIndex} variant="outline" className={`${petrona.className} font-normal tracking-wider mx-1 badgeColor`}>
                                    {badge}
                                    </Badge>
                                ))}
                                </div>          
                            </div>
                        </div>                    
                    </CardContent>
                </Card>  
                <Card className="relative w-full sm:w-[48%] md:w-[47%] h-full ">
                    <CardContent className="flex items-center justify-center p-6 " style={{ height: '300px' }}>
                        <div className="relative w-full h-full">
                            <Image className="object-contain opacity-100 hover:opacity-25 transition-opacity" alt="icon" src="/gclamp.png" fill/>
                                <div className="overflow-auto absolute inset-0 grid grid-col gap-3 opacity-0 hover:opacity-100 transition-opacity hover:bg-teal-950 hover:bg-opacity-65 px-5 py-2">
                                    <div className="flex flex-wrap place-content-between">
                                        <h1 className="text-baseline md:text-md lg:text-xl font-bold">
                                            GC Lamp 
                                        </h1>
                                        <Link href="https://snack.expo.dev/@jmieboluntate/gclamp-mockup">
                                            <div className="flex flex-row content-center text-xs sm:text-base md:text-base lg:text-md font-bold">                                    
                                                <SearchIcon className="size-2.5 sm:size-5 md:size-5" size={25}/>
                                                <p>View App</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="font-medium text-xs sm:text-sm md:text-sm lg:text-md">As part of a school subject activity, I developed a mockup of the GClamp app using React Native, focusing on designing the user interface for the login screen.</p>
                                    <div className="mt-1 flex flex-wrap items-center justify-center">
                                        {["React Native"].map((badge, badgeIndex) => (
                                            <Badge key={badgeIndex} variant="outline" className={`${petrona.className} font-normal tracking-wider mx-1 badgeColor`}>
                                            {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                </div>
                            
                        </div>
                        
                    </CardContent>
                </Card>             
                </div>
            </div>
        </section>
    );
}