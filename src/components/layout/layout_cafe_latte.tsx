type LayoutCaffeLatteProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LayoutCaffeLatte({
  children,
  className,
}: LayoutCaffeLatteProps) {
  return (
    <div className="flex justify-center items-center content-center">
      <div
        className={`w-80 rounded-4xl m-7 bg-linear-to-r from-orange-300 to-orange-400 text-white font-medium flex flex-col gap-3 p-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
