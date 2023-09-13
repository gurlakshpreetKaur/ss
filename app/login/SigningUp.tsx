import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Dispatch, useState } from "react";
import { add0IfNeeded } from "../(utils)/dateUtils";
import { db, auth } from "../firebaseConfig";
import User from "../(utils)/User";

export function SigningUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [username, setUsername] = useState("");
    const [display, setDisplay] = useState("");

    async function handleSignUp() {
        if (email === "") {
            setDisplay("Please an an email.");
            return;
        }
        if (username === "") {
            setDisplay("Please enter a username.");
            return;
        }
        if (password === "") {
            setDisplay("Please enter a password.");
            return;
        }
        if (password !== rePassword) {
            setDisplay("Entered passwords don't match, please re-enter them.");
            return;
        }
        if (password.length < 8) {
            setDisplay("Password needs to be at least 8 characters long.");
            return;
        }
        setDisplay("");

        const emailRef = email.trim();
        const docRef = doc(db, "users", emailRef);

        const document = await getDoc(docRef);
        if (document.exists()) {
            setDisplay("Your account already exists, please log-in instead.");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, { displayName: username });
        } catch (error) {
            //firebase errors are of type { code: string, message: string } so we're converting try catch error to
            // firebase error type
            const e: { code: string, message: string } = error as any;

            if (e.code === "auth/email-already-in-use") setDisplay("Your account already exists, please log-in instead.");
            console.log(e, e.code);
            return;
        }

        try {
            let time = new Date();
            let data: User = {
                username,
                createdAt: `${add0IfNeeded(time.getHours())}:${add0IfNeeded(time.getMinutes())}:${add0IfNeeded(time.getSeconds())}`,
                createdOn: `${time.getFullYear()}${add0IfNeeded(time.getMonth())}${add0IfNeeded(time.getDate())}`,
                likedPosts: []
            };
            await setDoc(docRef, data);
            window.open("/user", "_self");
        } catch (e) {
            console.log(e);
        }
    }
    return (<>
        <input placeholder="Create a username..." value={username} onChange={e => setUsername(e.target.value.trim())}
            className="w-full text-black mb-2 text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <input type="email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value.trim())}
            className="w-full text-black mb-2 text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <input type="password" placeholder="Create a password..." value={password} onChange={e => setPassword(e.target.value)}
            className="w-full text-black mb-2 text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <input type="password" placeholder="Re-enter password..." value={rePassword} onChange={e => setRePassword(e.target.value)}
            className="w-full text-black mb-2 text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <button className="bg-black text-white px-[10px] py-[5px] rounded-md w-4/5 mb-2 hover:bg-cyan-600 transition-all hover:text-black" onClick={handleSignUp}>Sign Up</button>
        {display.trim().length > 0 && <><br />
            <p className="text-black text-xs">{display}</p></>}
    </>);
}