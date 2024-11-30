import React from "react";

export default function DefaultCard({ title, children, className, ...props }) {
    return (
        <div
            {...props}
            className={
                "dark:bg-dark2 bg-light2 rounded-lg p-4 my-5 w-7/12 m-auto"
            }
        >
            <h3 className="font-medium text-2xl mb-2">{title}</h3>
            {children}
        </div>
    );
}
