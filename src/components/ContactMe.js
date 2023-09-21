import { useState } from "react";
import {TfiEmail} from "react-icons/tfi"

export default function ContactMe(){
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""

    })

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
        })
        )
    }
    return(
        <div className="w-full h-[630px] bg-[rgb(20,20,20)]">
        <div className="bg-[rgb(41,41,41)] w-5/12  rounded-xl mx-auto py-2 relative top-8 px-7">
            <p className="text-[rgb(153,153,161)] relative top-4  text-sm font-medium ">
                GET IN TOUCH
            </p>
            <h2 className="text-[rgb(212,212,216)] text-5xl font-bold mt-4 ">Contact.</h2>
            <form >
            
            <label >
            <p className="text-[rgb(212,212,216)] font-medium my-2 mt-5">Name</p>
            <input 
                required
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={changeHandler}
                value={formData.name}
                className="bg-[rgb(31,31,31)] w-[96%]  px-2 py-3 rounded-lg "
                />
            </label>

            <label >
            <p 
            className="text-[rgb(212,212,216)] font-medium my-2 mt-3">Email</p>
            <input 
                required
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                className="bg-[rgb(31,31,31)] w-[96%]  px-2 py-3  rounded-lg"
                />
            </label>

            <label >
            <p
            className="text-[rgb(212,212,216)] font-medium my-2 mt-3">Message</p>
            <textarea 
                placeholder="Your Message"
                name="message"
                onChange={changeHandler}
                value={formData.message}
                className="bg-[rgb(31,31,31)] w-[96%]  px-2 py-3 pb-[100px] rounded-lg"
                />
            </label>
            <button className="text-[rgb(212,212,216)] font-bold pl-3 flex  py-3 rounded-lg bg-[rgb(20,20,20)] px-1 pr-[30px] mt-3 mb-3">
                SEND
                <span className="relative top-1 left-3"><TfiEmail/></span>
            </button>
            </form>
        </div>
        </div>
    );
}