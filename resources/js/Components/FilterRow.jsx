import React, { useState } from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

export default function FilterRow() {
    const [sortOpen, setSortOpen] = useState(false);

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3">
                <div className="rounded dark:bg-dark1 bg-light1 flex flex-row items-center px-3 py-2 gap-3">
                    Filter by genre
                    <FaFilter className="w-3 h-3" />
                </div>
            </div>
            <div className="relative">
                <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="rounded dark:bg-dark1 bg-light1 flex flex-row items-center px-3 py-2 gap-3"
                >
                    Sort by
                    <FaSortAmountDown className="w-3 h-3" />
                </button>

                {sortOpen && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setSortOpen(false)}
                    ></div>
                )}

                {sortOpen && (
                    <div className="absolute right-0 w-52 rounded dark:bg-dark2 bg-light2 flex flex-col items-center overflow-hidden z-50">
                        <a
                            href="/stories?sort=abc"
                            className="shadow w-full text-left hover:dark:bg-dark2-h hover:bg-light2-h px-3 py-2"
                        >
                            Alphabetically
                        </a>
                        <a
                            href="/stories?sort=newest"
                            className="shadow w-full text-left hover:dark:bg-dark2-h hover:bg-light2-h px-3 py-2"
                        >
                            Newest
                        </a>
                        <a
                            href="/stories?sort=like"
                            className="shadow w-full text-left hover:dark:bg-dark2-h hover:bg-light2-h px-3 py-2"
                        >
                            Most liked
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
