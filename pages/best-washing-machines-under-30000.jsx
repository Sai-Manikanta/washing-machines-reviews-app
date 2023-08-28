import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
// import axios from "axios";
import Footer from '../components/Footer' 
import ChangePriceDropdown from "../components/ChangePriceDropdown";
import { data } from '../data/washingMachinesUnder15000'

export default function bestWashingMachinesUnder40000({ data }) {
  return (
    <Layout priceUnder="30,000">
      <Head>
        <title>best washing machines under 30,000</title>
      </Head>

      <main className="p-3">
      <section className="max-w-5xl mx-auto mt-8">
        <div className="sm:flex justify-between">
          <h1 className="text-xl sm:text-2xl font-medium text-slate-800">
            Best washing machines under ₹30,000
          </h1>
          <div className="flex justify-end">
            <ChangePriceDropdown />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-6">
          {data?.map((washingMachineData, i) => (
        <ProductCard
          key={i}
          washingMachineData={{ orderNumber: i + 1, ...washingMachineData }}
        />
      ))}
        </div>
      </section>
      </main>

<Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  // const response = await axios.get(
  //   "/api/washingMachinesUnder30000"
  // );
  // const data = response.data;
  return {
    props: { data },
  };
}