import React from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

export default function FilterRow() {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
                <div className="rounded dark:bg-dark1 bg-light1 flex flex-row items-center px-3 py-2 gap-3">
                    Filter by genre
                    <FaFilter className="w-3 h-3" />
                </div>
            </div>
            <div className="rounded dark:bg-dark1 bg-light1 flex flex-row items-center px-3 py-2 gap-3">
                Sort by
                <FaSortAmountDown className="w-3 h-3" />
            </div>
        </div>
    );
}
