import React from "react";

export default function DefaultCard({
    title,
    children,
    className,
    background = 1,
    ...props
}) {
    return (
        <div
            {...props}
            className={`dark:bg-dark${background} bg-light1 rounded-lg p-4 w-full ${className}`}
        >
            {title && <h3 className="font-medium text-2xl mb-2">{title}</h3>}
            {children}
        </div>
    );
}
