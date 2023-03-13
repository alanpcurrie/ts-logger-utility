import { Logger, Color, Css } from "../types/types";

const DEFAULT_COLOR = "#6495ed";

export const CSS: Css = "%c";

export const logger = <T extends Color, U extends Logger<U>["msgArgs"]>(
  color: T = DEFAULT_COLOR as T
): ((...msgArgs: U) => void) => (...msgArgs: U) =>
  console.log(`${CSS}${msgArgs.join(", ")}`, `color: ${color}`);

export const defaultLogger = logger();

export const errorLogger = logger("#ff6347");

export const warnLogger = logger("#f08800");

export const infoLogger = logger("#00fa9a");

export const rgbaLogger = logger(`rgba(${0}, ${250}, ${154}, ${0.5})`);


