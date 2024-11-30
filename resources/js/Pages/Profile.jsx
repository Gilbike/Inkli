import Button from "@/Components/Button";
import Container from "@/Components/Container";
import FaqBox from "@/Components/FaqBox";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import React from "react";
import DefaultCard from "@/Components/DefaultCard";
import StoryCard from "@/Components/StoryCard";
import Badge from "@/Components/Badge";
import ProfileCard from "@/Components/ProfileCard";

export default function Profile() {
    let badges = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "fortnite",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "novice writer",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "novice writer",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yfKRUDbgrZ3QWUbdinxg9VJFnIWNLoZcoA&s",
            name: "battle royale",
        },
    ];

    return (
        <Layout>
            {/* <Container>  ez ha keskenyebb weboldalt szeretnénk kell*/}

            <ProfileCard
                pfp={
                    "https://files.idyllic.app/files/static/244183?width=256&optimizer=image"
                }
                name={"Tritya"}
                subm={"40"}
                acc={"532"}
                wrote={"ml34"}
            >
                {" "}
            </ProfileCard>
            <DefaultCard title={"Badges"}>
                <div className="flex flex-wrap">
                    {badges.map(({ img, name }) => (
                        <Badge title={name} img={img}></Badge>
                    ))}
                </div>
            </DefaultCard>
            <Container>
                <h1 className="font-bold text-[36px]">Stories</h1>
            </Container>
            <StoryCard></StoryCard>
            {/* </Container> */}
        </Layout>
    );
}
