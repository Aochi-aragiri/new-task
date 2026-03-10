import {
  BatteryFull,
  Bell,
  Eye,
  ListFilter,
  MapPinned,
  Package2,
  Search,
  SignalHigh,
  Truck,
  Wifi,
} from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

export default function AccountView() {
  return (
    <div>
      <Layout className="p-5">
        {/* Status bar */}
        <div>
          <div className="flex justify-between">
            <div className="font-bold text-sm pl-4">9:41</div>
            <div>
              <div className="flex gap-2 font-bold">
                <SignalHigh size={18} />
                <Wifi size={18} />
                <BatteryFull size={18} />
              </div>
            </div>
          </div>
        </div>
        {/* Account */}
        <div className="flex justify-between items-center pt-5">
          <div className="flex justify-start">
            <img
              src="avatar.jpg"
              className="bg-green-300 rounded-full object-cover content-center w-9 h-9"
              alt="MaoMao"
            ></img>
            <div className="flex flex-col pl-2">
              <p className="text-[14px] font-bold">Hello, MAOMAO</p>
              <p className="text-xs flex items-center gap-0.5 text-neutral-500">
                <MapPinned size={16} />
                12, Palm Groove, Lagos
              </p>
            </div>
          </div>
          <div className="relative p-2 bg-[rgb(243,243,243)] rounded-full">
            <Bell size={20} />
            <span className="absolute bottom-5 left-4.5 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
        {/* Ballance */}
        <div className="bg-black mt-5 mb-5 p-5 rounded-3xl flex flex-col gap-6 justify-between">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-2.5">
              <p className="text-neutral-300 text-xs">Your Ballance</p>
              <p className="text-white flex items-center font-medium gap-3 text-xl">
                $245.00 <Eye size={20} className="text-neutral-200 pt-0.5" />
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-3xl p-2 text-xs pl-3 pr-3"
            >
              Top Up
            </Button>
          </div>
          <div className="flex justify-between gap-2">
            <Button
              variant="secondary"
              className="rounded-3xl text-xs p-5.5 w-33 bg-neutral-200"
            >
              <Truck /> New Shipping
            </Button>
            <Button
              variant="secondary"
              className="rounded-3xl text-xs p-5.5 w-33 bg-neutral-200"
            >
              <Package2 /> Track Shipping
            </Button>
          </div>
        </div>
        {/* Search field */}
        <InputGroup className="rounded-3xl flex items-center p-1 h-10">
          <InputGroupInput
            className="placeholder:text-[13px] text-[13px]"
            placeholder="Search shipping"
          />
          <InputGroupAddon className="pl-2">
            <Search />
          </InputGroupAddon>
          <InputGroupAddon
            align="inline-end"
            className="bg-black text-white rounded-full p-2 flex items-center justify-center"
          >
            <ListFilter className="w-5 h-5" />
          </InputGroupAddon>
        </InputGroup>
      </Layout>
    </div>
  );
}
