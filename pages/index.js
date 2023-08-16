import Head from "next/head";
import ProductCard from "./../components/ProductCard";
import Layout from "@/components/Layout";
import axios from "axios";

export default function Home({ data }) {
  return (
    <Layout priceUnder="10,000">
      <Head>
        <title>best washing machines under 10,000</title>
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
    "http://localhost:3000/api/washingMachinesUnder10000"
  );
  const data = await response.data;
  return {
    props: { data },
  };
}
{
  // import Image from "next/image";
  // import ChangePriceDropdown from "./../components/ChangePriceDropdown";
  // import WashingMachineGuideModal from "./../components/WashingMachineGuideModal";
  /* <div>
  <div className="sm:bg-white">
  <header className="max-w-5xl mx-auto sm:bg-white">
  <div className="grid sm:grid-cols-2">
  <div className="sm:pt-5 md:pt-8 lg:pt-10 pl-0 sm:pl-5 md:pl-10 lg:pl-0">
  <span className="text-3xl block font-bold p-5 sm:pl-0 sm:text-3xl md:text-4xl lg:text-5xl sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.2]">
          Find the best washing machine for you.
        </span>
        <Image
          src="/images/washingMachine.gif"
          alt="Picture of the author"
          width={600}
          height={500}
          className="sm:hidden w-100 mx-auto"
        />
        <div>
          <WashingMachineGuideModal />
        </div>
      </div>
      <div>
        <Image
          src="/images/washingMachine.gif"
          alt="Picture of the author"
          width={600}
          height={500}
          className="hidden sm:block w-100 mx-auto"
        />
      </div>
    </div>
    <hr className="mx-5 bg-tertiary mt-2 sm:hidden" style={{ height: '2px' }} />
  </header>
</div>

<main className="p-5">
  <section className="max-w-5xl mx-auto mt-8">
    <div className="sm:flex justify-between">
      <h1 className="text-xl sm:text-2xl font-medium text-slate-800">
        Best washing machines under ₹10,000
      </h1>
      <div className="flex justify-end">
        <ChangePriceDropdown />
      </div>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-6">
      {washingMachinesData?.map((washingMachineData, i) => (
        <ProductCard
          key={i}
          washingMachineData={{ orderNumber: i + 1, ...washingMachineData }}
        />
      ))}
    </div>
  </section>
</main>
<footer className="bg-primary px-5 pt-10 pb-6 text-white">
  <div className="max-w-5xl mx-auto">
    <h4 className="text-lg border-l-4 pl-2 mb-4">Usefull Links</h4>
    <a href="#" className="block underline mb-2">Best washing machines under ₹35,000</a>
    <a href="#" className="block underline mb-2">Best washing machines under ₹25,000</a>
    <a href="#" className="block underline mb-2">Best washing machines under ₹20,000</a>
    <p className="mt-6">&#169; Copyright 2023</p>
  </div>
</footer>
</div> */
}
