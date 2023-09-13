import './style.css'

import {
  logger,
  defaultLogger,
  errorLogger,
  warnLogger,
  infoLogger,
  rgbaLogger,
} from "./utils/log-pal";

logger(`#fff`)('custom message');

defaultLogger("default:", "this is a message");

errorLogger("error:", "this is an error message");

warnLogger("warn:", "this is a warning message");

rgbaLogger("rgba:", "rgba logger")

infoLogger(
  "info: this is an information message",
  "and more ...arrrrgs",
  "and some more ...arrrrgs",
  5
);

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
