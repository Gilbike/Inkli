import React from "react";

export default function Badge({ img, title }) {
    return (
        <div class="w-20 text-center">
            <div className="p-2">
                <img className="rounded-lg" src={img} alt={title} />
            </div>
            <p className="text-xs">{title}</p>
        </div>
    );
}
