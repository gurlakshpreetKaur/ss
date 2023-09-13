"use client"

import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Carousel } from "../(Components)/Carousel";
import { Grid } from "../(Components)/Grid";
import { db } from "../firebaseConfig";

interface WebstoriesInterface {
    slides: { image: string, text: string, color: string, align: string, size: string }[]
}

export function Webstories() {
    const [data, setData] = useState<WebstoriesInterface[]>();

    useEffect(() => {
        getDocs(collection(db, "webstories")).then((res) => {
            setData(res.docs.map(i => i.data() as WebstoriesInterface));
        });
    }, []);

    return <section className="webstories bg-black px-[12px] pb-12 pt-16">
        <Grid colRange={300} className="gap-[10px]">
            {data && data.map((i, j) => <div className="h-min rounded-md w-full relative" key={j}>
                <Carousel name={"webstories" + j + Math.random()} height="calc(100vh - 5rem)" styleNavs={false}>
                    {i.slides.map((i, key) => <section key={key} className="w-full h-full bg-cover py-10 px-20 text-center flex justify-center" style={{ backgroundImage: `url('${i.image}')`, alignItems: i.align }}>
                        <p className="font-playfair text-center text-white h-min" style={{ fontSize: i.size ?? "1rem" }}>{i.text.split("\\n").map((item, idx) => (<span key={idx}>{item}<br /></span>))}</p>
                    </section>)}
                </Carousel>
            </div>)}
        </Grid>
    </section>
}