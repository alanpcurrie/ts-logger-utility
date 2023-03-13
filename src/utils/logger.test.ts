import { describe, it, expect, vi } from 'vitest';
import { logger, errorLogger, infoLogger, warnLogger, CSS } from './logger';

console.log = vi.fn();

describe('Logger tests', () => {
    it('should log correctly', () => {
    logger(`#fff`)('custom message');
    expect(console.log).toHaveBeenCalledWith(`${CSS}custom message`, "color: #fff");
  });  
  it('should log rgba correctly', () => {
    logger(`rgba(${0}, ${250}, ${154}, ${0.5})`)('rgba message');
    expect(console.log).toHaveBeenCalledWith(`${CSS}rgba message`, "color: rgba(0, 250, 154, 0.5)");
  }); 
});

describe('Error Logger tests', () => {
    it('should log correctly', () => {
    errorLogger('error message');
    expect(console.log).toHaveBeenCalledWith(`${CSS}error message`, "color: #ff6347");
  });  
});

describe('Info Logger tests', () => {
    it('should log correctly', () => {
    infoLogger('info message');
    expect(console.log).toHaveBeenCalledWith(`${CSS}info message`, "color: #00fa9a");
  });  
});

describe('Warn Logger tests', () => {
    it('should log correctly', () => {
    warnLogger('warn message');
    expect(console.log).toHaveBeenCalledWith(`${CSS}warn message`, "color: #f08800");
  });  
});
