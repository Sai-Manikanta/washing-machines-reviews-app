import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import axios from "axios";

export default function bestWashingMachinesUnder40000({ data }) {
  return (
    <Layout priceUnder="20,000">
      <Head>
        <title>best washing machines under 20,000</title>
      </Head>
      {data?.map((washingMachineData, i) => (
        <ProductCard
          key={i}
          washingMachineData={{ orderNumber: i + 1, ...washingMachineData }}
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "http://localhost:3000/api/washingMachinesUnder20000"
  );
  const data = await response.data;
  return {
    props: { data },
  };
}