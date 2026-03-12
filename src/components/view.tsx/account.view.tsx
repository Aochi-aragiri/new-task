import {
  BatteryFull,
  Bell,
  Check,
  Circle,
  CircleCheck,
  CircleUser,
  Eye,
  House,
  ListFilter,
  Mail,
  MapPinned,
  Package,
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
import { Progress } from "../ui/progress";
import { Link, Outlet } from "react-router-dom";

export default function AccountView() {
  return (
    <div>
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
                <h1 className="text-neutral-300 text-xs">Your Ballance</h1>
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
          {/* Current tracking */}
          <h2 className="mt-5 mb-3 font-medium text-sm">Current Tracking</h2>
          <Link to="/account/details">
            <div className="bg-neutral-100 rounded-3xl p-4">
              <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col justify-between gap-1.5">
                  <div className="text-[10px] font-medium text-neutral-800">
                    Tracking ID:
                  </div>
                  <div className="font-bold text-xs">PAQ-327-P21</div>
                </div>
                <div className="bg-[rgb(224,232,246)] text-blue-600 text-xs rounded-3xl p-2.5 pl-5 pr-5">
                  In Transit
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col gap-0.5">
                  <p className="text-[10px] font-medium text-neutral-800 mb-1">
                    From:
                  </p>
                  <div className="text-xs font-bold text-neutral-800">
                    15, Idumota RD
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    16 Jan 2026
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[10px] font-medium text-neutral-800 mb-1">
                    To:
                  </p>
                  <div className="text-xs font-bold text-neutral-800">
                    21, Ikeja Lagos
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    25 Jan 2026 (EST)
                  </div>
                </div>
              </div>
              <div className="relative flex items-center">
                <Progress className=" [&>div]:rounded-2xl w-full" value={60} />
                <div className="absolute inset-0 flex justify-between items-center">
                  <CircleCheck
                    size={20}
                    className="bg-black border-3 border-black text-white rounded-full"
                  />
                  <CircleCheck
                    size={20}
                    className="bg-black border-3 border-black text-white rounded-full"
                  />
                  <Circle
                    size={20}
                    className="bg-neutral-400 filter-[drop-shadow(0_0_2px_rgba(0,0,0,0.35))] border-3 border-neutral-400 text-neutral-400 rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex flex-col">
                  <div className="text-[10px] font-medium text-neutral-800">
                    Recieved
                  </div>
                  <div className="text-[8px] font-medium text-neutral-700">
                    10:30 am
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-medium text-neutral-800">
                    In Transit
                  </div>
                  <div className="text-[8px] font-medium text-neutral-700">
                    12:30 pm
                  </div>
                </div>
                <div className="text-[10px] font-medium text-neutral-800">
                  Delivered
                </div>
              </div>
            </div>
          </Link>
          {/* Resent activities */}
          <div>
            <div className="flex mt-5 mb-3 justify-between items-center">
              <h2 className="font-medium text-sm">Resent activities</h2>
              <div className="font-medium text-xs">See all</div>
            </div>
            <div className="bg-neutral-100 rounded-3xl p-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1.5">
                  <div className="text-[10px] font-medium text-neutral-800">
                    Tracking ID:
                  </div>
                  <div className="font-bold text-xs">PAQ-327-P21</div>
                  <div className="text-[10px] font-medium text-neutral-800">
                    Status:
                  </div>
                  <div className="p-1.5 pl-2 pr-2 bg-green-100 text-xs text-green-700 flex rounded-3xl items-center content-center justify-center gap-1">
                    <div className="bg-green-700 rounded-full p-0.5">
                      <Check size={9} strokeWidth={3} className="text-white" />
                    </div>
                    Completed
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-1.5">
                  <div className="text-[10px] font-medium text-neutral-800">
                    Item:
                  </div>
                  <div className="font-bold text-xs">
                    iPhone 17 Pro Max 256G
                  </div>
                  <div className="text-[10px] font-medium text-neutral-800">
                    Date:
                  </div>
                  <div className="font-bold text-xs">12 Jan 2026</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 gap-2 z-50 p-1 max-w-70 bg-neutral-100 rounded-4xl border border-white flex items-center justify-between">
            <Button
              variant="default"
              className="rounded-4xl p-6.5 pl-9 pr-9 text-[10px] flex font-medium items-center"
            >
              <House fill="white" className="shrink-0 w-6! h-6!" />
              Home
            </Button>
            <Button variant="ghost">
              <Package
                size={32}
                className="w-6! h-6! shrink-0 text-neutral-400"
              />
            </Button>
            <Button variant="ghost">
              <Mail size={32} className="w-6! h-6! shrink-0 text-neutral-400" />
            </Button>
            <Button variant="ghost">
              <CircleUser
                size={32}
                className="w-6! h-6! shrink-0 text-neutral-400"
              />
            </Button>
          </div>
        </Layout>
      </div>
      <Outlet />
    </div>
  );
}
