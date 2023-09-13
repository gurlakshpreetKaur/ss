import { UserPage } from "./UserPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Account",
    description: "My account at CLA"
}

export default function UserOut() {
    return <UserPage />;
}