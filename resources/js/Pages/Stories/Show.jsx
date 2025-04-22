import Container from "@/Components/Container";
import Like from "@/Components/Like";
import Sidebar from "@/Components/Sidebar";
import Layout from "@/Layouts/Layout";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function Show({ story, author, likes, dislikes, zen }) {
    const isUserAdmin = usePage().props.auth.user.admin == 1;

    const { post } = useForm({});

    const toggleHighlight = () => {
        post(route("stories.highlight", { story: story.id }));
    };

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
                    {/* <p className="text-outlineColor text-sm">
                        The story was liked by {likes} people and disliked by{" "}
                        {dislikes}
                    </p> */}
                    <div className="flex flex-row gap-2 items-center">
                        <Like id={story.id} likeCount={story.likeCount} />
                        {!zen ? (
                            <a
                                href={route("stories.show", {
                                    story: story.id,
                                    zen: "true",
                                })}
                                className="block bg-lightP dark:bg-darkP text-white px-2 py-1 rounded w-fit text-sm"
                            >
                                Enable reading mode
                            </a>
                        ) : (
                            <a
                                href={route("stories.show", {
                                    story: story.id,
                                })}
                                className="block"
                            >
                                Disable reading mode
                            </a>
                        )}
                        {isUserAdmin ? (
                            !story.highlighted ? (
                                <form
                                    onSubmit={toggleHighlight}
                                    className="block bg-lightP dark:bg-darkP text-white px-2 py-1 rounded w-fit text-sm"
                                >
                                    <button>Highlight story</button>
                                </form>
                            ) : (
                                <form
                                    onSubmit={toggleHighlight}
                                    className="block"
                                >
                                    <button>Remove story highlight</button>
                                </form>
                            )
                        ) : null}
                    </div>
                </div>
                <hr className="border-outlineColor" />
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
