export function PostText({ text }: { text: string }) {
    return <p className="text-black inline-block my-4 whitespace-pre-line pb-6 font-playfair tracking-wide  leading-7">
        {text.split("\\n").map((item, idx) => (<span key={idx}>{item}<br /></span>))}</p>
}