import { cn } from '@/lib/utils'

describe('cn', () => {
  it('merges truthy class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })
  it('dedupes conflicting tailwind classes via twMerge', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })
  it('drops falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })
})
