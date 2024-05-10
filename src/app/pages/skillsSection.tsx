import { cardData } from "@/data/cardData";
import CardTemplate from "./cardTemplate";
import TitleHeader from "./titleHeader";

export default function SkillsSection(){
    return (
        <section className="content-center m-10 h-[100vh]" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-24 md:mt-24 sm:mt-0 mt-0">
                <TitleHeader title="Technologies that I use" />
                <div className="h-[55vh] overflow-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {cardData.map((card, index) => (
                        <CardTemplate key={index} img={card.src} title={card.title} description={card.description} link={card.link}/>
                    ))}
                </div>
                
            </div>
        </section>
    );
}