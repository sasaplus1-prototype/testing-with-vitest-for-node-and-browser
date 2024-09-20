import util from 'node:util';

export function hello(message: string): string {
  return util.format('Hello, %s!', message);
}
