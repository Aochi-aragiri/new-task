import { Heart, ShoppingBag } from "lucide-react";

export default function NikeView() {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="m-7 w-50 rounded-3xl bg-neutral-800 p-1.5">
        <div className="relative">
          <img
            src="/Nikes.jpg"
            alt="Nikes"
            className="w-48 h-48 rounded-2xl object-cover aspect-square"
          />
          <div className="absolute top-2 right-2 p-1.5 bg-neutral-800 rounded-full">
            <Heart size={18} />
          </div>
        </div>
        <div className="p-0.5 pl-2">
          <h1 className="font-medium">Air Force 1 Low Supr...</h1>
          <p className="text-xs">Nike</p>

          <div className="flex justify-between mt-4">
            <div className="text-3xl font-medium">59$</div>
            <div className="p-3 rounded-2xl text-black bg-white">
              <ShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
