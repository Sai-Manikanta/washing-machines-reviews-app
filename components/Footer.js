import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary px-5 pt-10 pb-6 text-white">
        <div className="max-w-5xl mx-auto">
          <h4 className="text-lg border-l-4 pl-2 mb-4 font-bold">Usefull Links</h4>
          <div className="flex flex-col md:flex-row md:gap-12">
            <div>
              <Link href="/best-washing-machines-under-40000" className="block underline mb-2">
                Best washing machines under ₹40,000
              </Link>

                        <Link href="/best-washing-machines-under-35000" className="block underline mb-2">
            Best washing machines under ₹35,000
              </Link>

                        <Link href="/best-washing-machines-under-30000" className="block underline mb-2">
                            Best washing machines under ₹30,000
                        </Link>

              <Link href="/best-washing-machines-under-25000" className="block underline mb-2">
            Best washing machines under ₹25,000
              </Link>
            </div>
            <div>
              <Link href="/best-washing-machines-under-20000" className="block underline mb-2">
            Best washing machines under ₹20,000
              </Link>

              <Link href="/best-washing-machines-under-15000" className="block underline mb-2">
                Best washing machines under ₹15,000
              </Link>

              <Link href="/best-washing-machines-under-10000" className="block underline mb-2">
                Best washing machines under ₹10,000
              </Link>
            </div>
          </div>
          <p className="mt-6">&#169; Copyright 2023</p>
        </div>
      </footer>
    )
}

export default Footer