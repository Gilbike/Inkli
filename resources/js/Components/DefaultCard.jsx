import React from "react";

export default function DefaultCard({ title, children }) {
    return (
        <div className="dark:bg-dark1 bg-light1 rounded-lg p-4 my-5 w-7/12 m-auto">
            <h3 className="font-medium text-2xl mb-2">{title}</h3>
            <p>{children}</p>
        </div>
    );
}
