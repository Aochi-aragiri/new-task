import { ChevronDown } from "lucide-react";
import LayoutSwap from "../layout/layout_swap";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function SwapView() {
  return (
    <div className="min-h-screen content-center">
      <div className="flex flex-col justify-center items-center m-4">
        <div className="flex items-center gap-8 text-xs font-medium">
          <button className="bg-neutral-200 p-1 pr-2 pl-2 rounded-2xl cursor-pointer">
            Swap
          </button>
          <button className="text-neutral-500 rounded-2xl hover:bg-neutral-200 p-1 pr-2 pl-2 cursor-pointer">
            Send
          </button>
          <button className="text-neutral-500 rounded-2xl hover:bg-neutral-200 p-1 pr-2 pl-2 cursor-pointer">
            Buy
          </button>
        </div>
      </div>
      <LayoutSwap>
        <div className="flex flex-col gap-3">
          <div className="text-sm text-neutral-500 font-medium">Sell</div>
          <div className="flex items-start justify-between">
            <div className="font-medium text-3xl">10</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-3xl bg-white border-2 border-neutral-100 font-medium pl-1!"
                >
                  <img src="ETH.png" className="w-6" alt="ETH"></img>ETH
                  <ChevronDown className="pt-0.5 text-neutral-400" size={6} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>Ти таки тицьнув :3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-start justify-between">
            <div className="text-xs text-neutral-500 font-medium">
              $38,409.24
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p className="text-xs text-neutral-500 font-medium">52.32 ETH</p>
              <p className="p-1 pt-0.5 pb-0.5 text-neutral-500 font-medium rounded-2xl bg-neutral-50 text-[9px]">
                Max
              </p>
            </div>
          </div>
        </div>
      </LayoutSwap>
      <div className="absolute left-1/2 top-1/2 mt-8 -translate-x-1/2 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white border-4 border-[rgb(246,246,246)] w-10 h-10"
        >
          <ChevronDown size={20} className="text-neutral-700" />
        </Button>
      </div>
      <LayoutSwap>
        <div className="flex flex-col gap-3">
          <div className="text-sm text-neutral-500 font-medium">Buy</div>
          <div className="flex items-start justify-between">
            <div className="font-medium text-3xl">147.712</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-3xl bg-white border-2 border-neutral-100 font-medium pl-1!"
                >
                  <img src="AAVE.png" className="w-6" alt="AAVE"></img>AAVE
                  <ChevronDown className="pt-0.5 text-neutral-400" size={6} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem disabled>Ти таки тицьнув :3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-start justify-between">
            <div className="text-xs text-neutral-500 font-medium">
              $38,257.15
            </div>
          </div>
        </div>
      </LayoutSwap>
      <div className="w-95 flex flex-col mx-auto justify-center items-center content-center">
        <Button className="w-full m-2 p-6 rounded-3xl text-[16px] shadow-lg shadow-black/30 font-medium">
          Swap
        </Button>
        <p className="text-[9px] text-neutral-500 flex gap-1 items-center">
          1 AAVE = 0.0676995 ETH
          <div className="text-neutral-400"> ($259.00) | </div> $7.44
          <ChevronDown className="text-neutral-400 pt-0.5" size={12} />
        </p>
      </div>
    </div>
  );
}
