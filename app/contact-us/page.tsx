import { ContactUs as ContactUsInner } from "./ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us at CLA",
    description: "Write a message or enter a query to the team at CLA via email"
}

export default function ContactUs() {
    return <ContactUsInner />;
}