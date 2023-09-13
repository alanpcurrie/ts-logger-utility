import { Logger,  Css,  ColorType} from "../types/types";

const DEFAULT_COLOR = "#6495ed";

export const CSS: Css = "%c";

const COLOR_PATTERNS: Record<string, RegExp> = {
  'HEX': /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
  'RGB': /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
  'RGBA': /^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d+(\.\d+)?\)$/,
  'HSL': /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/,
  'HWB': /^hwb\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/
};

const validateColor = (color: ColorType): boolean =>
  Object.values(COLOR_PATTERNS).some(pattern => pattern.test(color));

// export const logger = <T extends ColorType, U extends Logger<U>["msgArgs"]>(
//   color: T = DEFAULT_COLOR as T
// ): ((...msgArgs: U) => void) => (...msgArgs: U) =>
//     console.log(`${CSS}${msgArgs.join(", ")}`, `color: ${color}`);


export const logger = <T extends ColorType, U extends Logger<U>["msgArgs"]>(
  color: T = DEFAULT_COLOR as T
): ((...msgArgs: U) => void) =>
  !validateColor(color)
  ? (...msgArgs: U) => console.error(`$${msgArgs.join(", ")}`,`Invalid color format: ${color}`)
  : (...msgArgs: U) => console.log(`${CSS}${msgArgs.join(", ")}`, `color: ${color}`);


export const defaultLogger = logger();

export const errorLogger = logger("#ff6347");

export const warnLogger = logger("#f08800");

export const infoLogger = logger("#00fa9a");

export const rgbaLogger = logger(`rgba(${0}, ${250}, ${154}, ${0.5})`);
