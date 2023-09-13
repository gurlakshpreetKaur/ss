import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter, AiOutlineCopyrightCircle } from "react-icons/ai";

export function Footer() {
    return (<footer className='bg-black p-5 text-center [&>a]:mx-2 [&>a]:text-gray-300 [&>a]:inline-block'>
        <a href="https://instagram.com" aria-label="instagram"><AiOutlineInstagram className="hover:text-white" /></a>
        <a href="https://youtube.com" aria-label="youtube"><AiOutlineYoutube className="hover:text-red-500" /></a>
        <a href="https://twitter.com" aria-label="twitter"><AiOutlineTwitter className="hover:text-blue-400" /></a>
        <br />
        <br />
        <p className='inline-block text-gray-300 font-playfair'>
            <AiOutlineCopyrightCircle className="inline-block" /> 2023 CLA
        </p>
    </footer>);
}