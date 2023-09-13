import { Metadata } from "next";
import { Home } from "./(Components)/Home";

export const metadata: Metadata = {
  title: "CLA- Learning and Growing",
  description: "CLA is an initiative to better collective social understanding and progress amonst the youth of India"
}

export default function HomeOut() {
  return <Home />;
}