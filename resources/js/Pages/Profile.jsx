import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";
import Badge from "@/Components/Badge";
import ProfileCard from "@/Components/ProfileCard";
import Story from "@/Components/Story";
import { usePage } from "@inertiajs/react";

export default function Profile({ user, stories }) {
    const userData = user || usePage().props.auth.user;

    return (
        <Layout>
            <Container>
                <ProfileCard
                    pfp={userData.profilepicture}
                    name={userData.name}
                    subm={0}
                    acc={0}
                    wrote={stories.length}
                />
                {/* <DefaultCard title={"Badges"} className="mt-2">
                    <div className="flex flex-wrap">
                        {badges.map(({ img, name }) => (
                            <Badge title={name} img={img}></Badge>
                        ))}
                    </div>
                </DefaultCard> */}
                <h1 className="font-bold text-[36px]">Stories</h1>
                <div className="flex flex-col gap-2 mb-3">
                    {stories.map((story) => (
                        <Story
                            id={story.id}
                            title={story.title}
                            summary={story.content}
                            likeCount={0} // TODO: Add to database
                        ></Story>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
