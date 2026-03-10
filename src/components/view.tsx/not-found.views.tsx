import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFoundView() {
  return (
    <div className="h-dvh flex flex-col gap-4 items-center justify-center">
      <p className=" text-neutral-900 text-4xl font-bold">
        Error 404. Not found!
      </p>
      <p>Don’t worry! You can go home by pressing the button below!</p>
      <Button asChild variant="outline">
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
