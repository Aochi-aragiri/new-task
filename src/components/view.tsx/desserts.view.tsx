import { ShoppingBasket } from "lucide-react";
import LayoutDessert from "../layout/layout_dessert";

export default function DessertsView() {
  return (
    <div>
      {/* Whole Wheat Loaf */}
      <LayoutDessert className="mt-7">
        <img
          src="\whole_wheat_loaf.jpg"
          alt="Whole wheat loaf"
          className="w-22 h-22 rounded-2xl object-cover aspect-square"
        ></img>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <h1 className="text-[12px] col-span-3">Whole Wheat Loaf</h1>
          <div className="flex justify-end items-center col-span-2">
            <div className="text-[9px] bg-green-100 p-0.5 text-green-600 rounded-2xl pl-2 pr-2">
              In Stock: 40
            </div>
          </div>
          <div className="text-[9px] text-neutral-500 col-span-3 pb-2">
            Nutritious, fiber-rich, and wholesime loaves.
          </div>
          <div className="col-start-1 col-span-3 text-[rgb(53,83,196)] font-medium text-sm">
            $4.50
          </div>
          <div className="text-xs flex justify-end col-span-2">
            <div className="bg-[rgb(53,83,196)] rounded-full text-white flex items-center p-1">
              <ShoppingBasket size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </LayoutDessert>
      {/* Sweet Berry Muffin */}
      <LayoutDessert>
        <img
          src="\sweet_berry_muffin.jpg"
          alt="Sweet Berry Muffin"
          className="w-22 h-22 rounded-2xl object-cover aspect-square"
        ></img>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <h1 className="text-[12px] col-span-3">Sweet Berry Muffin</h1>
          <div className="flex justify-end items-center col-span-2">
            <div className="text-[9px] bg-green-100 p-0.5 text-green-600 rounded-2xl pl-2 pr-2">
              In Stock: 40
            </div>
          </div>
          <div className="text-[9px] text-neutral-500 col-span-3 pb-2">
            Soft muffin filled with fresh, juicy blueberries.
          </div>
          <div className="col-start-1 col-span-3 text-[rgb(53,83,196)] font-medium text-sm">
            $6.50
          </div>
          <div className="text-xs flex justify-end col-span-2">
            <div className="bg-[rgb(53,83,196)] rounded-full text-white flex items-center p-1">
              <ShoppingBasket size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </LayoutDessert>
      {/* Red Velvet Treat */}
      <LayoutDessert>
        <img
          src="\red_velvet_treat.jpg"
          alt="Red Velvet Treat"
          className="w-22 h-22 rounded-2xl object-cover aspect-square"
        ></img>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <h1 className="text-[12px] col-span-3">Red Velvet Treat</h1>
          <div className="flex justify-end items-center col-span-2">
            <div className="text-[9px] bg-green-100 p-0.5 text-green-600 rounded-2xl pl-2 pr-2">
              In Stock: 40
            </div>
          </div>
          <div className="text-[9px] text-neutral-500 col-span-3 pb-2">
            Rich, moist red velvet with creamy frosting.
          </div>
          <div className="col-start-1 col-span-3 text-[rgb(53,83,196)] font-medium text-sm">
            $7.00
          </div>
          <div className="text-xs flex justify-end col-span-2">
            <div className="bg-[rgb(53,83,196)] rounded-full text-white flex items-center p-1">
              <ShoppingBasket size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </LayoutDessert>
      {/* Frosted Bliss Donut */}
      <LayoutDessert>
        <img
          src="\frosted_bliss_donut.jpg"
          alt="Frosted Bliss Donut "
          className="w-22 h-22 rounded-2xl object-cover aspect-square"
        ></img>
        <div className="grid grid-cols-5 gap-1 mt-1">
          <h1 className="text-[12px] col-span-3">Frosted Bliss Donut</h1>
          <div className="flex justify-end items-center col-span-2">
            <div className="text-[9px] bg-yellow-100 p-0.5 text-yellow-600 rounded-2xl pl-2 pr-2">
              Low Stock: 10
            </div>
          </div>
          <div className="text-[9px] text-neutral-500 col-span-3 pb-2">
            Soft blue donut with vibrant pink sprinkles delight.
          </div>
          <div className="col-start-1 col-span-3 text-[rgb(53,83,196)] font-medium text-sm">
            $5.00
          </div>
          <div className="text-xs flex justify-end col-span-2">
            <div className="bg-[rgb(53,83,196)] rounded-full text-white flex items-center p-1">
              <ShoppingBasket size={16} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </LayoutDessert>
    </div>
  );
}
