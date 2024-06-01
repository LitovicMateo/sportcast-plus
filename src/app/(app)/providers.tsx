"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { FaustProvider } from '@faustwp/experimental-app-router/ssr'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <FaustProvider>{children}</FaustProvider>
    </NextUIProvider>
  );
}
