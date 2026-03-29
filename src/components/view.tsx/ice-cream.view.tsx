import { useEffect } from "react";
import { Sphere } from "../ui/sphere";

export default function IceCreamView() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fbfbda";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="relative text-neutral-600">
      <Sphere size={90} color="#eedca1" top="25%" left="25%" zIndex={0} />
      <Sphere size={150} color="#eedca1" top="10%" right="30%" zIndex={0} />
      <Sphere size={50} color="#e8e0c8" top="50%" right="36%" zIndex={0} />
      <Sphere size={150} color="#ebce8b" bottom="10%" right="35%" zIndex={0} />
      <Sphere size={110} color="#e8e0c0" bottom="5%" right="60%" zIndex={30} />
      <div className="flex justify-center items-center">
        <div className="m-7 w-90 rounded-3xl shadow-2xl z-20 bg-[rgb(250,255,221)] rou">
          <img
            src="/Vanilla Ice Cream.jpg"
            alt="Vanilla Ice Cream"
            className="rounded-3xl rounded-b-none"
          ></img>
          <div className="m-4 mr-8">
            <h2 className="text-2xl font-bold mb-1">Vanilla Ice Cream</h2>
            <div className="flex mb-3">
              <div className="pl-5 text-[12px]">Vegan</div>
              <div className="pl-5 text-[12px]">Glutan free</div>
              <div className="pl-5 text-[12px]">Organic</div>
            </div>
            <div className="mb-1">Lorem ipsum dolor sit amet consectetur</div>
            <div className="flex gap-2 mb-3 items-center">
              <div className=" text-[12px]">Toppings</div>
              <div className="border pl-3 pr-3 rounded-2xl border-neutral-300 text-[12px]">
                Choco chips
              </div>
              <div className="border pl-3 pr-3 rounded-2xl border-neutral-300 text-[12px]">
                Nuts
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="text-[rgb(219,180,80)] font-bold text-2xl">
                  $10.00
                </div>
                <p className="text-xs">+2$ delivery</p>
              </div>
              <button className="p-2 w-full ml-3 font-bold bg-linear-to-r shadow-sm rounded-3xl shadow-amber-300 from-[rgb(250,211,5)] via-[rgb(237,212,104)] to-[rgb(219,180,80)]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
