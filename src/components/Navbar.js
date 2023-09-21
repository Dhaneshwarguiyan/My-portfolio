


export default function Navbar() {
    return (
        <div className="flex justify-center ">
            <div className="flex justify-between items-center w-[1280px] min-w-[800px] h-[90px]  mt-[8px] mb-[8px] font-semibold ">
                <div>
                    <img src="" />
                    <div className="font-display text-[45px] ">Portfolio</div>
                </div>
                <ul className="flex w-[450px] h-[35px] justify-between items-center font-semibold text-[29px] font-display">
                    <li>
                        ABOUT
                    </li>
                    <li>
                        PROJECTS
                    </li>
                    <li>
                        CONTACT
                    </li>
                </ul>
            </div>
        </div>
    );
}