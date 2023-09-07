import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { data as washingMachinesUnder40000} from "@/data/washingMachinesUnder40000";
import { data as washingMachinesUnder35000} from "@/data/washingMachinesUnder35000";
import { data as washingMachinesUnder30000} from "@/data/washingMachinesUnder30000";
import HomePageProductCard from "@/components/HomePageProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>best washing machines</title>
        <meta name="description" content="best washing machines" />
        <meta
          name="keywords"
          content="washing machines,best washing machines"
        />
      </Head>
      <Header />
      <main className="p-6">
        <div className="flex snap-x snap-mandatory-x w-full mx:auto overflow-x-scroll">
          {
            washingMachinesUnder40000.map((product,index) => {
              return (
                <div key={index} className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                  <HomePageProductCard productImage={product.productImage.url} productAlt={product.productImage.alt} productName={product.productName}/>
                </div>
              )
            })
          }
        </div>
        {/* <Link href="/best-washing-machines-under-20000#product-1">Product 1</Link><br />
        <Link href="/best-washing-machines-under-20000#product-2">Product 2</Link><br />
        <Link href="/best-washing-machines-under-20000#product-3">Product 3</Link><br />
        <Link href="/best-washing-machines-under-20000#product-4">Product 4</Link><br />
        <Link href="/best-washing-machines-under-20000#product-5">Product 5</Link><br />
        <Link href="/best-washing-machines-under-20000#product-6">Product 6</Link><br />
        <Link href="/best-washing-machines-under-20000#product-7">Product 7</Link><br />
        <Link href="/best-washing-machines-under-20000#product-8">Product 8</Link><br />
        <Link href="/best-washing-machines-under-20000#product-9">Product 9</Link><br />
        <Link href="/best-washing-machines-under-20000#product-10">Product 10</Link><br /> */}
      </main>
      <footer className="bg-primary px-5 py-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p>&#169; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
}
