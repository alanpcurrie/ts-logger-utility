export type HEX = `#${string}`;
export type HSL = `hsl(${number}, ${number}%, ${number}%)`
export type HWB = `hwb(${number}, ${number}%, ${number}%)`;
export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type Css = "%c";
export type Color = RGB | RGBA | HEX | HSL | HWB;

export type Logger<U> = {
  color: Color;
  msgArgs: U[];
};
