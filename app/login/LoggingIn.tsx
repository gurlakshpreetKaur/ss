import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Dispatch, useState } from "react";
import { db, auth } from "../firebaseConfig";

export function LoggingIn() {
    async function handleLogin() {
        if (email === "") return;
        if (password === "") return;

        const emailRef = email.trim();

        let docRef = doc(db, "users", emailRef);

        if (!(await getDoc(docRef)).exists()) {
            setDisplay("Account doesn't exist! Please create your account before logging in.");
            return;
        }

        try {
            // console.log("signing in");
            await signInWithEmailAndPassword(auth, email, password);
            window.open("/user", "_self");
        } catch (error) {
            const e: { code: string, message: string } = error as any;
            // console.log(e, e.code);

            if (e.code === "auth/wrong-password") {
                setDisplay("Uh oh! Incorrect password :(");
                return;
            }

            setDisplay("There was an error while signing in");
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState("");
    return (<>
        <input type="email" placeholder="Enter your email..." onChange={e => setEmail(e.target.value.trim())} value={email} className="text-black w-full text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <input type="password" placeholder="Create a password..." onChange={e => setPassword(e.target.value)} value={password} className="text-black w-full mt-2 text-sm rounded-full border-2 border-solid border-black outline-none py-[5px] px-[15px]" />
        <br />
        <button className="bg-black text-white px-[10px] py-[5px] rounded-md w-4/5 mb-2 hover:bg-cyan-600 
        transition-all mt-2" onClick={handleLogin}>Log In</button>
        {display.trim().length > 0 && <><br />
            <p className="text-black text-xs">{display}</p></>}
    </>)
}