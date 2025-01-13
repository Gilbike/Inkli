import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import DefaultCard from "./DefaultCard";
import Input from "./Input";
import Button from "./Button";

export default function MarkdownEditor() {
    const [markdownText, setMarkdownText] = useState("");

    const handleInputChange = (e) => {
        setMarkdownText(e.target.value);
    };

    return (
        <DefaultCard title={"Create a Story"} className="my-5">
            <Input
                className="mx-3 my-6 font-bold text-xl focus:outline-none border-0 shadow-none"
                placeholder="Story Title"
            />
            <div className="flex items-center space-x-3 mt-3">
                <Button>Add Genres</Button>
            </div>
            <textarea
                className={`w-full h-40 mt-3 p-2 rounded-lg dark:bg-dark2 bg-light2 
                            dark:text-white text-gray-800 focus:outline-none border-0 shadow-none`}
                value={markdownText}
                onChange={handleInputChange}
                placeholder="Write your story in Markdown..."
            />
            {markdownText.length > 0 && (
                <div className="">
                    <h3 className="font-bold text-xl m-3">
                        This is how your story will look like:
                    </h3>
                    <ReactMarkdown
                        className={`w-fullprose dark:prose-invert lg:prose-xl mt-5 p-3 rounded-lg dark:bg-dark3 bg-light3`}
                    >
                        {markdownText}
                    </ReactMarkdown>
                </div>
            )}
            <div className="flex justify-end mt-4">
                <Button big={true} className="m-3">
                    Post
                </Button>
            </div>
        </DefaultCard>
    );
}
