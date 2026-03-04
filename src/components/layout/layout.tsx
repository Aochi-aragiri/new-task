type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="flex justify-center items-center content-center min-h-screen">
      <div
        className={`w-90 rounded-4xl m-7 border border-[rgb(218,218,218)] bg-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
