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
                                <h3 className="text-lg font-semibold text-black dark:text-dark-primary">Automation Software Engineer Intern @ Boehringer Ingelheim</h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Singapore</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">May 2024 - Dec 2024</time>
                                <p className="text-base font-normal text-black dark:text-white">At <strong>Boehringer Ingelheim</strong>, I was part of the Network Automation Team and the IP Address Management system product team. <br />
                                I was responsible for the development of scripts to help automate the configuration of IP Ranges within the Boehringer Ingelheim global network. <br />
                                This supported the team in the process of cleaning up older redundant IP ranges and allowed dashboards to show more accurate and comprehensive data. <br />
                                <i>Tools used: Python, Ansible, Git, Jira, Confluence</i>
                                </p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h3 className="text-lg font-semibold text-black dark:text-dark-primary">Software Engineer Intern @ NUS-NCS Laboratory for Cybersecurity</h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Singapore</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Jan 2025 - May 2025</time>
                                <p className="text-base font-normal text-black dark:text-white">At <strong>NUS-NCS Laboratory for Cybersecurity</strong>, I was part of the LLM research team. <br />
                                I was responsible for the development of a LLM Model that was able to recommend Cyber-Attack workflows for Cyber-Security Analysts from a repository of trusted workflows. <br />
                                I was also responsible for the development for a web-app that utilised the above model, and converted the output into a flowchart format for easier end-user readability. <br />
                                <i>Tools used: Python, Flask, Javascript, React, Reactflow, Git</i>
                                </p>
                            </li>
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                <h3 className="text-lg font-semibold text-black dark:text-dark-primary">Software Engineer Intern @ Knorex
                                    <span className="bg-primary text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Up-coming</span>
                                </h3>
                                <h4 className="text-sm text-primary leading-none font-bold">Ho Chi Minh City, Vietnam</h4>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">July 2025 - Dec 2025</time>
                            </li>
                        </div>
                    </ol>
                </div>
            </FadeInWhenVisible>
        </Section>
    )
}

export default Experiences;