import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import { data } from "../data/washingMachinesUnder30000";

export default function bestWashingMachinesUnder40000({ data }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout priceUnder="30,000">
      <Head>
        <title>best washing machines under 30,000</title>
        <meta name="description" content="best washing machines under 30,000" />
        <meta
          name="keywords"
          content="washing machines,best washing machines under 30,000"
        />
      </Head>

      <div className="grid grid-cols-1 gap-8 mt-6">
        {data?.map((washingMachineData, i) => (
          <ProductCard
            key={i}
            id={i + 1}
            washingMachineData={{ orderNumber: i + 1, ...washingMachineData }}
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
