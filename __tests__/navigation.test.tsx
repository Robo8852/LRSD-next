import { render, screen } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Navigation', () => {
  it('renders LRSD brand mark', () => {
    render(<LandingPage />)
    expect(screen.getAllByText(/^LRSD$/).length).toBeGreaterThan(0)
  })

  it('renders the four desktop anchor links', () => {
    render(<LandingPage />)
    expect(screen.getAllByRole('link', { name: /services/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^sizes$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /service area/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThan(0)
  })

  it('renders the phone CTA', () => {
    render(<LandingPage />)
    expect(screen.getAllByRole('link', { name: /\(813\) 555-0123/ }).length).toBeGreaterThan(0)
  })
})
