import { Card, CardHeader, CardTitle} from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card"
import { petrona } from "@/utils/fonts"
import { Link } from "lucide-react"
import Image from "next/image"

export default function CardTemplate({img, title, description, link}:CardProps){
    return(
        <HoverCard>
            <HoverCardTrigger>
                <Card className="border-transparent hover:bg-teal-950 hover:bg-opacity-65 ">
                    <CardHeader className="items-center grayscale-0 hover:grayscale">
                        <div className="content-center h-12" >
                            <Image className="rounded-lg" alt="icon" src={img} width={50} height={50}/>
                        </div>
                        <CardTitle className={`${petrona.className} text-center font-medium text-base mt-2`}>{title}</CardTitle>
                    </CardHeader>
                </Card>
            </HoverCardTrigger>

            <HoverCardContent>
                <a href={link} className="flex flex-row items-center drop-shadow-lg text-lg font-semibold linkColor ">
                    <Link size={15}/>
                    <span>{title}</span>
                </a>
                <hr className="h-0.5"/>
                <p className="text-sm">{description}</p>
            </HoverCardContent>
        </HoverCard>
        
    )
}