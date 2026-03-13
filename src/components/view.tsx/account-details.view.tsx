import {
  ArrowLeft,
  BatteryFull,
  Check,
  Circle,
  CircleCheck,
  Copy,
  MessageCircleMore,
  Package,
  PackageSearch,
  PhoneCall,
  SignalHigh,
  TriangleAlert,
  Truck,
  Wifi,
} from "lucide-react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { timeline } from "@/data/timeline";

export default function AccountDetailsView() {
  return (
    <div>
      <Layout>
        {/* Status bar */}
        <div className="p-5">
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
        {/* Padding */}

        {/* Details */}
        <div className="relative flex items-center justify-center text-sm font-medium">
          <Link to="/account">
            <div className="absolute left-1 top-1/2 -translate-y-1/2 hover:bg-black hover:text-white rounded-3xl p-1">
              <ArrowLeft className="w-10 h-4" />
            </div>
          </Link>
          <div>Details</div>
        </div>
        <div className="p-5 flex flex-col gap-3">
          {/* Traking ID */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-3 items-center">
              <div className="bg-[rgb(239,241,248)] p-2 rounded-full">
                <Package
                  fill="black"
                  className="text-white"
                  size={28}
                  strokeWidth={1}
                />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <div className="text-[10px] font-medium text-neutral-800">
                  Tracking ID:
                </div>
                <div className="font-bold text-xs flex gap-3 items-center">
                  PAQ-327-P21
                  <Copy size={14} className="pt-0.5 text-neutral-700" />
                </div>
              </div>
            </div>
            <div className="bg-[rgb(224,232,246)] text-blue-600 text-xs rounded-3xl p-2.5 pl-5 pr-5">
              In Transit
            </div>
          </div>
          {/* Progress bar */}
          <div className="relative flex items-center">
            <Progress className=" [&>div]:rounded-2xl w-full" value={60} />
            <div className="absolute inset-0 flex justify-between items-center">
              <CircleCheck
                size={24}
                strokeWidth={1.5}
                className="bg-black border-3 border-black text-white rounded-full"
              />
              <CircleCheck
                size={24}
                strokeWidth={1.5}
                className="bg-black border-3 border-black text-white rounded-full"
              />
              <Circle
                size={24}
                strokeWidth={1.5}
                className="bg-neutral-400 filter-[drop-shadow(0_0_2px_rgba(0,0,0,0.35))] border-3 border-neutral-400 text-neutral-400 rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-between">
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
          {/* Track Shipping Button */}
          <Button className="font-normal text-xs font-sans rounded-xl p-5 mt-3">
            <PackageSearch strokeWidth={1.5} /> Track Shipping
          </Button>
          {/* Delivery details */}
          <div className="bg-[rgb(238,241,248)] p-1 rounded-3xl">
            <h3 className="text-xs text-neutral-500 items-center flex gap-2 p-2 pl-3">
              <Truck size={20} strokeWidth={1.5} />
              Delivery Details
            </h3>
            <div className="bg-white p-4 m-1 rounded-2xl grid grid-cols-2 font-semibold gap-3 text-xs">
              <span className="text-neutral-700 font-normal">Receiver</span>
              <span className="text-right">John Doe</span>
              <span className="text-neutral-700 font-normal">Address</span>
              <span className="text-right">12, Palm Groove</span>
              <span className="text-neutral-700 font-normal">Contact</span>
              <span className="text-right">+234 - 123 -201 -419</span>
              <span className="text-neutral-700 font-normal">Item</span>
              <span className="text-right">Samsung 75" Oled</span>
              <span className="text-neutral-700 font-normal">Note</span>
              <span className="text-right flex items-center justify-end gap-1 text-red-500">
                <TriangleAlert className="w-4 h-4" /> Fragile
              </span>
            </div>
          </div>
          {/* Contact rider */}
          <div className="flex flex-col p-1 bg-[rgb(238,241,248)] rounded-3xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex justify-start rounded-full w-11 h-11 overflow-hidden">
                  <img
                    src="/contact.jpg"
                    alt="Contact image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col pl-2">
                  <p className="text-[14px] font-bold">Jinshi</p>
                  <p className="text-xs flex items-center gap-0.5 text-neutral-500">
                    Contact Rider
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pr-2">
                <div className="p-2 bg-white rounded-full">
                  <MessageCircleMore size={20} />
                </div>
                <div className="p-2 bg-black rounded-full">
                  <PhoneCall
                    size={18}
                    className="text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-2xl p-4 pt-2">
            <div className="w-15 h-0.5 bg-black rounded-full mx-auto mb-6" />
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex items-start flex-col gap-0.5 -mt-0.5 pb-3 shrink-0">
                  <p className="font-bold text-xs">{item.time}</p>
                  <p className="text-neutral-400 text-[10px]">{item.date}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black rounded-full p-1">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 border-l border-dashed border-neutral-300" />
                  )}
                </div>
                <p className="text-[10px] font-medium text-neutral-800 pb-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
