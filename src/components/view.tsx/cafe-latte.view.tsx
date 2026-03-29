import { Minus, Plus } from "lucide-react";
import LayoutCaffeLatte from "../layout/layout_cafe_latte";

export default function CafeLatteView() {
  return (
    <LayoutCaffeLatte>
      <div className="flex gap-4">
        <img
          src="/Latte.jpg"
          alt="Latte"
          className="w-20 h-20 rounded-3xl object-cover aspect-square"
        ></img>
        <div>
          <h1 className="font-bold text-[20px]">Cafe Latte</h1>
          <p className="text-sm text-white/80">Large</p>
          <p className="text-sm  text-white/80">2% Milk</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="p-3 pr-5 pl-5 border-3 rounded-4xl text-sm border-white/40">
          3 Shots
        </div>
        <div className="flex gap-1">
          <div className="p-3 pr-6 pl-6 rounded-4xl rounded-r-lg font-medium bg-white/40">
            <Minus />
          </div>
          <div className="p-3 pr-6 pl-6 rounded-4xl rounded-l-lg font-medium bg-white/40">
            <Plus />
          </div>
        </div>
      </div>
    </LayoutCaffeLatte>
  );
}
