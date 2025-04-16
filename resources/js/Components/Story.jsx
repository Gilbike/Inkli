import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Like from "./Like";

export default function Story({ id, title, summary, likeCount, genre }) {
    const [shared, setShared] = useState(false);

    const shareStory = () => {
        navigator.clipboard.writeText(route("stories.show", { story: id }));
        setShared(true);
    };

    //  figyeljük a shared változó változását,.
    useEffect(() => {
        let timer;
        if (shared) {
            timer = setTimeout(() => {
                setShared(false);
            }, 1500);
        }
        return () => clearTimeout(timer);
    }, [shared]);

    const markdownCharactersRegex = /\#|\*|\[|\]|\(|\)|\>|\-/g;

    return (
        <div className="p-4 rounded-lg dark:bg-dark1 bg-light1 flex flex-col gap-2">
            <a href={route("stories.show", { story: id })}>
                <div className="flex flex-row items-center gap-2">
                    <h2 className="font-medium text-2xl line-clamp-1">
                        {title}
                    </h2>
                    <a
                        href={route("genres.show", { genre: genre })}
                        className="rounded bg-lightP dark:bg-darkP px-2 text-white"
                    >
                        {genre.name}
                    </a>
                </div>
                <p className="font-[Playfair] line-clamp-2">
                    {summary.replaceAll(markdownCharactersRegex, "")}
                </p>
            </a>
            <div className="flex flex-row gap-2">
                <Like id={id} likeCount={likeCount} />

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
