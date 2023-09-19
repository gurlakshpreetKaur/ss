'use client'

import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

function NavItem({ children, onClick = () => { } }: { children: JSX.Element, onClick?: () => void }) {
    return <li role="listitem" className="decoration-transparent inline-block mx-[10px] transition-all border-[1.25px] border- border-transparent border-solid hover:border-b-white tracking-[1px] cursor-pointer" onClick={onClick}>
        {children}
    </li>
}

export function NavBar() {
    function condition() {
        let i = 0;
        console.log(i++);
        if (typeof window === "undefined") return "black";
        console.log(i++);
        if (window === undefined) return "black";
        console.log(i++);
        if (window.location.pathname === "/") {
            console.log(i++);
            if ((document.documentElement.scrollTop) < (window.innerHeight - 30)) return "transparent";
            console.log(i++);
            return "black";
        };
        if (window.location.pathname.includes("/post/")) {
            console.log(i++);
            if ((document.documentElement.scrollTop) < window.innerHeight) return "black";
            console.log(i++);
            return "black";
        };
        console.log(i++);
        return "black";
    }

    let [bg, setBg] = useState(condition());

    useEffect(() => {
        console.log("bg is", bg);
    }, [bg]);

    useEffect(() => {
        let onListen = (scroll: Event) => {
            console.log(bg);
            if (!window) return;
            setBg(condition());
        }
        let scrollListener = window.addEventListener("scroll", onListen);

        return (() => {
            window.removeEventListener("click", onListen);
        })
    }, []);

    return (<nav className={"z-10 w-full h-12 fixed text-center font-playfair flex flex-row justify-center items-center"}
        style={{ backgroundColor: bg, color: bg === "white" ? "black" : "white" }}>
        <ul role="list">
            <NavItem>
                <a href="/">Articles</a>
            </NavItem>
            <NavItem>
                <a href="/webstories">Webstories</a>
            </NavItem>
            <NavItem>
                <a href="/contact-us">Contact Us</a>
            </NavItem>
        </ul>
        <a href="/user" role="navigation" aria-label="my account" className="max-[400px]:hidden inline-block absolute right-[20px] top-1/2 -translate-y-1/2"><AiOutlineUser /></a>
    </nav>);
}