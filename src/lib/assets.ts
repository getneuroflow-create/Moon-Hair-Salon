/** Prefix public asset paths when hosted under a subpath (e.g. GitHub Pages). */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("http")) {
    return path;
  }
  return `${base}${path}`;
}
