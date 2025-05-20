import ImageRoulette from "./ImageRoulette"
import { ReactNode } from "react"

type ProjectCardProps = {
    title: string;
    description: ReactNode;
    images: string[];
}

export default function ProjectCard({title, description, images}: ProjectCardProps) {
    return (
        <div className="bg-tertiary relative overflow-hidden rounded-xl shadow-lg pb-3 max-w-sm h-[450px] flex flex-col items-center hover:shadow-2xl hover:scale-105 transition dark:bg-dark-secondary">
            {images && <div className="w-96 h-96 flex items-center justify-center"><ImageRoulette images={images} /></div>}
            <h3 className="text-base font-bold text-black">{title}</h3>
            {description}
            
        </div>
    )
}
