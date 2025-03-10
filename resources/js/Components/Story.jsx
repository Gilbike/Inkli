import React from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Story({ id, title, summary, likeCount }) {
    return (
        <div className="p-4 rounded-lg dark:bg-dark1 bg-light1 flex flex-col gap-2">
            {" "}
            <a href={route("stories.show", { story: id })}>
                <h2 className="font-medium text-2xl line-clamp-1">{title}</h2>
                <p className="font-[Playfair] line-clamp-2">{summary}</p>
            </a>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 dark:bg-dark2 bg-light2 items-center">
                    <label className="p-2 dark:bg-dark3 bg-light3 rounded flex items-center">
                        <input
                            type="radio"
                            name="vote"
                            value="up"
                            className="hidden"
                        />
                        <IoMdThumbsUp className="w-4 h-4" />
                    </label>
                    <p className="text-xs">{likeCount}</p>
                    <label className="p-2 dark:bg-dark3 bg-light3 rounded flex items-center">
                        <input
                            type="radio"
                            name="vote"
                            value="down"
                            className="hidden"
                        />
                        <IoMdThumbsDown className="w-4 h-4" />
                    </label>
                </div>

                <button className="p-2 dark:bg-dark2 bg-light2 rounded flex flex-row items-center gap-2 px-3">
                    <p className="text-xs">Share</p>
                    <FaExternalLinkAlt className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
