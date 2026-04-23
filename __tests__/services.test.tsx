import { render } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Services grid', () => {
  it('renders all 6 service titles under #services', () => {
    const { container } = render(<LandingPage />)
    const section = container.querySelector('#services')
    expect(section).toBeTruthy()
    for (const title of [
      'Dumpster Rental','Junk Removal','Property Demolition',
      'Paver and Concrete','Residential Clean Outs','Disaster Relief',
    ]) {
      expect(section!.textContent).toContain(title)
    }
  })
})
