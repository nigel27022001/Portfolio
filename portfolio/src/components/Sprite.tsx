import { useEffect, useRef } from "react";

export default function Sprite({
    animationFn,
    className = ""
    }: {
    animationFn: () => Promise<HTMLCanvasElement>;
    className?: string;
    }) {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let canvas: HTMLCanvasElement | null = null;
        animationFn().then((result) => {
        canvas = result;
        if (canvasRef.current && canvas) {
            canvasRef.current.appendChild(canvas);
        }
        });

        return () => {
        if (canvasRef.current && canvas) {
            canvasRef.current.removeChild(canvas);
        }
        };
    }, [animationFn]);

    return <div ref={canvasRef} className={`absolute ${className}`} />;
}
