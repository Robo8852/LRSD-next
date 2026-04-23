import { render } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Service area', () => {
  it('#areas contains all 8 cities', () => {
    const { container } = render(<LandingPage />)
    const areas = container.querySelector('#areas')
    expect(areas).toBeTruthy()
    for (const city of [
      'Tampa','St. Petersburg','Clearwater','Sarasota',
      'Bradenton','Fort Myers','Naples','Venice',
    ]) {
      expect(areas!.textContent).toContain(city)
    }
  })
  it('shows the TAMPA BAY hub label', () => {
    const { container } = render(<LandingPage />)
    expect(container.textContent).toContain('TAMPA BAY')
  })
})
