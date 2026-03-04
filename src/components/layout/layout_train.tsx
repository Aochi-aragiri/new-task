type LayoutTrainProps = {
  children: React.ReactNode;
  className?: string;
};

export default function LayoutTrain({ children, className }: LayoutTrainProps) {
  return (
    <div className="flex justify-center items-center content-center min-h-screen">
      <div
        className={`relative z-10 min-w-90 p-4 rounded-2xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] ${className}`}
      >
        {children}
      </div>

      <div className="-mt-4.5 h-5 rounded-b-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
    </div>
  );
}
