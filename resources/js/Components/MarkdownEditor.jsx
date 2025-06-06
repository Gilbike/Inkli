import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DefaultCard from "./DefaultCard";
import Button from "./Button";
import { useForm } from "@inertiajs/react";
import FormInput from "./FormInput";

export default function MarkdownEditor({ genres }) {
    const [title, setTitle] = useState("");
    const [markdownText, setMarkdownText] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedGenre, setSelectedGenre] = useState();
    const [showDropdown, setShowDropdown] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
        genre: -1,
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
        setSelectedGenre(genre);
        setData("genre", genre.id);
        setShowDropdown(false);
    };

    const handleGenreRemove = () => {
        setSelectedGenre(null);
        setData("genre", -1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (markdownText.length < 200) {
            setErrorMessage("The story must be at least 200 characters long.");
            return;
        }

        setErrorMessage("");
        post(route("stories.store"), {
            onSuccess: () => {
                setSuccessMessage("Story posted successfully!");
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
                {errorMessage && (
                    <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
                        {errorMessage}
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
                        Add Genre
                    </Button>
                    {selectedGenre != null && (
                        <Button
                            key={selectedGenre.id}
                            type="button"
                            className="bg-blue-500 text-white px-3 py-1 rounded-full"
                            onClick={() => handleGenreRemove()}
                        >
                            {selectedGenre.name} &times;
                        </Button>
                    )}
                </div>
                {showDropdown && (
                    <div className="relative">
                        <ul className="absolute bg-light2 dark:bg-dark2 rounded shadow-md mt-2 w-48 overflow-hidden">
                            {genres.map((genre) => (
                                <li
                                    key={genre.id}
                                    className="px-4 py-2 hover:bg-light2-h hover:dark:bg-dark2-h cursor-pointer"
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
                <a
                    className="text-xs underline text-outlineColor"
                    href="/markdown"
                >
                    What is markdown?
                </a>
                <div className="text-sm text-gray-500 mt-1 mx-3">
                    {markdownText.length}/200 characters (minimum)
                </div>
                {markdownText.length > 0 && (
                    <div>
                        <h3 className="font-bold text-xl m-3">
                            This is how your story will look like:
                        </h3>
                        <ReactMarkdown
                            disallowedElements={["h4", "h5", "h6", "a"]}
                            className="w-full story-markdown mt-5 p-3 rounded-lg dark:bg-dark3 bg-light3"
                        >
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
