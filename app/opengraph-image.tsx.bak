import { ImageResponse } from "next/og";

export const alt = "A.K. Tutorials";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#0A1730", color: "#FBF8F1", borderLeft: "10px solid #C98A1B" }}>
        <div style={{ fontSize: 84, fontWeight: 700 }}>A.K. Tutorials</div>
        <div style={{ fontSize: 44, marginTop: 24, color: "#E8B655" }}>Learning that shows its working.</div>
      </div>
    ),
    size
  );
}
