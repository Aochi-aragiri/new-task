type LayoutSwapProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LayoutSwap({ children, className }: LayoutSwapProps) {
  return (
    <div className="flex justify-center items-center content-center">
      <div
        className={`w-95 rounded-3xl p-4 border-[rgb(218,218,218)] bg-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
