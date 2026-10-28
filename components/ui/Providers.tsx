"use client";
import { MotionConfig } from "framer-motion";

/** Makes every Framer Motion animation honour the user's reduced-motion setting. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
