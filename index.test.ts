import { expect, describe, it } from 'vitest';
import { hello } from './index';

describe('index', () => {
  describe('hello', () => {
    it('should return a greeting message', () => {
      expect(hello('world')).toBe('Hello, world!');
    });
  });
});
