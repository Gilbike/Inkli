import React from "react";

export default function Input({ svg, text }) {
    return (
        <>
            <div className="flex py-0.5 px-3 rounded-lg bg-dark2">
                <span className="flex fill-outlineColor">{svg}</span>
                <input
                    type="email"
                    placeholder={text}
                    className="flex w-full border-none rounded-lg bg-transparent placeholder-outlineColor text-light1"
                />
            </div>
        </>
    );
}
