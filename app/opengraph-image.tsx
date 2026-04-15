import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "RENOA | Desarrollo Web Profesional en Guatemala"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#090820",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top purple border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#7030EF",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(112,48,239,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: 900,
            letterSpacing: "0.12em",
            color: "#FFFFFF",
            display: "flex",
            marginBottom: "24px",
          }}
        >
          REN
          <span style={{ color: "#9B6BF5" }}>O</span>
          A
        </div>

        {/* Divider */}
        <div
          style={{
            width: "64px",
            height: "3px",
            background: "#7030EF",
            borderRadius: "2px",
            marginBottom: "28px",
          }}
        />

        {/* Subtext */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em",
          }}
        >
          Desarrollo Web Profesional · Guatemala
        </div>

        {/* Bottom purple border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#7030EF",
          }}
        />
      </div>
    ),
    size,
  )
}
