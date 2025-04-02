import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import ProfileCard from "@/Components/ProfileCard";
import Story from "@/Components/Story";
import { usePage } from "@inertiajs/react";
import DefaultCard from "@/Components/DefaultCard";

export default function Profile({ user, stories, badges }) {
    const userData = user || usePage().props.auth.user;
    const localUser = userData.id === usePage().props.auth.user.id;

    const badgeNames = {
        stry: {
            brnz: "Storyteller",
            slvr: "Story Crafter",
            gld: "Narrative Virtuoso",
        },
        like: {
            brnz: "Supporter",
            slvr: "Community Cheerleader",
            gld: "Like Master",
        },
        join: {
            brnz: "Newcomer",
            slvr: "Community Pillar",
            gld: "Founding Star",
        },
        rgst: {
            brnz: "Milestone Member",
            slvr: "Founding Member",
            gld: "Pioneer",
        },
    };

    return (
        <Layout>
            <Container>
                <ProfileCard
                    pfp={userData.profilepicture}
                    name={userData.name}
                    wrote={stories.length}
                    self={localUser}
                />
                <DefaultCard className="mt-3">
                    <h1 className="font-bold text-[36px]">Badges</h1>
                    <div className="flex flex-row gap-1">
                        {badges["stry"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                {/* kep */}
                                <p>{badgeNames.stry[badges["stry"]]}</p>
                            </div>
                        )}
                        {badges["like"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                {/* kep */}
                                <p>{badgeNames.like[badges["like"]]}</p>
                            </div>
                        )}
                        {badges["join"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                {/* kep */}
                                <p>{badgeNames.join[badges["join"]]}</p>
                            </div>
                        )}
                        {badges["rgst"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                {/* kep */}
                                <p>{badgeNames.rgst[badges["rgst"]]}</p>
                            </div>
                        )}
                    </div>
                </DefaultCard>
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
