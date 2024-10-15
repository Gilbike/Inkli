import Button from "@/Components/Button";
import Container from "@/Components/Container";
import FaqBox from "@/Components/FaqBox";
import React from "react";

export default function Landing() {
    const faq = [
        {
            q: "What is the main purpose of the website?",
            a: "The main purpose of the website is to allow users to create and collaborate on stories. Users can write continuations of existing stories, vote on their favorite continuations, and help shape the narrative together.",
        },
        {
            q: "How does the voting process work?",
            a: "Once enough continuations are submitted for a story, users can vote on which one they prefer. The continuation with the most votes becomes part of the official story, and the process restarts for further contributions.",
        },
        {
            q: "Can anyone participate in creating stories?",
            a: "Yes, everyone is welcome to participate! Whether you're a seasoned writer or just starting, you can join in by adding your own continuations or voting on others’ ideas.",
        },
        {
            q: "What happens if multiple users submit similar continuations?",
            a: "Before publishing your continuation, always check to see if there are already similar submissions. If you find a continuation that closely matches yours, it's best to vote for that one instead of posting a duplicate. ",
        },
        {
            q: "Is there a limit to how many stories I can contribute to?",
            a: "There’s no limit to the number of stories you can contribute to! Feel free to explore various narratives and add your creative touch to as many stories as you like.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <div
                className={`bg-[url('img/dark-bg.jpg')] w-100 h-[85vh] bg-cover bg-center flex flex-col justify-between items-center p-5`}
            >
                <div></div>
                <div>
                    <h1 className="font-bold text-[36px] text-center leading-tight">
                        Inkli
                    </h1>
                    <h2 className="font-[Playfair] text-[40px] text-center leading-tight">
                        Be a part of the story!
                    </h2>
                </div>
                <Button content="Start using Inkli" big />
            </div>
            <h3 className="font-medium text-2xl m-5 text-center">
                Scroll down to find out more
            </h3>
            <Container>
                <h1 className="font-bold text-[36px]">FAQ</h1>
                {faq.map(({ q, a }) => (
                    <FaqBox question={q} answer={a} key={q} />
                ))}
                <div className="dark:bg-dark1 bg-light1 rounded-lg p-4 my-5">
                    <h3 className="font-medium text-2xl mb-2">
                        Interested? Join Now!
                    </h3>
                    <Button content="Get Started" />
                </div>
            </Container>
        </>
    );
}
