import { Bus, Circle, Clock3, Minus } from "lucide-react";
import LayoutTrain from "../layout/layout_train";

export default function TrainView() {
  return (
    <LayoutTrain>
      <div className="flex justify-between pt-7 pl-7 pr-7 font-medium">
        <div className="flex gap-4">
          <Bus />
          <p>IC 423</p>
        </div>
        <p>MON, 20 OCT</p>
      </div>
      <div className="pt-6 flex pl-7 pr-7 justify-between font-medium text-sm">
        <p>Wrocław Główny</p>
        <p>Kraków Główny</p>
      </div>
      <div className="pl-7 pr-7 flex justify-between font-medium text-xl">
        <p>09:42</p>
        <div className="flex items-center gap-1">
          <Circle fill="black" size={6}></Circle>
          <Minus size={8}></Minus>
          <Minus size={8}></Minus>
          <Minus size={8}></Minus>
          <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            <Clock3 size={12} />
            <span>3h 32m</span>
          </div>
          <Minus size={8}></Minus>
          <Minus size={8}></Minus>
          <Minus size={8}></Minus>
          <Circle fill="black" size={6}></Circle>
        </div>
        <p>13:37</p>
      </div>
      {/* On time */}
      <p className="text-green-500 pl-7 pr-7 font-medium justify-center flex border-b p-1 pb-4 items-center gap-1">
        <Circle className="fill-current" size={8} /> On time
      </p>
      <div className="flex justify-between pl-7 pr-7 mt-4 text-neutral-600">
        <p>Passenger</p>
        <div className="flex gap-4">
          <p>Seat</p>
          <p>Coach</p>
        </div>
      </div>
      <div className="flex justify-between font-medium pl-7 pr-7 pb-7">
        <p>Sam Smith</p>
        <div className="flex gap-8 pr-9">
          <p>17</p>
          <p>5</p>
        </div>
      </div>
      <div className="flex justify-between p-4 bg-[rgb(242,247,248)]">
        <div className="flex flex-col items-start">
          <div className="flex text-xs pt-1 pb-1.5 p-2 rounded-sm font-medium bg-[rgb(216,229,253)]">
            Platform: 3
          </div>
          <p className="font-medium text-sm pt-3">Boarding started!</p>
          <p className="flex font-medium gap-1 text-sm text-neutral-600">
            Departure in <div className="text-blue-500">15:13</div>
          </p>
        </div>
        <div className="flex flex-col">
          <img className="w-28 border rounded-2xl bg-white" src="QR.svg"></img>
          <div className="text-[11px] pt-1 text-center text-neutral-500">
            Tap to view full QR
          </div>
        </div>
      </div>
    </LayoutTrain>
  );
}
