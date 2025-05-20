import Section from './components/Section'
import FadeInWhenVisible from './components/FadeAnimation';
import ProjectCard from './components/ProjectCard';

function Projects() {
    return (
        <Section id="projects">
            <FadeInWhenVisible>
                <div className="p-10 flex flex-col gap-4">
                    <h3 className="text-3xl text-primary font-bold dark:text-dark-primary">
                        Projects
                    </h3>
                    <div className='flex flex-wrap gap-4 items-center justify-center'>
                        <ProjectCard title="NotChess" 
                        description={<p className="text-sm text-black text-center"> Notchess is a chess game with a rogue-like twist. With unique unit upgrades and terrains, the possibilities and fun are endless. <br></br> <strong>Built with Unity Engine and Written in C#</strong></p>} 
                        images={["./src/assets/Projects/ProjectNotChessLogo.png", "./src/assets/Projects/ProjectNotChessUpgrade.png", "./src/assets/Projects/ProjectNotChessEvent.png"]} />
                        <ProjectCard title="Captcha Segmentation & Classification Model" 
                        description={<p className="text-sm text-black text-center"> Created a pipeline which cleans, segments obfuscated character captchas and classifies the segmented characters.<br></br> <i>Achieved 92% Character Classification Accuracy</i><br></br> <strong>Built with Pytorch, OpenCV2 and Written in Python</strong></p>} 
                        images={["./src/assets/Projects/ProjectCaptchaInitial.jpg", "./src/assets/Projects/ProjectCaptchaSegmentation.jpg"]} />
                        <ProjectCard title="Homecooked" 
                        description={<p className="text-sm text-black text-center"> Homecooked is a model which recommends recipes from a curated repository based on the user's ingredients. <br></br><i> Utilising NLP techniques such as TF-IDF Vectorising and Cosine Similarity.<br></br> Computer Vision model to classify ingredients by images(WIP)</i> <br></br><strong>Written in Python</strong></p>} 
                        images={["./src/assets/Projects/ProjectHomecookedIngredients.jpg"]} />
                        <ProjectCard title="Strack.io" 
                        description={<p className="text-sm text-black text-center"> Strack.io is a Desktop Application for Home-Based Business Owners to manage their menu, customer information and orders. <br></br> Helping users to <i>Make Snack, Keep Track and Use Strack</i><br></br><strong>Built with Java, JavaFX.</strong> </p>} 
                        images={["./src/assets/Projects/ProjectStrackPic.png"]} />
                    </div>
                </div>
            </FadeInWhenVisible>
        </Section>
    )
}

export default Projects 