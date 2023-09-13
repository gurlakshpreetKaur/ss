import { Card } from "@/app/(Components)/PostCards";
import { auth, db } from "@/app/firebaseConfig";
import { updateDoc, doc, arrayRemove, arrayUnion } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export function LikeButton({ docLikes, id, setDocLikes }: { docLikes: string[], id: string, setDocLikes: Dispatch<SetStateAction<Card["likedBy"]>> }) {
    const handleLike = async () => {
        if (!auth.currentUser || (auth.currentUser.email === null)) {
            window.open("/login", "_self");
            return;
        }
        if (docLikes.includes(auth.currentUser.email)) {
            try {
                await updateDoc(doc(db, "users", auth.currentUser.email), { likedPosts: arrayRemove(id) });
                await updateDoc(doc(db, "posts", id), { likedBy: arrayRemove(auth.currentUser.email) });
                setDocLikes(prev => prev.filter(i => i !== auth.currentUser?.email));
            } catch (e) {
                // console.log(e);
            }
            return;
        }
        try {
            await updateDoc(doc(db, "users", auth.currentUser.email), { likedPosts: arrayUnion(id) });
            await updateDoc(doc(db, "posts", id), { likedBy: arrayUnion(auth.currentUser.email) });
            setDocLikes(prev => [...prev.filter(i => i !== auth.currentUser?.email), auth.currentUser!.email!]);
        } catch (e) {
            // console.log(e);
        }
    }

    const LikeElement = ({ onClick }: { onClick: () => void }) => {
        if (!auth.currentUser) return <AiOutlineLike className="inline-block" onClick={onClick} />;
        if (!auth.currentUser.email) return <AiOutlineLike className="inline-block" onClick={onClick} />;
        if (docLikes.includes(auth.currentUser.email)) return <AiFillLike className="inline-block" onClick={onClick} />;
        return <AiOutlineLike className="inline-block" onClick={onClick} />;
    }

    return <p className="text-cyan-500 text-right text-md cursor-pointer absolute bottom-20 
    right-12 xs:right-16 sm:right-28 md:right-40 lg:right-56">
        <LikeElement onClick={handleLike} />
        {docLikes.length}
    </p>;
}