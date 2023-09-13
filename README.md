![Log Pal Banner](/log-pal.png)

# Log Pal
A lightweight, customizable logging utility built with TypeScript.

## Features

- Color-coded logging to easily distinguish between message types.
- Built with TypeScript for type safety and developer experience.
- Easily extendable for custom color codes and message types.

## Installation

Using npm:

```bash
npm install vanilla-typescript-vite
```

## Usage

```javascript
import { logger, defaultLogger, errorLogger, warnLogger, rgbaLogger, infoLogger } from 'path-to-logger-utility';

// Custom color logger
logger(`#ffffff`)('custom message');

// Default logger
defaultLogger("default:", "this is a message");

// Error logger
errorLogger("error:", "this is an error message");

// Warning logger
warnLogger("warn:", "this is a warning message");

// RGBA logger
rgbaLogger("rgba:", "rgba logger");

// Info logger with multiple arguments
infoLogger(
  "info: this is an information message",
  "and more ...arrrrgs",
  "and some more ...arrrrgs",
  5
);
```

## Development

To start the development server:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To run tests:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---
