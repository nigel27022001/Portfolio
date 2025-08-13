import Section from "./components/Section";
import FadeInWhenVisible from "./components/FadeAnimation";

function Experiences() {
    return (
        <Section id="experiences">
            <FadeInWhenVisible>
                <div className="p-10 flex flex-col gap-0">
                    <h3 className="text-1xl text-secondary dark:text-dark-secondary">
                        Past and current internships
                    </h3>
                    <h3 className="text-3xl text-primary font-bold dark:text-dark-primary">
                        Experiences
                    </h3>
                    <ol className="relative border-s border-primary dark:border-white mt-10 mx-4">
                        <div>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h3 className="text-xl font-semibold text-black dark:text-dark-primary">Automation Software Engineer Intern @ Boehringer Ingelheim</h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Singapore</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">May 2024 - Dec 2024</time>
                                <p className="text-base font-normal text-black dark:text-white">
                                    <ul className="list-disc list-inside">
                                        <li>Automated DHCP server standardization across enterprise infrastructure using Python scripts and Ansible Automation Platform, reducing manual configuration time by eliminating repetitive tasks.</li>
                                        <li>Built machine learning dashboards in Python and Splunk Analytics to predict server loads and optimize resource allocation.</li>
                                        <li>Contributed to IP Address Management System governance framework as core product team member.</li>
                                        <li>Participated in Regional Generative AI Focus Group to identify AI integration opportunities in business workflows.</li>
                                    </ul>
                                <i className="font-bold">Languages/Frameworks/Tools used: Python, Ansible</i>
                                </p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h3 className="text-xl font-semibold text-black dark:text-dark-primary">Software Engineer Intern @ NUS-NCS Laboratory for Cybersecurity</h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Singapore</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Jan 2025 - May 2025</time>
                                <p className="text-base font-normal text-black dark:text-white">
                                    <ul className="list-disc list-inside">
                                        <li>Built custom LLM-powered system using Langchain and Neo4J to recommend incident response workflows for cybersecurity operations teams.</li>
                                        <li>Developed full-stack web application with React frontend and Flask backend enabling workflow querying and interactive flowchart visualization.</li>
                                        <li>Streamlined incident handling processes through automated workflow recommendations and intuitive user interface.</li>
                                    </ul>
                                <i className="font-bold">Languages/Frameworks/Tools used: Python, Flask, Javascript, React, Reactflow</i>
                                </p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h3 className="text-xl font-semibold text-black dark:text-dark-primary">Full-Stack Software Engineer Intern @ Knorex
                                </h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Ho Chi Minh City, Vietnam</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">July 2025 - Dec 2025</time>
                                <p className="text-base font-normal text-black dark:text-white">
                                    <ul className="list-disc list-inside">
                                        <li>Implemented content rating filters in Real Time Bidding (RTB) system using Go and C++ for high-performance programmatic advertising.</li>
                                        <li>Enhanced targeting capabilities for advertisement placement based on user content preferences.</li>
                                    </ul>
                                <i className="font-bold">Languages/Frameworks/Tools used: Golang, C++, Java, Redis, Docker, Kubernetes</i>
                                </p>
                            </li>
                        </div>
                    </ol>
                </div>
            </FadeInWhenVisible>
        </Section>
    )
}

export default Experiences;