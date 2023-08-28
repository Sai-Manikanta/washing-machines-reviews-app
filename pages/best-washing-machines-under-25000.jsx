import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
// import axios from "axios";
import { data } from '../data/washingMachinesUnder25000'

export default function bestWashingMachinesUnder40000({ data }) {
  return (
    <Layout priceUnder="25,000">
      <Head>
        <title>best washing machines under 25,000</title>
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
  // const response = await axios.get(
  //   "/api/washingMachinesUnder25000"
  // );
  // const data = response.data;
  return {
    props: { data },
  };
}