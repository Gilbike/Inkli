import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import Story from "@/Components/Story";

export default function MyStories({ stories }) {
    return (
        <Layout>
            <Container>
                <h1 className="font-bold text-[36px]">My Stories</h1>
                <div className="flex flex-col gap-2 mb-3">
                    {stories.map((story) => (
                        <Story
                            id={story.id}
                            title={story.title}
                            summary={story.content}
                            likeCount={story.likeCount}
                        ></Story>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
