import { Link, Outlet } from "react-router";
import { Button } from "../ui/button";
import { Aperture } from "lucide-react";

export default function RootLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <nav className="w-full flex flex-wrap md:flex-nowrap md:justify-around gap-2 p-1 bg-gray-800 text-white justify-around items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Aperture /> Menu
        </h2>
        <Button asChild variant="ghost">
          <Link to="account">Account</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/air">Air</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/">Orders</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/swap">Swap</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/tasks-events">Tasks & Events</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/train">Train</Link>
        </Button>
      </nav>
      <Outlet />
    </div>
  );
}
