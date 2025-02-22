import Button from "@/Components/Button";
import Container from "@/Components/Container";
import FaqBox from "@/Components/FaqBox";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Landing() {
    const faq = [
        {
            q: "What is Inkli?",
            a: "Inkli is a platform that combines social engagement with storytelling. Users can write and publish stories, follow their favorite writers, vote on stories",
        },
        {
            q: "How can I find stories I’ll enjoy?",
            a: "You can explore stories by genre, search for specific keywords, or browse trending and top-rated stories based on community votes. You can also follow your favorite writers to get notified when they publish new content.",
        },
        {
            q: "Can I upvote or downvote stories?",
            a: "Yes, everyone is welcome to participate! Whether you're a seasoned writer or just starting, you can join in by adding your own continuations or voting on others’ ideas.",
        },
        {
            q: "How do I follow a writer or genre?",
            a: "Simply click the Follow button on a writer’s profile or on a genre page to receive updates on new stories and discussions.",
        },
        {
            q: "Is there a mobile app?",
            a: "You can access Inkli through your browser on any device.",
        },
    ];

    return (
        <Layout>
            <div
                className={`dark:bg-[url('img/dark-bg.jpg')] bg-[url('img/light-bg.jpg')] w-100 h-[85vh] bg-cover bg-center flex flex-col justify-between items-center p-5`}
            >
                <div></div>
                <div>
                    <h1 className="text-light1 font-bold text-[36px] text-center leading-tight">
                        Inkli
                    </h1>
                    <h2 className="font-[Playfair] text-light1 text-[40px] text-center leading-tight">
                        Write. Read. Connect. Inspire.
                    </h2>
                </div>
                <Link href={route("register")}>
                    <Button big>Start using Inkli</Button>
                </Link>
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
                    <Link href={route("register")}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </Container>
        </Layout>
    );
}
