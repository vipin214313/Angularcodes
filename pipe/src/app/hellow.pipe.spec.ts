import { HellowPipe } from './hellow.pipe';

describe('HellowPipe', () => {
  it('create an instance', () => {
    const pipe = new HellowPipe();
    expect(pipe).toBeTruthy();
  });
});
