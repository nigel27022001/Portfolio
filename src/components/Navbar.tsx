import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false); // close menu on link click
    };

    const toggleDark = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        setDark(isDark);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-tertiary shadow-md p-4 flex items-center justify-between z-10 dark:bg-dark-quaternary">
        <span className="font-bold text-4xl text-black font-title dark:text-dark-primary">Nigel Lim</span>

        <div className="h-10 w-32 flex-shrink-0 flex items-center justify-center">
            <img
            src="https://media.tenor.com/st6vDtbyyQwAAAAi/ditto-pokemon.gif"
            alt="Ditto"
            className="h-10 animate-wiggle-x object-contain object-left"
            />
        </div>
        
      {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
            {["home", "about", "skills","experiences", "projects", "contact"].map((id) => (
                <button
                    key={id}
                    className="!bg-secondary text-black hover:underline dark:!bg-dark-secondary"
                    onClick={() => scrollTo(id)}
                >
                {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
            ))}
            <button onClick={toggleDark} className="ml-4 p-2 rounded-full !bg-secondary dark:!bg-dark-secondary text-black hover:underline">
                {dark ? <Sun /> : <Moon />}
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="!bg-secondary text-black">
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

      {/* Mobile Dropdown */}
        {open && (
            <div className="absolute top-full left-0 w-full bg-tertiary flex flex-wrap items-center gap-4 p-4 md:hidden shadow-md">
                {["home", "about", "skills","experiences", "projects", "contact"].map((id) => (
                <button
                    key={id}
                    className="!bg-secondary text-black hover:underline dark:!bg-dark-secondary"
                    onClick={() => scrollTo(id)}
                >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
            ))}
                <button onClick={toggleDark} className="ml-4 p-2 rounded-full !bg-secondary dark:!bg-dark-secondary text-black hover:underline">
                    {dark ? <Sun /> : <Moon />}
                </button>
            </div>
        )}
        </nav>
    );
}