import React from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { VscDebugContinue } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Story({
    completed,
    title,
    summary,
    likeCount,
    continues,
    proposals,
}) {
    return (
        <div className="p-4 rounded-lg bg-dark1 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <div
                    className={`${
                        completed ? "bg-lightP" : "bg-secondaryP"
                    } px-2 py-1 text-xs rounded`}
                >
                    {completed ? "Completed" : "Incomplete"}
                </div>
                <h2 className="font-medium text-2xl">{title}</h2>
            </div>
            <p className="font-[Playfair] line-clamp-2">{summary}</p>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 bg-dark2 items-center">
                    <div className="p-2 bg-dark3 rounded">
                        <IoMdThumbsUp className="w-4 h-4" />
                    </div>

                    <p className="text-xs">{likeCount}</p>

                    <div className="p-2 bg-dark3 rounded">
                        <IoMdThumbsDown className="w-4 h-4" />
                    </div>
                </div>

                <div className="p-2 bg-dark2 rounded flex flex-row items-center gap-2">
                    <HiOutlineDocumentPlus className="w-4 h-4" />
                    <p className="text-xs">{proposals}</p>
                </div>

                <div className="p-2 bg-dark2 rounded flex flex-row items-center gap-2">
                    <VscDebugContinue className="w-4 h-4" />
                    <p className="text-xs">{continues}</p>
                </div>
                <div className="p-2 bg-dark2 rounded flex flex-row items-center gap-2 px-3">
                    <p className="text-xs">Share</p>
                    <FaExternalLinkAlt className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}
