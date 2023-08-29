import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>best washing machines</title>
        <meta name="description" content="best washing machines"/>
        <meta name="keywords" content="washing machines,best washing machines"/>
      </Head>
      <Header/>
      <footer className="bg-primary px-5 py-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p >&#169; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}