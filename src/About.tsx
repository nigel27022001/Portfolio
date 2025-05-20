import Section from './components/Section'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FadeInWhenVisible from './components/FadeAnimation'

const images = [
    "AboutMe.jpg",
    "AboutUdon.jpg",
    "AboutMe2.jpg"
]

function About() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((i) => (i + 1) % images.length)
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    return (
        
        <Section id="about">
            <div className="p-10 flex gap-4 items-center justify-center flex-wrap md:flex-nowrap md:flex-row">
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <FadeInWhenVisible>
                    <h3 className="text-3xl text-primary font-bold dark:text-dark-primary">
                        About Me
                    </h3>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                    <h2 className='text2xl text-black font-bold dark:text-white text-center'>
                        Background
                    </h2>
                    <p className="text-1xl text-black dark:text-white">
                        I am a final year student at the National University of Singapore, 
                        pursuing a degree in Computer Science. I have a keen interest in 
                        software engineering, particularly in the areas of Artificial Intelligence, 
                        Game Development and Computer Vision.
                    </p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                    <h2 className='text2xl text-black font-bold dark:text-white text-center'>
                        Origins
                    </h2>
                    <p className="text-1xl text-black dark:text-white">
                        Having got my hands on my parents' computer at a tender age of 7,
                        My father introduced me to the world of gaming in the form of Warcraft 3: The Frozen Throne.
                        I was intrigued by how fantasy stories could be brought to life through the medium
                        of games. Ever since then, I have been fascinated by the world of technology and would always
                        look around for potential problems that could be solved through technology.
                    </p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                    <h2 className='text2xl text-black font-bold dark:text-white text-center'>
                        Hobbies
                    </h2>
                    <p className="text-1xl text-black dark:text-white">
                        I love travelling to new countries and experiencing new cuisines. 
                        As a proud fur-uncle, I spend my weekends playing with my cream long-haired dachshund name Udon.
                        I enjoy playing football with my friends, and I am sadly... a Manchester United fan.
                        Other than that, I also enjoy playing competitve games such as League of Legends, Tom Clancy Rainbow Six Siege 
                        and occasionally some Single-player Campaign Games.
                    </p>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                    <h1 className='text-2xl text-black font-bold dark:text-white'>
                        In Essence, I am a
                        <span className='text-primary font-bold font-secondary dark:text-dark-primary'>
                            <Typewriter
                                words={[' Programmer', ' Football-fanatic', ' Fur-uncle', ' Gamer']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={200}
                                deleteSpeed={100}
                                delaySpeed={1000}
                                />
                        </span>
                    </h1>
                    </FadeInWhenVisible>
                </div>
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
                    <div className="absolute inset-0 flex items-center justify-between px-4">
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
                </div>
            </div>
        </Section>
    );
}
export default About;