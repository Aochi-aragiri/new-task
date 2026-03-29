export function Sphere({
  size,
  color,
  top,
  left,
  right,
  bottom,
  zIndex,
}: {
  size: number;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: "50%",
        position: "absolute",
        top,
        left,
        right,
        bottom,
        zIndex,
        boxShadow:
          "inset -20px -20px 40px rgba(0,0,0,0.1), inset 10px 10px 20px rgba(255,255,255,0.6)",
      }}
    />
  );
}
