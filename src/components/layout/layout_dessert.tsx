type LayoutDessertProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LayoutDessert({
  children,
  className,
}: LayoutDessertProps) {
  return (
    <div className="flex justify-center items-center content-center">
      <div
        className={`w-76 rounded-2xl m-2 flex gap-2 items-center p-2 shadow-2xl bg-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
