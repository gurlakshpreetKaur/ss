"use client"

import { useState } from "react";

export function Comment({ comment, username, date }: { comment: string, username: string, date: string }) {
    const [visible, setVisible] = useState(false);
    console.log(date, new Date(date));
    return (<div className="rounded-sm px-6 py-6 text-black">
        <span className="text-black font-playfair">{username}</span>
        <span className="mx-2 text-purple-800">•</span>
        <span className="text-purple-800 text-[10px]">{date.toLocaleUpperCase()}</span>
        <br />
        <span className="inline-block pl-6 text-black text-sm">{(visible || comment.length <= 100) ? comment : (comment.slice(0, 100) + "...")} {comment.length > 100 && <a className="cursor-pointer text-cyan-600" onClick={() => setVisible(prev => !prev)}>{visible ? "show less" : "show more"}</a>}</span>
    </div>)
}