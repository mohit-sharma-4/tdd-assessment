import { add } from './add';

describe('Add string', () => {
  it('should return 0 when string is empty', () => {
    const result = add('');
    expect(result).toBe(0);
  });
});
