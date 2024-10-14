import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function FaqBox({ question, answer }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="w-full rounded-lg mb-2 overflow-hidden">
            <p
                className={`font-medium text-2xl p-3 hover:bg-dark1-h cursor-pointer flex flex-row justify-between items-center ${
                    expanded ? "bg-dark1-c" : "bg-dark1"
                }`}
                onClick={() => setExpanded(!expanded)}
            >
                {question}
                {expanded ? (
                    <MdKeyboardArrowUp size={24} />
                ) : (
                    <MdKeyboardArrowDown size={24} />
                )}
            </p>
            {expanded && <p className="p-3 bg-dark1">{answer}</p>}
        </div>
    );
}
