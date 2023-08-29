import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import { data } from "../data/washingMachinesUnder10000";

export default function bestWashingMachinesUnder10000({ data }) {
  return (
    <Layout priceUnder="10,000">
      <Head>
        <title>best washing machines under 10,000</title>
        <meta name="description" content="best washing machines under 10,000" />
        <meta
          name="keywords"
          content="washing machines,best washing machines under 10,000"
        />
      </Head>

      <div className="grid grid-cols-1 gap-8 mt-6">
        {data?.map((washingMachineData, i) => (
          <ProductCard
            key={i}
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