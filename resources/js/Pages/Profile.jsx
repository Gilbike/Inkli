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
import Story from "@/Components/Story";

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
    let userStories = [
        {
            completed: true,
            title: "Sigma boy storiy",
            genres: ["jo", "kaland"],
            text: `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
`,
            proposals: ["PROPID41412", "PROPID432112", "PROPID5414"],
            continues: ["CONTID41412", "CONTID4143412", "CONTID651"],
            likes: 421,
        },
        {
            completed: false,
            title: "Adventure in the jungle",
            genres: ["akció", "kaland", "thriller", "dráma"],
            text: `In the deep jungle, secrets are hidden...`,
            proposals: [
                "PROPID21234",
                "PROPID54321",
                "PROPID7654",
                "PROPID55341",
                "PROPID9087",
                "PROPID1245",
                "PROPID3241",
                "PROPID5721",
                "PROPID6675",
                "PROPID1890",
                "PROPID7812",
                "PROPID6243",
                "PROPID9392",
                "PROPID3712",
                "PROPID8265",
                "PROPID2305",
                "PROPID4599",
                "PROPID8824",
                "PROPID3781",
                "PROPID6390",
                "PROPID3256",
                "PROPID7481",
                "PROPID1465",
                "PROPID8241",
                "PROPID5790",
            ],
            continues: [
                "CONTID9087",
                "CONTID4932",
                "CONTID6741",
                "CONTID9897",
                "CONTID2181",
                "CONTID5622",
                "CONTID1719",
                "CONTID4610",
                "CONTID5314",
                "CONTID8932",
                "CONTID5260",
                "CONTID9342",
                "CONTID2299",
                "CONTID3421",
                "CONTID8596",
                "CONTID5421",
                "CONTID6784",
                "CONTID3722",
                "CONTID5013",
                "CONTID8712",
                "CONTID2691",
                "CONTID4132",
                "CONTID5863",
                "CONTID9114",
                "CONTID7196",
                "CONTID8623",
                "CONTID5048",
                "CONTID3355",
                "CONTID3327",
                "CONTID7035",
                "CONTID1711",
                "CONTID2984",
                "CONTID6550",
                "CONTID5632",
                "CONTID4187",
                "CONTID9265",
                "CONTID1155",
                "CONTID4912",
                "CONTID7241",
                "CONTID6210",
                "CONTID3201",
                "CONTID2872",
                "CONTID6937",
                "CONTID7641",
                "CONTID2082",
                "CONTID3725",
                "CONTID9942",
                "CONTID8812",
                "CONTID1589",
                "CONTID5869",
                "CONTID6194",
                "CONTID7052",
                "CONTID8746",
                "CONTID1044",
                "CONTID1834",
                "CONTID3378",
                "CONTID5670",
                "CONTID8015",
                "CONTID6304",
                "CONTID7493",
                "CONTID3964",
                "CONTID7413",
                "CONTID6812",
                "CONTID8592",
                "CONTID7010",
            ],
            likes: 187,
        },
        {
            completed: false,
            title: "The Last Stand",
            genres: ["háború", "dráma", "akció", "sci-fi"],
            text: `The final battle rages on the frontlines...`,
            proposals: [
                "PROPID12345",
                "PROPID67890",
                "PROPID112233",
                "PROPID2435",
                "PROPID8653",
                "PROPID9832",
                "PROPID3235",
                "PROPID2321",
                "PROPID4410",
                "PROPID6587",
                "PROPID9987",
                "PROPID2332",
                "PROPID4333",
                "PROPID5532",
                "PROPID9867",
                "PROPID1166",
                "PROPID7745",
                "PROPID8842",
                "PROPID6711",
                "PROPID2339",
                "PROPID5543",
                "PROPID8976",
                "PROPID2121",
                "PROPID1337",
                "PROPID4578",
            ],
            continues: [
                "CONTID7654",
                "CONTID4321",
                "CONTID2211",
                "CONTID1337",
                "CONTID4542",
                "CONTID2132",
                "CONTID3322",
                "CONTID7412",
                "CONTID8255",
                "CONTID5362",
                "CONTID9183",
                "CONTID2212",
                "CONTID5871",
                "CONTID4735",
                "CONTID2991",
                "CONTID5117",
                "CONTID1938",
                "CONTID6622",
                "CONTID3520",
                "CONTID7845",
                "CONTID4721",
                "CONTID8529",
                "CONTID9056",
                "CONTID1213",
                "CONTID5684",
                "CONTID3264",
                "CONTID7156",
                "CONTID8267",
                "CONTID5592",
                "CONTID7043",
                "CONTID9034",
                "CONTID4411",
                "CONTID1043",
                "CONTID2019",
                "CONTID6574",
                "CONTID2365",
                "CONTID3885",
                "CONTID4593",
                "CONTID7024",
                "CONTID2570",
                "CONTID5621",
                "CONTID8234",
                "CONTID1783",
                "CONTID2117",
                "CONTID7524",
            ],
            likes: 312,
        },
    ];
    return (
        <Layout>
            {/* <Container> */}
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
                <div className="flex flex-col gap-2">
                    {userStories.map(
                        ({
                            completed,
                            title,
                            text,
                            genres,
                            proposals,
                            continues,
                            likes,
                        }) => (
                            <Story
                                title={title}
                                completed={completed}
                                summary={text}
                                proposals={proposals.length}
                                continues={continues.length}
                                likeCount={likes}
                            ></Story>
                        )
                    )}
                </div>
            </Container>
        </Layout>
    );
}
