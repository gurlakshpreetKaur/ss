import { Metadata } from "next";
import { PostView } from "./PostView";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { Card } from "@/app/(Components)/PostCards";

export const metadata: Metadata = {
    title: 'CLA Article',
    description: 'This is a sample metadata description which will be changed later :D',
}

export default function PageOut({ params: { id } }: { params: { id: string } }) {
    return <PostView id={id} />;
}

export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
    const article = await getDoc(doc(db, "posts", id));

    const data = article.data() as Card;

    if (!article.exists()) return { title: "404 Error: Article Not Found", description: "This article does not exist, 404 not found." };
    return {
        title: data.title,
        description: data.text
    }
}