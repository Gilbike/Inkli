import React from "react";

export default function Button({ children, big, long, click, className }) {
    let size = big ? "py-3 px-4" : "py-2 px-3";

    return (
        <button
            onClick={click}
            className={`bg-lightP dark:bg-darkP hover:bg-lightH dark:hover:bg-darkH active:bg-lightA dark:active:bg-darkA  ${size} rounded-lg ${className}`}
        >
            {children}
        </button>
    );
}
