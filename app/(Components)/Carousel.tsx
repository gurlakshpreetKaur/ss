"use client"

import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function Carousel({ name, children = [], styleNavs = true, height = "100vh" }: { name: string, styleNavs?: boolean, children?: JSX.Element[], height?: string }) {
    const [ID, setID] = useState(`carousel${name}${Math.random()}`.replaceAll(".", "-"));

    const HandleRightArrow = () => {
        let carousel = document.querySelector(`.${ID}`);
        console.log(carousel);
        if (!carousel) return;
        if (carousel.scrollLeft < (children.length - 1) * window.innerWidth) {
            carousel.scrollBy(document.querySelector(`.${ID}`)?.getBoundingClientRect().width ?? 0, 0);
        }
    }

    const HandleLeftArrow = () => {
        let carousel = document.querySelector(`.${ID}`);
        console.log(carousel);
        if (!carousel) return;
        if (carousel.scrollLeft > 0) {
            // carousel.scrollBy(-window.innerWidth, 0);
            carousel.scrollBy(-(document.querySelector(`.${ID}`)?.getBoundingClientRect().width ?? 0), 0);
        }
    }

    useEffect(() => {
        console.log("ID is", ID);
    }, [ID]);

    return <section id={ID} className={`${ID} w-full
     flex flex-wrap flex-col snap-x snap-mandatory overflow-hidden scroll-smooth`} style={{ height }} >
        {styleNavs ? <><button onClick={HandleLeftArrow} aria-controls={ID} aria-label={`left control for carousel ${name}`} className='absolute left-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2'><AiOutlineArrowLeft /></button>
            <button onClick={HandleRightArrow} aria-controls={ID} aria-label={`right control for carousel ${name}`} className='absolute right-5 top-1/2 text-lg bg-gray-800 p-4 rounded-full text-white -translate-y-1/2'><AiOutlineArrowRight /></button>
        </> : <>
            <button onClick={HandleLeftArrow} aria-controls={ID} aria-label={`left control for carousel ${name}`} className='absolute left-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2'><AiOutlineArrowLeft /></button>
            <button onClick={HandleRightArrow} aria-controls={ID} aria-label={`right control for carousel ${name}`} className='absolute right-5 top-1/2 text-lg p-4 rounded-full text-white -translate-y-1/2'><AiOutlineArrowRight /></button>
        </>}
        {children}
    </section >
}