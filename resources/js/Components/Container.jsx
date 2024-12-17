import React from "react";

export default function Container({ children }) {
    return (
        <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto">{children}</div>
    );
}
