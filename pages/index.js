import Image from 'next/image'
import ProductCard from './../components/ProductCard'
import ChangePriceDropdown from './../components/ChangePriceDropdown'
import WashingMachineGuideModal from './../components/WashingMachineGuideModal'

export default function Home() {

  const washingMachinesData = [
    {
      productName: "Samsung 8 Kg 5 Star AI Control & Wi-Fi, Fully-Automatic Front Loading Washing Machine",
      productImage: {
        url: '/images/samsung-washing-machine.webp',
        alt: 'Product alt'
      },
      rating: 9.9,
      highlights: [
        "Fully-automatic front load washing machine, with Artificial Intellgence, Ecobubble and Wi-Fi functionality: best wash quality, energy and water efficient",
        "1400 RPM: Higher spin speeds helps in faster drying",
        "22 Wash Cycles : 15' Quick Wash, Active Wear, Baby Care, Bedding, Cloudy Day, Cotton, Colors, Daily Wash, Delicates, Drain/Spin, Drum Clean, E Cotton, Hygiene Steam, Jeans, Outdoor, Rinse + Spin, Shirts, Silent Wash, Super Eco Wash, Synthetics, Towels, Wool"
      ],
      videoReview: {
        title: 'Samsung 8 Kg 5 Star AI Control & Wi-Fi, Fully-Automatic Front Loading Washing Machine',
        id: '5RTMD0wo7O0'
      },
      stores: {
        amazon: 'https://www.amazon.in/Samsung-Control-Fully-Automatic-WW80T504DAB1TL-Inverter/dp/B09KGVKZXS/ref=sr_1_1?keywords=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&qid=1689686416&sr=8-1',
        flipkart: 'https://www.flipkart.com/samsung-8-kg-5-star-eco-bubble-technology-ai-control-wi-fi-digital-inverter-motor-hygiene-steam-fully-automatic-front-load-washing-machine-in-built-heater-black/p/itmf9d376dfc8963?pid=WMNG87FQNXWQZHGE&lid=LSTWMNG87FQNXWQZHGEWUZGI8&marketplace=FLIPKART&q=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&store=j9e%2Fabm%2F8qx&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=634303c3-9b8e-48b4-9cdc-21e42af7c5ac.WMNG87FQNXWQZHGE.SEARCH&ppt=hp&ppn=homepage&ssid=5to2ksksf40000001689686461647&qH=6ea03ccfc709189d'
      }
    },
    {
      productName: "IFB 8.0 Kg Fully-Automatic Top Loading Washing Machine (TL-SBRS 8.0 KG Aqua, Brown, 2X Power Steam, 4 Years Comprehensive Warranty)",
      productImage: {
        url: '/images/ifb.jpg',
        alt: 'Product alt'
      },
      rating: 9.6,
      highlights: [
        "Fully-Automatic Top load Washing Machine: Best Wash Quality, Energy and Water efficient",
        "Capacity 8 kg: Suitable for Large families",
        "Energy Rating 5 Star: Best in class efficiency"
      ],
      videoReview: {
        title: 'IFB 8.0 Kg Fully-Automatic Top Loading Washing Machine',
        id: 'Uw_WzFtB2Tg'
      },
      stores: {
        amazon: 'https://www.amazon.in/Samsung-Control-Fully-Automatic-WW80T504DAB1TL-Inverter/dp/B09KGVKZXS/ref=sr_1_1?keywords=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&qid=1689686416&sr=8-1',
        flipkart: 'https://www.flipkart.com/samsung-8-kg-5-star-eco-bubble-technology-ai-control-wi-fi-digital-inverter-motor-hygiene-steam-fully-automatic-front-load-washing-machine-in-built-heater-black/p/itmf9d376dfc8963?pid=WMNG87FQNXWQZHGE&lid=LSTWMNG87FQNXWQZHGEWUZGI8&marketplace=FLIPKART&q=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&store=j9e%2Fabm%2F8qx&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=634303c3-9b8e-48b4-9cdc-21e42af7c5ac.WMNG87FQNXWQZHGE.SEARCH&ppt=hp&ppn=homepage&ssid=5to2ksksf40000001689686461647&qH=6ea03ccfc709189d'
      }
    },
    {
      productName: "Samsung 7 kg, 5 star, Eco Bubble Technology, Digital Inverter Motor, Dual Storm, Fully-Automatic Top Load Washing Machine (WA70BG4441YYTL, Lavender Gray)",
      productImage: {
        url: '/images/samsung.jpg',
        alt: 'Product alt'
      },
      rating: 9.2,
      highlights: [
        "Fully-automatic front load washing machine, with Artificial Intellgence, Ecobubble and Wi-Fi functionality: best wash quality, energy and water efficient",
        "1400 RPM: Higher spin speeds helps in faster drying",
        "22 Wash Cycles : 15' Quick Wash, Active Wear, Baby Care, Bedding, Cloudy Day, Cotton, Colors, Daily Wash, Delicates, Drain/Spin, Drum Clean, E Cotton, Hygiene Steam, Jeans, Outdoor, Rinse + Spin, Shirts, Silent Wash, Super Eco Wash, Synthetics, Towels, Wool"
      ],
      videoReview: {
        title: 'Samsung 8 Kg 5 Star AI',
        id: '5RTMD0wo7O0'
      },
      stores: {
        amazon: 'https://www.amazon.in/Samsung-Control-Fully-Automatic-WW80T504DAB1TL-Inverter/dp/B09KGVKZXS/ref=sr_1_1?keywords=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&qid=1689686416&sr=8-1',
        flipkart: 'https://www.flipkart.com/samsung-8-kg-5-star-eco-bubble-technology-ai-control-wi-fi-digital-inverter-motor-hygiene-steam-fully-automatic-front-load-washing-machine-in-built-heater-black/p/itmf9d376dfc8963?pid=WMNG87FQNXWQZHGE&lid=LSTWMNG87FQNXWQZHGEWUZGI8&marketplace=FLIPKART&q=Samsung+8+Kg+5+Star+AI+Control+Washing+Machine&store=j9e%2Fabm%2F8qx&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=634303c3-9b8e-48b4-9cdc-21e42af7c5ac.WMNG87FQNXWQZHGE.SEARCH&ppt=hp&ppn=homepage&ssid=5to2ksksf40000001689686461647&qH=6ea03ccfc709189d'
      }
    }
  ];

  return (
    <div>
      <div className="sm:bg-white">
        <header className="max-w-5xl mx-auto">
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
    </div>
  )
}
