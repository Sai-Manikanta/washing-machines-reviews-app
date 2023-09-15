import { useEffect } from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import { data } from "../data/washingMachinesUnder40000";

export default function bestWashingMachinesUnder40000({ data }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout priceUnder="40,000">
      <Head>
        <title>best washing machines under 40,000</title>
        <meta name="description" content="best washing machines under 40,000" />
        <meta
          name="keywords"
          content="washing machines,best washing machines under 40,000"
        />
      </Head>

      <div>
        {data?.map((washingMachineData, i) => (
          <ProductCard
            key={i}
            id={i + 1}
            washingMachineData={{
              orderNumber: i + 1,
              ...washingMachineData,
            }}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { data },
  };
}
