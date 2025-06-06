import Container from "@/Components/Container";
import Layout from "@/Layouts/Layout";
import React from "react";
import ProfileCard from "@/Components/ProfileCard";
import Story from "@/Components/Story";
import { usePage } from "@inertiajs/react";
import DefaultCard from "@/Components/DefaultCard";

export default function Profile({ user, stories, badges, followed }) {
    const userData = user || usePage().props.auth.user;
    const localUser = userData.id === usePage().props.auth.user.id;

    const badgeNames = {
        stry: {
            brnz: "Storyteller Ł /img/book1.png",
            slvr: "Story Crafter Ł /img/book2.png",
            gld: "Narrative Virtuoso Ł /img/book3.png",
        },
        like: {
            brnz: "Supporter Ł /img/like1.png",
            slvr: "Community Cheerleader Ł /img/like2.png",
            gld: "Like Master Ł /img/like3.png",
        },
        join: {
            brnz: "Newcomer Ł /img/time1.png",
            slvr: "Community Pillar Ł /img/time2.png",
            gld: "Founding Star Ł /img/time3.png",
        },
        rgst: {
            brnz: "Milestone Member Ł /img/og3.png",
            slvr: "Founding Member Ł /img/og2.png",
            gld: "Pioneer Ł /img/og1.png",
        },
    };

    return (
        <Layout>
            <Container>
                <ProfileCard
                    id={userData.id}
                    pfp={userData.profilepicture}
                    name={userData.name}
                    admin={userData.admin == 1}
                    wrote={stories.length}
                    self={localUser}
                    followed={followed}
                />
                <DefaultCard className="mt-3">
                    <h1 className="font-bold text-[36px]">Badges</h1>
                    <div className="flex flex-row gap-1">
                        {badges["stry"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex items-center justify-between flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                <img
                                    className="rounded w-24"
                                    src={
                                        badgeNames.stry[badges["join"]].split(
                                            " Ł "
                                        )[1]
                                    }
                                />
                                <p>
                                    {
                                        badgeNames.stry[badges["join"]].split(
                                            " Ł "
                                        )[0]
                                    }
                                </p>
                            </div>
                        )}
                        {badges["like"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex items-center justify-between flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                <img
                                    className="rounded w-24"
                                    src={
                                        badgeNames.like[badges["join"]].split(
                                            " Ł "
                                        )[1]
                                    }
                                />
                                <p>
                                    {
                                        badgeNames.like[badges["join"]].split(
                                            " Ł "
                                        )[0]
                                    }
                                </p>
                            </div>
                        )}
                        {badges["join"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex items-center justify-between flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                <img
                                    className="rounded w-24"
                                    src={
                                        badgeNames.join[badges["join"]].split(
                                            " Ł "
                                        )[1]
                                    }
                                />
                                <p>
                                    {
                                        badgeNames.join[badges["join"]].split(
                                            " Ł "
                                        )[0]
                                    }
                                </p>
                            </div>
                        )}
                        {badges["rgst"] != null && (
                            <div className="bg-light2 dark:bg-dark2 rounded flex items-center justify-between flex-col gap-2 px-2 py-4 w-1/4 text-center">
                                <img
                                    className="rounded w-24"
                                    src={
                                        badgeNames.rgst[badges["join"]].split(
                                            " Ł "
                                        )[1]
                                    }
                                />
                                <p>
                                    {
                                        badgeNames.rgst[badges["join"]].split(
                                            " Ł "
                                        )[0]
                                    }
                                </p>
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
                            key={story.id}
                        ></Story>
                    ))}
                </div>
            </Container>
        </Layout>
    );
}
