import { Inter } from "next/font/google";
import { Header } from "../conponents/Header"
import { Headline } from "../conponents/Headline"
import { Links } from "../conponents/Links"
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header/>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title="about"/>
        <Links/>
      </main>
    </>
  );
}
