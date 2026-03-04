type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={`min-w-90 rounded-4xl border border-[rgb(218,218,218)] bg-white ${className}`}
    >
      {children}
    </div>
  );
}
