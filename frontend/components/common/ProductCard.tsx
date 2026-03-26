import { assets } from "@/utilites/example";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  _id: string;
  name: string;
  category: string;
  monthlyRent: number;
  status: string;
  securityDeposit: number;
};

const ProductCard = (props: Props) => {
  return (
    <div className="w-65 md:w-55 bg-white overflow-hidden rounded-lg transition-all duration-300">
      <div className="w-full h-45 md:h-35 relative border  overflow-hidden ">
        <Image
          src={assets.blueSofa}
          alt="blueSofa"
          fill
          className="object-cover  hover:scale-110 transition-all duration-200"
        />
      </div>
      <div className="p-5 space-y-2">
        <div>
          <div className="uppercase font-semibold text-xs">
            {props.category}
          </div>
          <div className="font-bold text-xl">{props.name}</div>
        </div>
        <div>
          <div className=" ">
            <span className="font-extrabold text-2xl">{props.monthlyRent}</span>
            <span>/month</span>
          </div>
          <div className="text-xs font-extralight">
            <span>Refundable Deposit:</span>
            <span>${props.securityDeposit}</span>
          </div>
        </div>
        <Button className="cursor-pointer">Rent Now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
