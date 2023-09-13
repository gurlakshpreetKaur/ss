"use client"

import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { Carousel } from "./Carousel";
import { Card, CardGalary } from "./PostCards";

interface CarouselParams {
    id: string,
    image: string,
    text: string,
    navLink?: string,
    textWhite: boolean
}

function HomeCarousel() {
    let [source, setSource] = useState<CarouselParams[]>([]);
    useEffect(() => {
        getDocs(collection(db, "carousel")).then((res) => {
            setSource(res.docs.map(i => ({ id: (i).id, ...(i.data()) } as CarouselParams)));
        });
    }, []);
    return (<Carousel name="home">
        {source.map((i, j) => <section key={j} className="w-full h-screen p-20 min-[550px]:pl-32 min-[720px]:pl-44 
    snap-always snap-start bg-cover bg-center flex justify-center flex-col max-[500px]:items-center items-start"
            style={{ backgroundImage: `url('${i.image}')` }}>
            <div className='text-center'>
                <p className="font-playfair text-center text-lg max-w-[200px]" style={{ color: i.textWhite ? "white" : "black" }}>{i.text}</p>
                {i.navLink && <button className="bg-gray-800 text-white px-5 py-3 rounded-full mt-2" onClick={() => window.open(i.navLink)}>Read More</button>}
            </div>
        </section>)}
    </Carousel>)
}

export function Home() {
    const [docsData, setDocsData] = useState<Card[]>([]);

    useEffect(() => {
        (async () => {
            let documents = await getDocs(collection(db, "posts"));
            let docsFormatted: Card[] = [];
            documents.docs.forEach(i => docsFormatted.push({ id: i.id, ...i.data() } as Card));
            setDocsData(docsFormatted);
        })().then(() => {
            // console.log("success");
        }).catch((e) => {
            // console.log(e, ":(");
        })
    }, []);

    return (<>
        <HomeCarousel />
        <CardGalary cards={docsData} />
    </>)
}