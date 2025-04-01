import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import ProfileCard from "@/Components/ProfileCard";
import Story from "@/Components/Story";
import { usePage } from "@inertiajs/react";

export default function Profile({ user, stories }) {
    const userData = user || usePage().props.auth.user;
    const localUser = userData.id === usePage().props.auth.user.id;

    return (
        <Layout>
            <Container>
                <ProfileCard
                    pfp={userData.profilepicture}
                    name={userData.name}
                    wrote={stories.length}
                    self={localUser}
                />
                <h1 className="font-bold text-[36px]">Stories</h1>
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
