import { footer } from './footer';

test('should first', () => {
  const result = footer();
  expect(result).toContain('footer');
  expect(result).toContain('ISDI Coders');
});

test('should first', () => {
  const result = footer('Test');
  expect(result).toContain('footer');
  expect(result).toContain('Test');
  expect(result).not.toContain('Coders');
});
