import Container from "@/Components/Container";
import Sidebar from "@/Components/Sidebar";
import Layout from "@/Layouts/Layout";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Show({ story, author, likes, dislikes, zen }) {
    const StoryLayout = ({ children }) => {
        if (zen) {
            return <Container>{children}</Container>;
        }
        return (
            <Layout title="Stories">
                <main className="flex-1 flex flex-row items-stretch">
                    <Sidebar />
                    {children}
                    <div className="w-2/12"></div>
                </main>
            </Layout>
        );
    };
    return (
        <StoryLayout>
            <div
                className={`flex flex-col gap-3 mt-3 mx-auto ${
                    !zen ? "w-4/12" : "lg:w-5/12"
                }`}
            >
                <div className="flex flex-col gap-1">
                    {/* TODO: IDE JÖN A GENRE */}
                    <h1 className="font-bold text-4xl mt-4">{story.title}</h1>
                    <p>
                        <em>by </em>
                        <a
                            className="font-medium text-lg"
                            href={route("user", { user: author.id })}
                        >
                            {author.name}
                        </a>
                    </p>
                    <p className="text-outlineColor text-sm">
                        The story was liked by {likes} people and disliked by{" "}
                        {dislikes}
                    </p>
                    {!zen ? (
                        <a
                            href={route("stories.show", {
                                story: story.id,
                                zen: "true",
                            })}
                            className="bg-lightP/70 dark:bg-darkP/70 p-1 rounded w-fit text-sm mt-3"
                        >
                            Enable reading mode
                        </a>
                    ) : (
                        <a
                            href={route("stories.show", {
                                story: story.id,
                            })}
                        >
                            Disable reading mode
                        </a>
                    )}
                </div>
                <ReactMarkdown
                    disallowedElements={["h4", "h5", "h6", "a"]}
                    className="w-full story-markdown"
                >
                    {story.content}
                </ReactMarkdown>
            </div>
        </StoryLayout>
    );
}
