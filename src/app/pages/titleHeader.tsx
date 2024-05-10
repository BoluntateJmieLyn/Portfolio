import { petrona} from "@/utils/fonts";

type titleHeaderProps = {
    title: string,
}
export default function TitleHeader({title}:titleHeaderProps){
    return(
        <h2 className={`${petrona.className} text-lg font-bold text-center mb-10 tracking-widest`}>{title}</h2>
    );
}