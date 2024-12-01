import React from "react";
import StoryLabel from "./StoryLabel";
import DarkLabel from "./MiscLabel";
import Button from "./Button";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import MiscLabel from "./MiscLabel";
import { CiShare1 } from "react-icons/ci";
import { PiListPlusFill } from "react-icons/pi";
import { VscDebugContinue } from "react-icons/vsc";
export default function StoryCard({
    completed,
    title,
    genres,
    text,
    proposals,
    continues,
    likes,

    ...props
}) {
    return (
        <div
            {...props}
            className={
                "dark:bg-dark2 bg-light2 rounded-lg p-4 my-5 w-7/12 m-auto"
            }
        >
            <div className="flex mb-2">
                <StoryLabel done={true}></StoryLabel>
                <h3 className="font-medium text-2xl mb-0 ml-2">{title}</h3>
            </div>
            {genres.map((genre) => (
                <StoryLabel text={genre}></StoryLabel>
            ))}
            <p className="mx-1 my-4">{text.slice(0, 420)} ...</p>
            <div className="flex flex-row flex-wrap space-x-4   p-0">
                <MiscLabel className={"p-0"}>
                    <Button
                        className={"h-full dark:bg-dark2-h bg-light3-c"}
                        name="default-radio"
                    >
                        <BiSolidLike />
                    </Button>{" "}
                    <div className="p-2">{likes}</div>{" "}
                    <Button
                        className={"h-full dark:bg-dark2-h bg-light3-c "}
                        name="default-radio"
                    >
                        <BiSolidDislike />
                    </Button>
                </MiscLabel>
                <MiscLabel className={"px-3"}>
                    {proposals.lenght}12 ‎ <PiListPlusFill />
                </MiscLabel>
                <MiscLabel className={"px-3"}>
                    {continues.lenght}134 ‎ <VscDebugContinue />
                </MiscLabel>

                <MiscLabel className={"px-3"}>
                    Share ‎
                    <CiShare1 />
                </MiscLabel>
            </div>
        </div>
    );
}
