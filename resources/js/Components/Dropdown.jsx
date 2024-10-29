import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Dropdown({ content, big, menu }) {
    let size = big ? "py-3 px-4" : "py-2 px-3";
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className={`bg-lightP dark:bg-darkP hover:bg-lightH dark:hover:bg-darkH active:bg-lightA dark:active:bg-darkA text-outlineColor  ${size} rounded-lg  cursor-pointer flex flex-row justify-between items-center `}
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
