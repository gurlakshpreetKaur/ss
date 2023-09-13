"use client"

import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getCurrentDateFormatted, add0IfNeeded } from "../(utils)/dateUtils";
import { auth, db } from "../firebaseConfig";

interface Message {
    email: string,
    title: string,
    text: string,
    date: string,
    time: string,
    timezone: number
}

export function ContactUs() {
    const [email, setEmail] = useState((auth.currentUser && auth.currentUser.email) ? auth.currentUser.email : "");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Send");

    useEffect(() => {
        console.log(auth, auth.currentUser);
        auth.onAuthStateChanged(() => {
            if (auth.currentUser && auth.currentUser.email) {
                setEmail(auth.currentUser.email);
                setDisabled(true);
            }
        });
    }, []);

    const handleMessageSend = async () => {
        if (email === "") return;
        if (subject.trim() === "") return;
        if (body.trim() === "") return;

        //add message to db
        setDisabled(true);

        try {
            const date = new Date();
            const message: Message = {
                email,
                title: subject,
                text: body,
                date: getCurrentDateFormatted(),
                time: `${add0IfNeeded(date.getHours())}:${add0IfNeeded(date.getMinutes())}:${add0IfNeeded(date.getSeconds())}`,
                timezone: date.getTimezoneOffset()
            }
            await addDoc(collection(db, "messages"), message);
            setButtonText("Sent!");

            setTimeout(() => {
                setSubject("");
                setBody("");
                setButtonText("Send");
                setDisabled(false);
            }, 2000);

        } catch (e) {
            setButtonText("Error While Sending :(");
            console.log(e);
            setTimeout(() => {
                setButtonText("Send");
                setDisabled(false);
            }, 2000);
        }
    }

    return <section className="bg-black text-center h-screen flex justify-center items-center flex-col text-white">
        <h1 className="font-playfair text-4xl mb-6">Drop a Message!</h1>

        <input type="email" value={email} onChange={e => setEmail(e.target.value.trim())}
            className="resize-none text-black w-4/5 max-w-[350px] rounded-t-md border-b-2 
        border-solid border-black px-4 py-2 outline-none font-playfair" placeholder="Enter your email..."
            readOnly={disabled} />

        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="resize-none text-black w-4/5 max-w-[350px] border-b-2 
        border-solid border-black px-4 py-2 outline-none font-playfair" placeholder="Enter the subject..." />
        <textarea value={body} onChange={e => setBody(e.target.value)} className="resize-none text-black w-4/5 max-w-[350px] mb-4 rounded-b-md px-4 py-2 outline-none h-1/4
        font-playfair" placeholder="Write the message..."></textarea>

        <button disabled={email === "" || subject.trim() === "" || body.trim() === ""} className="disabled:bg-gray-400
         disabled:text-gray-800 bg-white text-black hover:bg-cyan-500 hover:text-white rounded-sm 
         transition-all px-6 py-2 w-4/5 max-w-[300px]" onClick={handleMessageSend}>{buttonText}</button>
    </section>
}