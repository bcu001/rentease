"use client";

import { ENV } from "@/utilites/env";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./common/ProductCard";

const Browse = () => {
  const { data: topProduct, isLoading } = useQuery({
    queryKey: ["topProducts"],
    queryFn: async () => {
      const res = await axios.get(`${ENV.serverUrl}/products/top`);
      return res.data.data;
    },
  });

  return (
    <div className=" space-y-5 ">
      <div className="uppercase font-semibold text-xs flex justify-between">
        <div className="">Popular near you</div>
        <Link href={"/products"} className="flex items-center text-[#c05739]">
          <span>see all</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className=" flex justify-center">
        {isLoading ? (
          "loading..."
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5">
            {topProduct?.map((product) => {
              return <ProductCard key={product.name} {...product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
