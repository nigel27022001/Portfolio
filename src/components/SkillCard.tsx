import type { ReactNode } from "react";

type SkillCardProps = {
    title: string;
    description: string;
    image?: ReactNode;
};

export default function SkillCard({ title, description, image }: SkillCardProps) {
    return (
        <div className="bg-tertiary w-32 h-56 rounded-xl shadow-lg p-6 max-w-sm flex flex-col items-center gap-1 hover:shadow-2xl hover:scale-105 transition dark:bg-dark-tertiary">
            {image && <div className="w-20 h-20 mb-2 flex items-center justify-center">{image}</div>}
            <h3 className="text-sm font-bold text-black">{title}</h3>
            <p className="text-xs text-black text-center">{description}</p>
        </div>
    )
}