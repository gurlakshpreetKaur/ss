"use client"

import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineEye, AiOutlineComment, AiFillLike } from "react-icons/ai";
import { Grid } from "./Grid";
import { auth } from "../firebaseConfig";

export interface Card {
    title: string,
    text: string,
    datePosted: number,
    datePostedDisplay: string,
    likedBy: string[],
    comments: { username: string, comment: string, date: string, dateMaths: number }[],
    views: number,
    id: string,
    bgImage: string,
    prefCol: string
}

function CardLikes({ likedBy, id, prefCol }: { likedBy: string[], id: string, prefCol: string }) {
    const LikeElement = ({ onClick = () => { } }: { onClick?: () => void }) => {
        if (!auth.currentUser) return <AiOutlineLike className="inline-block" onClick={onClick} />;
        if (!auth.currentUser.email) return <AiOutlineLike className="inline-block" onClick={onClick} />;
        if (!likedBy.includes(auth.currentUser.email)) return <AiOutlineLike className="inline-block" onClick={onClick} />;
        return <AiFillLike className="inline-block" onClick={onClick} style={{ color: prefCol }} />
    }

    return <span className="text-black cursor-text">
        <LikeElement />
        <span style={{ color: prefCol }} className='text-[10px]' > {likedBy.length}</span>
    </span>;
}

function Card({ title, text, datePosted, datePostedDisplay, likedBy, comments, views, id, bgImage, prefCol }: Card) {
    return <div className="rounded-md pt-[30px] pb-[60px] px-[30px] bg-opacity-80  
    hover:bg-opacity-50 transition-all hover:rounded-lg cursor-pointer overflow: none relative"
        onClick={() => window.open("/post/" + id)}
        style={{ backgroundImage: `url('${bgImage}')` }}>

        <span className="text-[7px] text-slate-600 m-0 p-0" style={{ color: prefCol }}>POSTED ON {datePostedDisplay.toUpperCase()}</span>
        <h2 className="text-lg tracking-[0.5px] transition-all font-playfair font-medium m-0" style={{ color: prefCol }}>{title}</h2>
        <div className="w-full h-[0.75px] bg-transparent mb-2 cursor-pointer" style={{ color: prefCol }}></div>
        <p className="text-xs transition-all font-a min-h-10 help max-w-full" style={{ color: prefCol }}>{text.substring(0, 94).trim()}...</p>
        <span className="w-full flex flex-row justify-around absolute bottom-[30px] left-0 right-0 px-2">
            <span style={{ color: prefCol }}><AiOutlineEye className="cursor-text inline-block" /> <span className='text-[10px]'>{views}</span></span>
            <CardLikes likedBy={likedBy} id={id} prefCol={prefCol} />
            <span style={{ color: prefCol }}><AiOutlineComment className="inline-block" /> <span className='text-[10px]'>{comments.length}</span></span>
        </span>
    </div>
}

export function CardGalary({ cards }: { cards: Card[] }) {
    const [sortingAlgo, setSortingAlgo] = useState(0);
    const [colRange, setColRange] = useState(((typeof window !== "undefined") ? window.innerWidth : 0) > 500 ? 290 : 200);

    useEffect(() => {
        const update = () => setColRange(window.innerWidth > 500 ? 290 : 200);
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [])

    const sortingAlgos = [
        (i: Card, j: Card) => i.datePosted - j.datePosted,
        (i: Card, j: Card) => j.likedBy.length - i.likedBy.length,
        (i: Card, j: Card) => j.comments.length - j.comments.length
    ]

    function changeSortingAlgo(to: number, by: HTMLButtonElement) {
        document.querySelectorAll(".sorting-btn").forEach((e) => {
            e.classList.remove("text-purple-500");
            e.classList.add("text-black");
        });
        console.log(by);
        by.classList.add("text-purple-500");
        setSortingAlgo(to);
    }

    return (
        <section className="px-10 py-12 min-h-screen bg-white">
            <span className="[&>*]:p-4 [&>*]:text-[0.75rem] mb-3 inline-block">
                <button className='hover:text-purple-500 transition-all sorting-btn text-black' onClick={(e) => { changeSortingAlgo(0, e.currentTarget); }}>NEWEST</button>
                <button className='hover:text-purple-500 transition-all sorting-btn text-black' onClick={(e) => changeSortingAlgo(1, e.currentTarget)}>MOST LIKED</button>
                <button className='hover:text-purple-500 transition-all sorting-btn text-black' onClick={(e) => changeSortingAlgo(2, e.currentTarget)}>MOST VIEWED</button>
            </span>
            <Grid className="gap-[10px] m-0" colRange={colRange}>
                {cards.sort(sortingAlgos[sortingAlgo]).map(card => <Card {...(card as Card)} key={card.title} />)}
            </Grid>
        </section>);

}