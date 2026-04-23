import { render, screen } from '@testing-library/react'
import LandingPage from '@/components/landing-page'

describe('Footer', () => {
  it('renders the 2024 copyright line', () => {
    render(<LandingPage />)
    expect(screen.getByText(/© 2024 LRSD Dumpster Rentals/)).toBeInTheDocument()
  })
  it('renders the Mon-Sat hours', () => {
    render(<LandingPage />)
    expect(screen.getByText(/Mon-Sat: 7am - 6pm/)).toBeInTheDocument()
  })
  it('renders the Tampa Bay Area line', () => {
    render(<LandingPage />)
    expect(screen.getByText(/^Tampa Bay Area, FL$/)).toBeInTheDocument()
  })
})
