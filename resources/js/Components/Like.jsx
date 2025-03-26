import React, { useState, useEffect } from "react";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

export default function Like({ id, likeCount }) {
    const [rated, setRated] = useState(null);
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

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

    return (
        <div
            className={`flex flex-row gap-2 dark:bg-dark2 bg-light2 items-center w-fit rounded`}
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
            <p className={`text-xs ${rated !== null ? "font-bold" : ""} `}>
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
    );
}
