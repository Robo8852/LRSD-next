import { render } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('LandingPage integration', () => {
  it('renders all anchorable sections and landmarks', () => {
    const { container } = render(<LandingPage />)
    expect(container.querySelector('nav')).toBeTruthy()
    expect(container.querySelector('#services')).toBeTruthy()
    expect(container.querySelector('#sizes')).toBeTruthy()
    expect(container.querySelector('#areas')).toBeTruthy()
    expect(container.querySelector('footer')).toBeTruthy()
  })
  it('contains the brutalist headline', () => {
    const { container } = render(<LandingPage />)
    expect(container.textContent).toContain('CLEAR THE CLUTTER WITH')
    expect(container.textContent).toContain('CONFIDENCE.')
  })
})
