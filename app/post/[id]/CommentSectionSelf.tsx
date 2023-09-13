import { Card } from "@/app/(Components)/PostCards";
import { getCurrentDateFormatted, getCurrentFullDateMaths } from "@/app/(utils)/dateUtils";
import { auth, db } from "@/app/firebaseConfig";
import User from "../../(utils)/User";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Dispatch, SetStateAction, useState } from "react";

export function CommentSectionSelf({ id, setDocComments }: { id: string, setDocComments: Dispatch<SetStateAction<Card["comments"]>> }) {
    const [comment, setComment] = useState("");

    const sendMessage = async () => {
        if (!auth.currentUser || !auth.currentUser.email) {
            localStorage.setItem("loginredirect", window.location.href);
            window.open("/login", "_self");
            return;
        }

        try {
            let username = auth.currentUser.displayName ?? auth.currentUser.email;

            const addingCommentToPost: Card["comments"][0] = {
                username,
                comment,
                date: getCurrentDateFormatted(),
                dateMaths: getCurrentFullDateMaths()
            };
            await updateDoc(doc(db, "posts", id), { comments: arrayUnion(addingCommentToPost) });

            setDocComments(prev => [...prev, addingCommentToPost]);
            setComment("");
        } catch (e) {
            // console.log(e);
        }
    };

    return <div className="rounded-md px-6 py-6 mb-4 text-black text-right flex" style={{ backgroundColor: comment.length === 0 ? "transparent" : "#e4e4e4" }}>
        <textarea placeholder="Comment your thoughts..."
            className="resize-none w-full inline-block outline-none pl-6 font-playfair mr-1 bg-transparent"
            value={comment} rows={3} onChange={(e) => setComment(e.target.value.slice(0, 300))}></textarea>
        <br />
        <button className="disabled:text-gray-500 disabled:bg-gray-200 bg-white hover:bg-black hover:text-white text-black rounded-sm py-[5px] px-[10px] self-end transition-all" disabled={comment.trim() === ""} onClick={sendMessage}>Send!</button>
    </div>
}