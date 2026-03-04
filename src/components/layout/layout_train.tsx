type LayoutTrainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LayoutTrain({ children, className }: LayoutTrainProps) {
  return (
    <div className="flex flex-col justify-center items-center content-center m-7 min-h-screen">
      <div
        className={`relative z-10 min-w-100 rounded-2xl rounded-b-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] overflow-hidden ${className}`}
      >
        {children}
      </div>
      <div className="-mt-9.5 rounded-2xl h-10 min-w-100 bg-linear-to-r from-blue-500 to-purple-500"></div>
    </div>
  );
}
