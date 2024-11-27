import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Dropdown({ className, content, big, menu }) {
    let size = big ? "py-3 px-4" : "py-2 px-3";
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className={`bg-light2 dark:bg-dark2 hover:bg-[#E4E4E4] dark:hover:bg-dark2-h text-outlineColor  ${size} ${
                    open ? "rounded-t-lg" : "rounded-lg"
                }  cursor-pointer flex flex-row justify-between items-center ${className}`}
            >
                {content}
                {open ? (
                    <MdKeyboardArrowUp size={24} />
                ) : (
                    <MdKeyboardArrowDown size={24} />
                )}
            </button>

            {open ? <div>{menu}</div> : null}
        </div>
    );
}
