import {
  ArrowLeft,
  Calendar1,
  CalendarPlus,
  Check,
  Circle,
  CircleMinus,
  File,
  Send,
  SunMedium,
  Trash2,
} from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";

export default function TasksEventsView() {
  return (
    <div>
      <Layout className="mb-1">
        <div className="flex flex-col gap-3 p-5">
          <ArrowLeft size={16} />
          <div className="text-sm text-neutral-600">November 11, 2025</div>
          <h1 className="font-semibold text-3xl">Tasks & Events</h1>
          <div className="flex gap-1">
            <Button
              className="text-xs font-normal text-neutral-600 p-0 h-8 pl-2 pr-2 rounded-full"
              variant="secondary"
            >
              All
            </Button>
            <Button className="text-xs font-normal bg-blue-700 p-0 h-8 pl-1 pr-2 border border-transparent rounded-full hover:bg-white hover:text-blue-700 hover:border-border">
              <div className="p-1 bg-white rounded-full">
                <SunMedium fill="blue" color="blue" />
              </div>
              Life
            </Button>
            <Button
              className="text-xs font-normal text-neutral-600 p-0 h-8 pl-2 pr-2 rounded-full"
              variant="secondary"
            >
              Home & Family
            </Button>
            <Button
              className="text-xs font-normal text-neutral-600 p-0 h-8 pl-2 pr-2 rounded-full"
              variant="secondary"
            >
              Work
            </Button>
          </div>
          <div className="font-medium mb-3.5">
            <div className="flex gap-4 items-center text-[12px] text-neutral-500">
              <div className="w-10">07:51</div>
              <div className="p-1 bg-blue-700 rounded-full">
                <Check size={10} strokeWidth={3} color="white" />
              </div>
              <div>
                <div className="line-through">Journal for 3 min</div>
              </div>
            </div>
            <div
              className="ml-16"
              style={{ minHeight: "64px", borderLeft: "2px dashed #1447e6" }}
            />
            <div className="flex gap-4 items-center text-[12px] text-neutral-500">
              <div className="text-blue-700 flex items-center gap-0.5">
                <Circle fill="blue" size={4} />
                11:39
              </div>
              <div className=" bg-white rounded-full border-2 -ml-px">
                <Circle size={16} strokeWidth={3} color="white" />
              </div>
              <div>
                <div className="text-black">
                  Finish my book (only 64 pages left)!!!
                </div>
              </div>
            </div>
            <div
              className="ml-16"
              style={{ minHeight: "16px", borderLeft: "2px solid #e6e6e6" }}
            />
            <div
              className="ml-16"
              style={{ minHeight: "16px", borderLeft: "2px dashed #e6e6e6" }}
            />
            <div className="flex gap-4 items-center text-[12px] text-neutral-300">
              <div className="w-10">12:35</div>
              <div className="p-1 bg-neutral-300 rounded-full">
                <Circle size={10} strokeWidth={3} color="neutral-300" />
              </div>
              <div>
                <div>From voice note...</div>
              </div>
            </div>
            <div
              className="ml-16"
              style={{ minHeight: "16px", borderLeft: "2px dashed #e6e6e6" }}
            />
            <div
              className="ml-16"
              style={{ minHeight: "16px", borderLeft: "2px solid #e6e6e6" }}
            />
            <div className="flex gap-4 items-center text-[12px] ">
              <div className="w-10 text-neutral-500">12:35</div>
              <div className=" bg-white rounded-full border-2 -ml-px">
                <Circle size={16} strokeWidth={3} color="white" />
              </div>
              <div>
                <div>Workout</div>
              </div>
            </div>
            <div
              className="ml-16"
              style={{ minHeight: "32px", borderLeft: "2px solid #e6e6e6" }}
            />
            <div className="flex gap-4 items-center text-[12px] ">
              <div className="w-10 text-neutral-500">19:00</div>
              <div className=" bg-white rounded-full border-2 -ml-px">
                <Circle size={16} strokeWidth={3} color="white" />
              </div>
              <div className="flex gap-4 items-center -mt-2">
                <div>Dinner with Lucca</div>
                <div className="flex items-center gap-2 p-0.5 pl-1 pr-1 rounded-2xl bg-blue-100 text-blue-700 font-normal">
                  Open in <Calendar1 size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Layout className="mt-1">
        <div className="flex justify-between p-2 items-center text-neutral-500">
          <div className="p-2 rounded-full bg-neutral-100">
            <File size={12} />
          </div>
          <div>
            <div className="flex items-center gap-0.5 bg-neutral-100 p-2 rounded-3xl text-xs">
              <div className="w-10 text-blue-800 flex items-center gap-0.5">
                <Circle fill="blue" size={4} />
                0:04
              </div>
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "2px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "2px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "2px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "2px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "4px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "10px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "16px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "8px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "18px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "12px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "6px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "14px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "10px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "20px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "8px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "14px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "5px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "10px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "7px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "12px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "4px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "9px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "6px" }}
              />
              <div
                className="w-0.5 bg-blue-800 rounded-sm"
                style={{ height: "3px" }}
              />
              <div className="pl-3 flex items-center gap-1">
                <div className="p-2 rounded-full bg-neutral-200 text-neutral-600">
                  <Trash2 size={12} />
                </div>
                <div className="p-2 rounded-full bg-neutral-200">
                  <CircleMinus size={12} />
                </div>
                <div className="p-2 rounded-full bg-blue-700 text-white">
                  <Send size={12} />
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-full bg-neutral-100">
            <CalendarPlus size={12} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
