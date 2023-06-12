"use client"

import { InfinitySpin } from "react-loader-spinner";

export default function loading() {
  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="w-screen grow flex items-center justify-center"
    >
      <InfinitySpin width="200" color="#fdba74" />;
    </div>
  );
}
