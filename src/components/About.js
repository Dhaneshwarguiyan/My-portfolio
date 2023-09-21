import dp from "../assests/dp.jpg"
import Git from "../assests/Git.svg";
import Github from "../assests/Github.svg";
import HTML from "../assests/HTML.png";
import javascript from "../assests/Javascript.svg";
import Tailwind from "../assests/Tailwind.png";
import CSS from "../assests/CSS.png";


export default function About() {
    return (

    
        <div 
        id="about"
        className="h-screen w-screen bg-[rgb(199,199,207)] flex justify-center items-center">

            <div className="bg-[rgb(247,247,248)] rounded-xl h-[600px] w-[1280px]  shadow-[rgb(133,133,133)] shadow-md mx-auto">
                <h2 className="text-center text-[rgb(31,31,31)] text-7xl font-display mb-[70px] relative top-8">About me</h2>
                <div className="w-full mx-auto flex justify-evenly">
                    <div>
                        <img src={dp} width={400} className="rounded-lg shadow-md shadow-[rgb(70,70,78)]" />
                    </div>
                    <div className="h-[629px] w-[700px] font-display">

                        <p className="text-start text-2xl">I am a self taught Front End developer from india. I build website with a focus on providing the experience for everyone,with responsiveness.Curious to learn more about developent,love problem solving. </p>
                        <div className="flex justify-evenly w-[730px] relative  top-[170px] ">
                        <img 
                        
                        src={Git} alt="git"
                        width={100} />
                        <img 
                        width={100}
                        src={Github} alt="github" />
                        <img 
                        width={100}
                        src={javascript} alt="javascript" />
                        <img 
                        width={100}
                        src={Tailwind} alt="Tailwind" />
                        <img 
                        width={100}
                        src={CSS} alt="CSS" />
                        <img 
                        width={100}
                        src={HTML} alt="html" />
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

{/* <div>
<img src={me} /> 
</div>
<div> <img src={html} alt="html" />
<img src={javascript} alt="javascript" />
<img src={css} alt="css" />
<img src={tailwind} alt="tailwind" />
<img src={react} alt="react" />
<img src={git} alt="git" />
<img src={github} alt="github" /> 
</div> */}