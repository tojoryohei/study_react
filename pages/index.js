import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { Header } from "../conponents/Header"
import { Headline } from "../conponents/Headline"
import { Links } from "../conponents/Links"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title="index" />
        <Links />
      </main>
    </>
  );
}
