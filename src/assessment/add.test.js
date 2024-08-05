import { add } from './add';

describe('Add string', () => {
  it('should return 0 when string is empty', () => {
    const result = add('');
    expect(result).toBe(0);
  });

  it('should show an error when using negative numbers', () => {
    expect(() => add('3;-1')).toThrow('negative numbers not allowed -1');
  });
});
