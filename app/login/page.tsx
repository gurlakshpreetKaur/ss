import { Metadata } from "next";
import { Login } from "./Login";

export const metadata: Metadata = {
    title: 'Log-in or Sign-up to CLA',
    description: 'Create an account, log-in, or sign up to CLA',
}

export default function LoginOut() {
    return <Login />;
}