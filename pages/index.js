import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { useRouter } from "next/router";
import ReactGA from "react-ga";
import { data as washingMachinesUnder40000 } from "@/data/washingMachinesUnder40000";
import { data as washingMachinesUnder35000 } from "@/data/washingMachinesUnder35000";
import { data as washingMachinesUnder30000 } from "@/data/washingMachinesUnder30000";
import { data as washingMachinesUnder25000 } from "@/data/washingMachinesUnder25000";
import { data as washingMachinesUnder20000 } from "@/data/washingMachinesUnder20000";
import { data as washingMachinesUnder15000 } from "@/data/washingMachinesUnder15000";
import { data as washingMachinesUnder10000 } from "@/data/washingMachinesUnder10000";
import HomePageProductCard from "@/components/HomePageProductCard";
import HorizontalScroller from "@/components/HorizontalScroller";
import ScrollersHeader from "@/components/ScrollersHeader";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
      <Header home />
      <HeroSection />
      <main className="p-6 md:py-6 md:px-0 max-w-5xl mx-auto">
        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="40,000" priceForURL="40000" />
          <HorizontalScroller>
            {washingMachinesUnder40000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-40000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="35,000" priceForURL="35000" />
          <HorizontalScroller>
            {washingMachinesUnder35000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-35000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="30,000" priceForURL="30000" />
          <HorizontalScroller>
            {washingMachinesUnder30000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-30000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="25,000" priceForURL="25000" />
          <HorizontalScroller>
            {washingMachinesUnder25000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-25000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="20,000" priceForURL="20000" />
          <HorizontalScroller>
            {washingMachinesUnder20000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-20000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-3 md:mb-4 lg:mb-6">
          <ScrollersHeader price="15,000" priceForURL="15000" />
          <HorizontalScroller>
            {washingMachinesUnder15000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-15000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>

        <div className="mb-0 md:mb-4 lg:mb-6">
          <ScrollersHeader price="10,000" priceForURL="10000" />
          <HorizontalScroller>
            {washingMachinesUnder10000.map((product, index) => {
              return (
                <Link
                  key={index}
                  href={`/best-washing-machines-under-10000#product-${
                    index + 1
                  }`}
                  className="cursor-none md:cursor-pointer"
                >
                  <div className="snap-start shrink-0 g-amber-200 place-items-center text-8xl">
                    <HomePageProductCard
                      productImage={product.productImage.url}
                      productAlt={product.productImage.alt}
                      productName={product.productName}
                    />
                  </div>
                </Link>
              );
            })}
          </HorizontalScroller>
        </div>
      </main>
      
      <footer className="select-none bg-primary px-5 py-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p>&#169; Copyright 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
