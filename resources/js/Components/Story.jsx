import React, { useEffect, useState } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Story({ id, title, summary, likeCount }) {
    const [shared, setShared] = useState(false);
    const [rated, setRated] = useState(null);
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

    const shareStory = () => {
        navigator.clipboard.writeText(route("stories.show", { story: id }));
        setShared(true);
    };

    // A like/dislike állapotának lekérdezése.
    useEffect(() => {
        fetch(route("likes.getLike", { id }))
            .then((response) => response.json())
            .then((data) => {
                if (data.like == null) {
                    return;
                }
                setRated(data.like.is_liked === 1);
            })
            .catch((error) => console.error(error));
    }, []);

    // A like/dislike beküldése a controllernek.
    function handleLike(like) {
        if (rated) return;
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content");

        fetch(
            route(like ? "stories.like" : "stories.dislike", {
                story: id /* ide be kéne adni a like változót és akkor nem kell az egy soros if */,
            }),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ like }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setCurrentLikeCount(likeCount + data.change);
                    setRated(data.change == 1);
                } else {
                    console.error(data.message);
                }
            })
            .catch((error) => console.error(error));
    }

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

    return (
        <div className="p-4 rounded-lg dark:bg-dark1 bg-light1 flex flex-col gap-2">
            <a href={route("stories.show", { story: id })}>
                <h2 className="font-medium text-2xl line-clamp-1">{title}</h2>
                <p className="font-[Playfair] line-clamp-2">{summary}</p>
            </a>
            <div className="flex flex-row gap-2">
                <div
                    className={`flex flex-row gap-2 dark:bg-dark2 bg-light2 items-center`}
                >
                    <button
                        disabled={rated !== null}
                        onClick={() => handleLike(true)}
                        className={`p-2 ${
                            rated !== false && rated !== null
                                ? " bg-lightP text-light3"
                                : "dark:bg-dark3 bg-light3"
                        } rounded flex items-center `}
                    >
                        <IoMdThumbsUp className="w-4 h-4" />
                    </button>
                    <p
                        className={`text-xs ${
                            rated !== null ? "font-bold" : ""
                        } `}
                    >
                        {currentLikeCount}
                    </p>
                    <button
                        disabled={rated !== null}
                        onClick={() => handleLike(false)}
                        className={`p-2 ${
                            rated !== true && rated !== null
                                ? "bg-darkP  text-light3"
                                : "dark:bg-dark3 bg-light3"
                        } rounded flex items-center`}
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
