import React from "react";
import DefaultCard from "./DefaultCard";
import Button from "./Button";
import { useForm } from "@inertiajs/react";

export default function ProfileCard({ id, name, pfp, wrote, self, followed }) {
    const { post } = useForm({});

    const followUser = () => {
        post(route("user.follow", { user: id }));
    };

    const unfollowUser = () => {
        post(route("user.unfollow", { user: id }));
    };

    return (
        <DefaultCard className="mt-2">
            <div className="flex flex-col md:flex-row">
                <img
                    className="rounded-lg w-36 h-36"
                    src={pfp ?? "/img/default-pfp.jpg"}
                    alt={name}
                />
                <div className="flex flex-col md:flex-row justify-between w-full m-2 lg:ml-7">
                    <div className="flex flex-col justify-between h-full">
                        <h1 className="block text-5xl font-bold">{name}</h1>
                        <p className="text-sm block">
                            <b>{wrote}</b> stories written <br />
                        </p>
                    </div>
                    {self ? (
                        <div className="flex flex-col w-28">
                            <a
                                className="bg-lightP rounded px-2 py-1 text-center"
                                href={route("profile.edit")}
                            >
                                Edit
                            </a>
                        </div>
                    ) : (
                        <div className="flex flex-col w-28">
                            {followed ? (
                                <form onSubmit={unfollowUser}>
                                    <Button>Unfollow</Button>
                                </form>
                            ) : (
                                <form onSubmit={followUser}>
                                    <Button>Follow</Button>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </DefaultCard>
    );
}
