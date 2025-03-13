import React, { useEffect, useState } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Story({ id, title, summary, likeCount }) {
    const [shared, setShared] = useState(false);

    const shareStory = () => {
        navigator.clipboard.writeText(route("stories.show", { story: id }));
        setShared(true);
    };

    function handleLike(like) {
        if (like) {
            console.log("Liked");
        } else {
            console.log("Disliked");
        }
    }

    useEffect(() => {
        let timer;
        if (shared) {
            timer = setTimeout(() => {
                setShared(false);
            }, 1500);
        }

        return () => clearTimeout(timer);
    }, [shared]);

    return (
        <div className="p-4 rounded-lg dark:bg-dark1 bg-light1 flex flex-col gap-2">
            <a href={route("stories.show", { story: id })}>
                <h2 className="font-medium text-2xl line-clamp-1">{title}</h2>
                <p className="font-[Playfair] line-clamp-2">{summary}</p>
            </a>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-2 dark:bg-dark2 bg-light2 items-center">
                    <button
                        onClick={() => handleLike(true)}
                        className="p-2 dark:bg-dark3 bg-light3 rounded flex items-center"
                    >
                        <IoMdThumbsUp className="w-4 h-4" />
                    </button>
                    <p className="text-xs">{likeCount}</p>
                    <button
                        onClick={() => handleLike(false)}
                        className="p-2 dark:bg-dark3 bg-light3 rounded flex items-center"
                    >
                        <IoMdThumbsDown className="w-4 h-4" />
                    </button>
                </div>

                <button
                    onClick={shareStory}
                    className="p-2 dark:bg-dark2 bg-light2 rounded flex flex-row items-center gap-2 px-3"
                >
                    <p className="text-xs">Share</p>
                    <FaExternalLinkAlt className="w-4 h-4" />
                </button>

                {shared && (
                    <div className="rounded text-xs bg-lightH/40 flex items-center px-2 dark:bg-darkH text-stone-900 dark:text-neutral-300">
                        Link copied to clipboard
                    </div>
                )}
            </div>
        </div>
    );
}
