import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { petrona } from "@/utils/fonts";

export default function CarouselTemplate({carouselData}:CarouselTemplateProps) {
    return (
        <>
        {carouselData.map((carouselItem, index) => (
        <Carousel key={index} className="relative w-full sm:w-[48%] md:w-[47%] h-full" >
            <CarouselContent >
            {carouselItem.map((carouselItem, itemIndex) => (
                <CarouselItem key={itemIndex}>
                    <div className="relative ">
                        <Card >
                            <CardContent className="flex items-center justify-center p-6 " style={{ height: '300px' }}>
                            <div className="relative w-full h-full">
                                <Image className="w-full h-full opacity-100 hover:opacity-25 transition-opacity" alt={carouselItem.alt} src={carouselItem.src} width={800} height={800} />
                                <div className="overflow-auto absolute inset-0 grid grid-col gap-3 opacity-0 hover:opacity-100 transition-opacity hover:bg-teal-950 hover:bg-opacity-65 px-8 py-2">
                                        <h1 className="text-baseline md:text-md lg:text-xl font-bold">{carouselItem.alt}</h1>
                                        <p className="font-medium text-xs sm:text-sm md:text-sm lg:text-md">{carouselItem.description}</p>
                                        
                                        <div className="mt-1 flex flex-wrap items-center justify-center">
                                        {carouselItem.badges.map((badge, badgeIndex) => (
                                            <Badge key={badgeIndex} variant="outline" className={`${petrona.className} font-normal tracking-wider mx-1 badgeColor`}>
                                                {badge}
                                            </Badge>
                                        ))}    
                                        </div>
                                </div>
                            </div>
                            </CardContent>
                        </Card>
                        <CarouselPrevious className="absolute bottom-4 left-4"/>
                        <CarouselNext className="absolute bottom-4 right-4"/>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
      ))}
        </>
        
    );
}
