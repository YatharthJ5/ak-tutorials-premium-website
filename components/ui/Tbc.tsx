export default function Tbc({ children = "To be confirmed" }: { children?: string }) {
  return <span className="tbc">{children}</span>;
}
