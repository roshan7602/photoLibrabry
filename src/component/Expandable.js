import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";


function ExapandablePanel({header, children}) {
    const handleClick =  () =>{
        setExpended(!expanded)
    }
    const [expanded , setExpended] = useState(false);
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row item-center justify-between">
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer">
               { expanded ? <GoChevronDown /> : <GoChevronUp/>}
               </div>
            </div>
            {
                expanded && <div className="p-2 border-t">{children}</div>
            }
            
        </div>
    );
}

export { ExapandablePanel }