import React from "react";

export default function MiscLabel({ className, children, onclick, ...props }) {
    return (
        <button
            onClick={onclick}
            {...props}
            className={`items-center flex flex-row flex-wrap rounded-lg my-2 mx-1.5 dark:bg-darkBG bg-light3-h dark:hover:bg-dark1 hover:bg-light3  ${className}`}
        >
            {children}
        </button>
    );
}
