import Git from "../assests/Git.svg";
import Github from "../assests/Github.svg";
import HTML  from "../assests/HTML";
import javascript from "../assests/Javascript.svg";
import Tailwind from "../assests/Tailwind.png";
import CSS from "../assests/CSS.png";


export default function(){
    return(
        <div>
            <img src={Git} alt="git" />
            <img src={Github} alt="github" />
            <img src={javascript} alt="javascript" />
            <img src={Tailwind} alt="Tailwind" />
            <img src={CSS} alt="CSS" />
            <img src={HTML} alt="html" />
        </div>
    );
}