"use client"

import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { LoggingIn } from "./LoggingIn";
import { SigningUp } from "./SigningUp";

export function Login() {
    const [signingUp, setSigningUp] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (auth.currentUser) {
                window.open("/user", "_self");
                return;
            }
            setLoaded(true);
        }, 3000);
    }, []);

    return loaded ? <section className="min-h-screen bg-gradient-to-r from-cyan-500 to-purple-300 flex justify-center items-center text-center">
        <div className="bg-white py-10 px-10 rounded-lg w-[300px] @lg:bg-black inline-block">
            <h1 className="text-2xl font-playfair text-black mb-4">{signingUp ? "Sign Up" : "Log In"}</h1>
            {signingUp ? <SigningUp /> : <LoggingIn />}
            <button className="text-black text-sm m-1" onClick={() => setSigningUp(prev => !prev)}>{!signingUp ? "Sign Up Instead" : "Log In Instead"}</button>
        </div>
    </section> : <section className="h-screen bg-black pt-20 text-center flex align-center justify-center items-center">
        <div className="border-t-white border-l-white border-r-black border-b-black border-solid border-2 rounded-full h-[50px] w-[50px] animate-spin"></div>
    </section>;
}