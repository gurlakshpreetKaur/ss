"use client"

import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

export function UserPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (!auth.currentUser) {
                window.open("/login", "_self");
                return;
            } else {
                setLoaded(true);
            }
        }, 3000);
    }, []);

    const handleLogout = () => {
        auth.signOut();
        window.open("/", "_self");
    }

    return <div>
        {loaded ? <section className="h-screen bg-white pt-20 text-center">
            <h1 className="text-2xl font-playfair text-black text-center mb-5">Account Settings</h1>
            <button className="bg-red-500 rounded-sm px-[15px] py-[5px]" onClick={handleLogout}>Log Out</button>
        </section> :
            <section className="h-screen bg-black pt-20 text-center flex align-center justify-center items-center">
                <div className="border-t-white border-l-white border-r-black border-b-black border-solid border-2 rounded-full h-[50px] w-[50px] animate-spin"></div>
            </section>}
    </div>
}