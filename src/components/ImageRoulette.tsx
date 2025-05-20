import { ReachNode } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

type ImageRouletteProps = {
    images: string[];
}

export default function ImageRoulette({ images }: ImageRouletteProps) {
    const [index, setIndex] = useState(0)
    
    const next = () => setIndex((i) => (i + 1) % images.length)
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    return (
        <div className="relative flex items-center mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                key={index}
                src={images[index]}
                alt={`Slide ${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl object-cover border-4 border-secondary dark:border-dark-secondary"
                />
            </AnimatePresence>
            
            {images.length > 1 && (<div className="absolute inset-0 flex items-center justify-between px-1">
                <button
                onClick={prev}
                className="bg-white/80 p-1 rounded-full opacity-40 hover:bg-white hover:opacity-100"
                >
                ◀
                </button>
                <button
                onClick={next}
                className="bg-white/80 p-1 rounded-full opacity-40 hover:bg-white hover:opacity-100"
                >
                ▶
                </button>
            </div>
            )}
        </div>
    )
}

