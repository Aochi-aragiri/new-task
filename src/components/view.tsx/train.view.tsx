import { Bus, Circle, Clock3, Minus } from "lucide-react";
import LayoutTrain from "../layout/layout_train";

export default function TrainView() {
  return (
    <LayoutTrain>
      <div className="flex justify-between font-medium">
        <div className="flex gap-4">
          <Bus />
          <p>IC 423</p>
        </div>
        <p>MON, 20 OCT</p>
      </div>
      <div className="pt-6 flex justify-between font-medium text-sm">
        <p>Wrocław Główny</p>
        <p>Kraków Główny</p>
      </div>
      <div className=" flex justify-between font-medium text-xl">
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
    </LayoutTrain>
  );
}
