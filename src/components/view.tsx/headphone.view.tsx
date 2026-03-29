import { ChevronRight, Circle, Heart } from "lucide-react";
import { useEffect } from "react";

export default function HeadphoneView() {
  useEffect(() => {
    document.body.style.backgroundColor = "#dfffeb";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="m-7 w-60 rounded-3xl bg-white p-1.5">
        <div className="relative">
          <img
            src="/Headphone.jpg"
            alt="Headphone"
            className="w-58 h-58 rounded-2xl object-cover aspect-square"
          />
          <div className="absolute top-2 right-2 p-1.5 bg-neutral-200 rounded-full">
            <Heart size={12} strokeWidth={3} />
          </div>
        </div>
        <div className="p-2 pt-1 flex flex-col gap-1.5">
          <h1 className="font-bold text-lg max-w-50">Sony Headphone</h1>
          <p className="text-xs max-w-50 text-neutral-500">
            WH-1000XMS Wireless Industry Leading Noise Cancelling Headphones
          </p>
          <div className="flex gap-1 items-center pt-2">
            <div className="border-2 border-black rounded-full">
              <div className="border-2 border-white rounded-full">
                <Circle
                  fill="rgb(218,220,211)"
                  color="rgb(218,220,211)"
                  size={16}
                />
              </div>
            </div>
            <div className="border-2 border-white">
              <Circle fill="black" color="black" size={16} />
            </div>
            <div className="border-2 border-white">
              <Circle fill="rgb(62,61,118)" color="rgb(62,61,118)" size={16} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">$339</p>
            <div className="flex gap-1 items-center font-medium text-[12px] item bg-linear-to-r shadow-md border-3 border-black/5 p-1.5 pl-6 pr-6 rounded-sm from-green-400 via-[rgb(47,244,144)] to-emerald-300">
              Add to cart
              <ChevronRight size={12} className="pt-0.5" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
