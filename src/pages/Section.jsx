import React from "react";
import { mahsulotlar } from "./section_produkts";
import { FaCartShopping } from "react-icons/fa6";

const Section = () => {
  return (
    <div className="bg-base-200 p-4  justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mahsulotlar.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow hover:shadow-xl transition cursor-pointer"
          >
            <figure className="relative h-[340px]">
              <img
                src={item.img}
                alt={item.name}
                className="h-[340px] w-full object-cover"
              />

              <span className="badge badge-secondary absolute top-2 left-2 text-xs">
                ХИТ
              </span>
            </figure>

            <div className="card-body p-3 gap-1">
              <div className="text-lg font-bold text-secondary">
                {item.price_rub.toLocaleString()} ₽
              </div>

              <p className="text-sm text-base-content line-clamp-2">
                <strong>{item.brand}</strong>/ {item.name}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-accent font-semibold">
                  ⭐ {item.rating}
                </span>
                <span className="text-base-content/50">
                  ({item.reviews_count.toLocaleString()})
                </span>
              </div>
              <div>
                <button className="btn w-full border-none bg-secondary text-[18px] rounded-xl">
                   <FaCartShopping />  Послезавтра
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
