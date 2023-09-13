"use client"

import { Card } from "@/app/(Components)/PostCards";
import { db } from "@/app/firebaseConfig";
import { updateDoc, doc, increment, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { CommentSecton } from "./CommentSection";
import { LikeButton } from "./LikeButton";
import { PostText } from "./PostText";

export function PostView({ id }: { id: string }) {
    let [docTitle, setDocTitle] = useState("");
    let [docText, setDocText] = useState("");
    let [docViews, setDocViews] = useState(0);
    let [docLikes, setDocLikes] = useState<string[]>([]);
    let [docComments, setDocComments] = useState<Card["comments"]>([]);
    let [docDate, setDocDate] = useState("");
    let [bgImage, setBgImage] = useState("");

    useEffect(() => {
        (async () => {
            await updateDoc(doc(db, "posts", id), { views: increment(1) });
        })().then(() => setDocViews(prev => prev + 1)).catch();
    }, []);

    useEffect(() => {
        (async () => {
            const docRef = doc(db, "posts", id);
            const document = await getDoc(docRef);

            if (!document.exists()) {
                setDocTitle("404 Error! This page doesn't exist!");
                setDocText("It seems that the page you are trying to access doesn't exist :(");
                return;
            }

            const docData: Card = document.data() as Card;
            setDocTitle(docData.title);
            setDocText(docData.text);
            setDocViews(docData.views);
            setDocDate(docData.datePostedDisplay);
            setDocLikes(docData.likedBy);
            setDocComments(docData.comments);
            setBgImage(docData.bgImage);
        })().then().catch();
    }, []);

    return <section className="pt-12">
        <div className="w-full h-[30vh] bg-cover bg-fixed" style={{ backgroundImage: `url('${bgImage}')` }}>

        </div>
        <div className="px-12 sm:px-28 md:px-40 lg:px-56 pt-12 pb-40 overflow-auto min-h-[calc(100vh-3rem)] relative bg-white">
            <h1 className="text-2xl font-playfair text-black">{docTitle}</h1>
            <p className="text-sm text-purple-800 my-2">POSTED ON {docDate.toLocaleUpperCase()} • <AiOutlineEye className="inline-block" />{docViews} • <AiOutlineComment className="inline-block" />{docComments.length} </p>
            <PostText text={docText} />
            <LikeButton docLikes={docLikes} setDocLikes={setDocLikes} id={id} />
        </div>

        <div className="w-full h-[30vh] bg-cyan-500 bg-cover bg-fixed" style={{ backgroundImage: `url('${bgImage})` }}>

        </div>

        <CommentSecton docComments={docComments} id={id} setDocComments={setDocComments} />
    </section>
}