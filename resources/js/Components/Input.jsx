import React from "react";

export default function Input({ svg, className, ...props }) {
    return (
        <>
            <div
                className={`flex py-0.5 px-2 rounded-lg bg-dark2 ${className}`}
            >
                <span className="p-1 flex items-center justify-center text-outlineColor">
                    {svg}
                </span>
                <input
                    {...props}
                    className="p-1 outline-none flex w-full border-none rounded-lg bg-transparent
                     placeholder-outlineColor text-light1"
                />
            </div>
        </>
    );
}
