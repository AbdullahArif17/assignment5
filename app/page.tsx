import Header from "@/components/Header/Header";
import Image from "next/image";

export const page = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center m-8 ml-[160px] space-x-8">
        <div>
          <h2 className="text-black text-4xl font-bold tracking-wide leading-tight p-8 text-left font-serif">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h2>
          <p className="text-[#787054] leading-tight p-8 font-serif text-left text-2xl font-medium mt-4">
            An example of intricate workmanship and detail, elegant necklaces and
            long and short chains form a part of our desirable collection.
          </p>
          <button 
            className="w-[288px] rounded-sm h-[58px] bg-[#A29875] mt-8 font-serif leading-tight font-medium text-2xl text-white"
            aria-label="Explore our jewelry collection"
          >
            Explore Now
          </button>
        </div>
        <Image src="/f2.svg" alt="Jewelry Image" height={442} width={611} className="mt-[28px] border-solid ml-[24px]" />
      </div>
    </div>
  );
};

export default page;



