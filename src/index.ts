export * from "./math/index.ts";
export * from "./gis/esri_wkt.ts";
export * from "./gis/xyzmap.ts";
export * from "./filetype.ts";

/** 判断两个 array 是否相等 */
export function array_is_equal(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}
