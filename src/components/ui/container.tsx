type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`border border-[rgb(218,218,218)] rounded-2xl bg-[rgb(253,253,253)] m-4 flex items-center justify-between ${className}`}
    >
      {children}
    </div>
  );
}
