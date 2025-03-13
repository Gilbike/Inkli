import React from "react";
import DefaultCard from "./DefaultCard";
import Button from "./Button";

export default function ProfileCard({ name, pfp, wrote, subm, acc }) {
    return (
        <DefaultCard className="mt-2">
            <div className="flex">
                <img
                    className="rounded-lg w-36 h-36"
                    src={pfp ?? "/img/default-pfp.jpg"}
                    alt={name}
                />
                <div className="flex flex-col md:flex-row justify-between w-full m-2 ml-7">
                    <div className="flex flex-col justify-between h-full">
                        <h1 className="block text-5xl font-bold">{name}</h1>
                        <p className="text-sm block">
                            <b>{wrote}</b> stories written <br />
                            <b>{subm}</b> continues submitted <br />
                            <b>{acc}</b> continues accepted <br />
                        </p>
                    </div>
                    <div className="flex flex-col w-28">
                        <Button>Follow</Button>
                    </div>
                </div>
            </div>
        </DefaultCard>
    );
}
