import { BookmarkPlus } from "lucide-react";

export default function FastFoodView() {
  return (
    <div className="flex justify-center items-center mt-7">
      {/* Classic Cheeseburger */}
      <div className="relative w-75 h-90 m-4 rounded-3xl shadow-2xl">
        <img
          src="/Classic Cheeseburger.jpg"
          alt="Classic Cheeseburger"
          className="object-cover h-full rounded-3xl w-full"
        />
        <div
          className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
          style={{
            height: "60%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 45%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 p-3 flex gap-1 justify-between text-white">
          <div className="bg-white/15 backdrop-blur-md rounded-full p-2 pl-4 pr-4 text-xs font-semibold">
            Top Pick
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-full p-2">
            <BookmarkPlus size={16} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1">
          <h2 className="text-white font-bold text-3xl max-w-60">
            Classic Cheeseburger
          </h2>
          <p className="text-neutral-300 text-xs max-w-60 pb-2">
            Juicy beef patty, melted cheddar, fresh lettuce, tomatoes, and a
            hint of smoky sauce; all packed in a soft, toasted bun.
          </p>
          <button className="w-full bg-white rounded-3xl font-semibold py-2">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Honey Glazed Chicken */}
      <div className="relative w-75 h-90 m-4 rounded-3xl shadow-2xl">
        <img
          src="/Honey Glazed Chicken.jpg"
          alt="Honey Glazed Chicken"
          className="object-cover h-full rounded-3xl w-full"
        />
        <div
          className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
          style={{
            height: "60%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 45%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 p-3 flex gap-1 justify-between text-white">
          <div className="bg-white/15 backdrop-blur-md rounded-full p-2 pl-4 pr-4 text-xs font-semibold">
            Veg
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-full p-2">
            <BookmarkPlus size={16} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1">
          <h2 className="text-white font-bold text-3xl max-w-60">
            Honey Glazed Chicken
          </h2>
          <p className="text-neutral-300 text-xs max-w-60 pb-2">
            Crispy chicken in a sweet & savory honey-soy glaze, served on
            jasmine rice with sesame sseds & scalliouns.
          </p>
          <button className="w-full bg-white rounded-3xl font-semibold py-2">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Spicy Fried Chicken */}
      <div className="relative w-75 h-90 m-4 rounded-3xl shadow-2xl">
        <img
          src="/Spicy Fried Chicken.jpg"
          alt="Spicy Fried Chicken"
          className="object-cover h-full rounded-3xl w-full"
        />
        <div
          className="absolute bottom-0 left-0 right-0 rounded-b-3xl"
          style={{
            height: "60%",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 45%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 p-3 flex gap-1 justify-between text-white">
          <div className="bg-white/15 backdrop-blur-md rounded-full p-2 pl-4 pr-4 text-xs font-semibold">
            Best Seller
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-full p-2">
            <BookmarkPlus size={16} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1">
          <h2 className="text-white font-bold text-3xl max-w-60">
            Spicy Fried Chicken
          </h2>
          <p className="text-neutral-300 text-xs max-w-60 pb-2">
            Crispy, golden-fried chicken with a fiery kick, served with a side
            of tangy dipping sauce. Perfect for spice lovers!
          </p>
          <button className="w-full bg-white rounded-3xl font-semibold py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
