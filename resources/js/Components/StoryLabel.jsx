import React from "react";
import { Link } from "@inertiajs/react";

export default function StoryLabel({
    done = null,
    text,
    genre,
    className,
    ...props
}) {
    let label;
    if (done !== null) {
        if (done === true) {
            label = "dark:bg-lightP bg-lightP";
            text = "Completed";
        } else {
            label = "dark:bg-secondaryP bg-secondaryP";
            text = "Incomplete";
        }
        label += " text-sm cursor-default px-2 py-0 ";
        return (
            <button
                {...props}
                className={`  text-white  ${label} rounded-xl text-center mx-1 ${className}`}
            >
                {text}
            </button>
        );
    } else {
        return (
            <Link
                href={
                    // Ide be kell majd rakni, hogy az adott genrére rákeressen {text}
                    "/"
                }
            >
                <button
                    {...props}
                    className={` text-white dark:bg-darkP bg-darkP text-xs px-2 py-1.5 rounded-xl text-center mx-1 ${className}`}
                >
                    {text}
                </button>
            </Link>
        );
    }
}
