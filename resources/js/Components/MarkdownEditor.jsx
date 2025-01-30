import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DefaultCard from "./DefaultCard";
import Button from "./Button";
import { useForm } from "@inertiajs/react";
import FormInput from "./FormInput";
import axios from "axios";

export default function MarkdownEditor() {
    const [title, setTitle] = useState("");
    const [markdownText, setMarkdownText] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        genres: [],
    });

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setData("title", e.target.value);
    };

    const handleMarkdownChange = (e) => {
        setMarkdownText(e.target.value);
        setData("content", e.target.value);
    };

    const handleGenreSelect = (genre) => {
        if (!selectedGenres.includes(genre)) {
            const updatedGenres = [...selectedGenres, genre];
            setSelectedGenres(updatedGenres);
            setData(
                "genres",
                updatedGenres.map((g) => g.id)
            );
        }
        setShowDropdown(false);
    };

    const handleGenreRemove = (genre) => {
        const updatedGenres = selectedGenres.filter((g) => g.id !== genre.id);
        setSelectedGenres(updatedGenres);
        setData(
            "genres",
            updatedGenres.map((g) => g.id)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("stories.store"), {
            onSuccess: () => {
                setSuccessMessage("A történet sikeresen létrehozva!");
                reset();
                setTitle("");
                setMarkdownText("");
                setSelectedGenres([]);
            },
        });
    };

    return (
        <DefaultCard title={"Create a Story"} className="my-5">
            <form onSubmit={handleSubmit}>
                {successMessage && (
                    <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
                        {successMessage}
                    </div>
                )}
                <FormInput
                    className="mx-3 my-6 font-bold text-xl focus:outline-none border-0 shadow-none"
                    placeholder="Story Title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
                <div className="flex items-center space-x-3 mt-3">
                    <Button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Add Genres
                    </Button>
                    {selectedGenres.map((genre) => (
                        <Button
                            key={genre.id}
                            type="button"
                            className="bg-blue-500 text-white px-3 py-1 rounded-full"
                            onClick={() => handleGenreRemove(genre)}
                        >
                            {genre.name} &times;
                        </Button>
                    ))}
                </div>
                {showDropdown && (
                    <div className="relative">
                        <ul className="absolute bg-white border rounded shadow-md mt-2 w-48">
                            {genres.map((genre) => (
                                <li
                                    key={genre.id}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleGenreSelect(genre)}
                                >
                                    {genre.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <textarea
                    className="w-full h-40 mt-3 p-2 rounded-lg dark:bg-dark2 bg-light2 dark:text-white text-gray-800 focus:outline-none border-0 shadow-none"
                    value={markdownText}
                    onChange={handleMarkdownChange}
                    placeholder="Write your story in Markdown..."
                    required
                />
                {markdownText.length > 0 && (
                    <div>
                        <h3 className="font-bold text-xl m-3">
                            This is how your story will look like:
                        </h3>
                        <ReactMarkdown className="w-full prose dark:prose-invert lg:prose-xl mt-5 p-3 rounded-lg dark:bg-dark3 bg-light3">
                            {markdownText}
                        </ReactMarkdown>
                    </div>
                )}
                <div className="flex justify-end mt-4">
                    <Button
                        big={true}
                        className="m-3"
                        type="submit"
                        disabled={processing}
                    >
                        Post
                    </Button>
                </div>
            </form>
        </DefaultCard>
    );
}
