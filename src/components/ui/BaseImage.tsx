"use client";

import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/assets";

/** next/image + unoptimized can skip basePath on static export — always prefix. */
export function BaseImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBasePath(src) : src;
  return <Image src={resolved} {...props} />;
}
