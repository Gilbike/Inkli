import React from "react";

export default function MiscLabel({ className, children, onclick, ...props }) {
    return (
        <button
            onClick={onclick}
            {...props}
            className={`items-center flex flex-row flex-wrap rounded-lg my-2 mx-1.5 dark:bg-darkBG bg-light2 dark:hover:bg-dark1 hover:bg-light2-h  ${className}`}
        >
            {children}
        </button>
    );
}
