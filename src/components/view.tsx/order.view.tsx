import { BatteryFull, SignalHigh, Wifi } from "lucide-react";
import Layout from "../layout/layout";
import Container from "../ui/container";
import { details } from "@/data/details";
import { Button } from "../ui/button";

export default function OrderView() {
  return (
    <Layout>
      {/* Status bar */}
      <div className="p-5">
        <div className="flex justify-between">
          <div className="font-medium text-xs">9:41</div>
          <div>
            <div className="flex gap-2 font-medium">
              <SignalHigh size={18} />
              <Wifi size={18} />
              <BatteryFull size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Order status */}
      <div className="m-10 flex flex-col gap-4 justify-center items-center content-center">
        <img className="max-w-30" src="order-delivery.jpg"></img>
        <div className="flex flex-col text-center">
          <h2 className="font-bold text-xl">Order Status</h2>
          <h1 className="text-neutral-600 text-sm">
            Your package is on the way
          </h1>
        </div>
      </div>

      {/* Type of order */}
      <Container className="p-3">
        <div className="flex gap-6">
          <img className="max-w-10 rounded-2xl" src="watch.jpg"></img>
          <div className="text-xs text-neutral-600 flex flex-col justify-between">
            <p>Watch</p>
            <p className="font-bold text-black">Apple Watch</p>
            <div>
              Color: <b>Grey</b>
            </div>
          </div>
        </div>
        <p className="text-xs pr-3 font-medium">$1500.00</p>
      </Container>

      {/* Order summary */}
      <Container className="flex flex-col">
        <div className="mt-2 w-full border-b p-2 pl-4">
          <h3 className="text-xs font-bold">Order Summary</h3>
        </div>
        <div className="flex flex-col p-4 w-full gap-3">
          {details.map(({ title, text }) => (
            <div className="flex  justify-between text-xs" key={title}>
              <p className="text-neutral-600">{title}</p>
              <div className="font-medium text-neutral-800">{text}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* Btn */}
      <div className="m-10 flex flex-col gap-5 justify-center items-center content-center">
        <Button className="rounded-3xl min-w-60 min-h-12 text-xs">
          Track order
        </Button>
        <p className="text-xs text-green-600">
          Your order is confirmed and in transit
        </p>
      </div>
    </Layout>
  );
}
