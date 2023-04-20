import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="navbar">
        <Link href="/">home</Link>
        <Link href="/list">list페이지</Link>
      </div>
      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev kim</p>
    </main>
  );
}
