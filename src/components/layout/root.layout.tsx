import { NavLink, Outlet } from "react-router";
import { Button } from "../ui/button";
import { Aperture } from "lucide-react";
import { links } from "@/data/links";

export default function RootLayout() {
  return (
    <div className="w-full m-0 p-0">
      <nav className="w-full flex flex-wrap md:flex-nowrap md:justify-around gap-2 p-1 bg-gray-800 text-white justify-around  items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Aperture /> Menu
        </h2>
        {links.map(({ to, label }) => (
          <Button key={to} asChild variant="ghost" className="p-2">
            <NavLink className="[&.active]:text-neutral-400" to={to}>
              {label}
            </NavLink>
          </Button>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
