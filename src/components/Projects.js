import data from "../assests/projectdata";

export default function Projects(){

   

    return(
        <div className="flex justify-evenly items-center w-[1280px] h-screen mx-auto pt-10">
            { 
                data.map((value)=>{
                    return (
                        
                        <div className="w-[320px] h-[400px] rounded-lg shadow-lg shadow-black/100 flex flex-col items-center bg-[rgb(31,31,31)]">
                            <div>
                                <img 
                                className="w-[300px] h-[200px] border-2 rounded-[8px] mt-[10px] shadow-lg"
                                src={value.img} alt="project overview" />
                            </div>
                            <div className="mx-2">
                                <p className="text-xl text-[rgb(221,220,220)] font-medium my-4 text-center">{value.title}</p>
                                <p className="my-1 mx-2 text-slate-200 text-start">{value.desc}</p>
                            </div>
                            <div className="my-3 ">
                                <button className="border-2 py-1 px-2 rounded-lg mx-2 bg-[rgb(175,175,175)] font-medium">Github</button>
                                <button className="border-2 py-1 px-2 rounded-lg mx-2 bg-[rgb(175,175,175)] font-medium">Live Demo</button>
                            </div>
                        </div>
                        
                    );
                  
                })
               
            }
        </div>
    );
}