import { Webstories } from "./Webstories";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "View Webstories at CLA",
    description: "View the webstories at CLA website"
}

export default function Page() {
    return <Webstories />;
}