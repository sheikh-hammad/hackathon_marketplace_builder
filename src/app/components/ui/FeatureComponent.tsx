import React from "react";
import Link from "next/link";
import { Prod } from "../../components/data/types";
import Produc from "@/app/components/ui/Produc";

const FeatureComponent = () => {
  return (
    <div className="flex flex-col gap-[69px]">
      <div className="flex items-center justify-between">
        <p className="text-[28px] leading-[auto] tracking-[5.6px] font-bold uppercase">
          Featured Products
        </p>
        <Link
          className="text-[18px] leading-[auto] underline font-bold"
          href="/products"
        >
          View all
        </Link>
      </div>
      <div className="flex gap-[26px] justify-between">
        {Prod.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <Produc {...p} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureComponent;
