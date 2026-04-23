import { render } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Sizes grid', () => {
  it('#sizes contains all three dumpster names', () => {
    const { container } = render(<LandingPage />)
    const sizes = container.querySelector('#sizes')
    expect(sizes).toBeTruthy()
    expect(sizes!.textContent).toContain('10 Yard Dumpster')
    expect(sizes!.textContent).toContain('20 Yard Dumpster')
    expect(sizes!.textContent).toContain('30 Yard Dumpster')
  })
  it('#sizes shows all three starting prices', () => {
    const { container } = render(<LandingPage />)
    const sizes = container.querySelector('#sizes')
    expect(sizes!.textContent).toContain('$350')
    expect(sizes!.textContent).toContain('$450')
    expect(sizes!.textContent).toContain('$550')
  })
  it('shows the WHICH ONE FITS? headline', () => {
    const { container } = render(<LandingPage />)
    expect(container.textContent).toContain('WHICH ONE')
    expect(container.textContent).toContain('FITS?')
  })
})
