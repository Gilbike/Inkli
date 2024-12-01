import React from "react";

export default function Button({
    children,
    big = null,
    click,
    className = "dark:bg-darkP bg-lightP",
    ...props
}) {
    let size = big ? "py-3 px-4" : "py-2 px-3";

    return (
        <button
            onClick={click}
            {...props}
            className={` text-white   hover:bg-lightH dark:hover:bg-darkH active:bg-lightA dark:active:bg-darkA  ${size} rounded-lg ${" "} ${className}`}
        >
            {children}
        </button>
    );
}
